// Read BestTime API keys from Vite environment variables
const BESTTIME_PRIVATE_KEY = (import.meta.env.VITE_BESTTIME_PRIVATE_KEY as string) || '';
const BESTTIME_PUBLIC_KEY = (import.meta.env.VITE_BESTTIME_PUBLIC_KEY as string) || '';

// Response from /forecasts/busy endpoint (specific hour/day data)
export interface BusynessData {
  status: string;
  venue_info?: {
    venue_name: string;
    venue_address: string;
    venue_timezone: string;
    venue_current_gmttime_iso?: string;
    venue_current_localtime_iso?: string;
  };
  analysis?: {
    venue_forecasted_busyness?: number; // 0-100 or -1 if no data
    venue_forecasted_busyness_available?: boolean;
    hour_analysis?: {
      hour: number;
      intensity_nr: number; // -1 to 100 (percentage)
      intensity_txt: string; // "Low", "Average", "High", etc.
    };
    day_info?: {
      day_int: number;
      day_text: string;
      venue_open?: number;
      venue_closed?: number;
    };
  };
  epoch_analysis?: number;
  forecast_updated_on?: string;
}

interface NewForecastResponse {
  status: string;
  venue_info?: {
    venue_id: string;
    venue_name?: string;
    venue_address?: string;
  };
  message?: string;
}

/**
 * Create a new forecast to get venue_id
 * POST with query parameters as per BestTime API guidelines
 */
export async function createNewForecast(
  venueName: string,
  venueAddress: string
): Promise<string | null> {
  try {
    const params = new URLSearchParams({
      api_key_private: BESTTIME_PRIVATE_KEY,
      venue_name: venueName,
      venue_address: venueAddress
    });

    console.log('Creating new forecast for:', { venueName, venueAddress });

    const response = await fetch(`https://besttime.app/api/v1/forecasts?${params}`, {
      method: 'POST',
      mode: 'cors' // Explicitly set CORS mode
    });

    if (!response.ok) {
      console.error('BestTime API error:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Error response:', errorText);
      
      // Check for CORS errors
      if (response.status === 0) {
        console.error('CORS Error: The BestTime API server must set Access-Control-Allow-Origin header');
      }
      
      return null;
    }

    const data: NewForecastResponse = await response.json();
    console.log('New forecast response:', data);
    
    if (data.venue_info?.venue_id) {
      return data.venue_info.venue_id;
    }
    
    console.error('No venue_id in response:', data);
    return null;
  } catch (error) {
    console.error('Error creating new forecast:', error);
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      console.error('CORS Error: Cannot set Access-Control-Allow-Origin on client side. The BestTime API server must allow cross-origin requests.');
    }
    return null;
  }
}

/**
 * Get forecast data using venue_id
 * Uses /forecasts/busy endpoint with day_step and hour_step
 * @param venueId - The venue ID from createNewForecast
 * @param dayStep - Day offset (0 = today, 1 = tomorrow, etc.)
 * @param hourStep - Hour offset (0 = current hour, 1 = next hour, etc.)
 */
export async function getForecastData(
  venueId: string,
  dayStep: number = 0,
  hourStep: number = 0
): Promise<BusynessData | null> {
  try {
    const params = new URLSearchParams({
      api_key_public: BESTTIME_PUBLIC_KEY,
      venue_id: venueId,
      day_step: dayStep.toString(),
      hour_step: hourStep.toString()
    });

    console.log('Getting forecast data for venue_id:', venueId, { dayStep, hourStep });

    const response = await fetch(`https://besttime.app/api/v1/forecasts/busy?${params}`, {
      method: 'GET',
      mode: 'cors' // Explicitly set CORS mode
    });

    if (!response.ok) {
      console.error('BestTime API error:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Error response:', errorText);
      
      // Check for CORS errors
      if (response.status === 0) {
        console.error('CORS Error: The BestTime API server must set Access-Control-Allow-Origin header');
      }
      
      return null;
    }

    const data = await response.json();
    console.log('Forecast data response:', data);
    
    return data;
  } catch (error) {
    console.error('Error getting forecast data:', error);
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      console.error('CORS Error: Cannot set Access-Control-Allow-Origin on client side. The BestTime API server must allow cross-origin requests.');
    }
    return null;
  }
}

/**
 * Get busyness data for a venue
 * Step 1: Create new forecast to get venue_id
 * Step 2: Get forecast data using venue_id
 */
export async function getVenueBusyness(
  venueName: string,
  venueAddress: string
): Promise<BusynessData | null> {
  try {
    // Step 1: Create new forecast
    const venueId = await createNewForecast(venueName, venueAddress);
    
    console.log('Venue ID obtained:', venueId);

    // Step 2: Get forecast data
    if (!venueId) {
      console.error('Failed to obtain venueId');
      return null;
    }
    const forecastData = await getForecastData(venueId);
    
    return forecastData;
  } catch (error) {
    console.error('Error in getVenueBusyness:', error);
    return null;
  }
}

/**
 * Check if current hour is busy based on busyness intensity
 * @param busynessData - The forecast data from BestTime /forecasts/busy API
 * @returns true if busyness intensity is 70% or higher, false otherwise
 */
export function isCurrentHourBusy(busynessData: BusynessData): boolean {
  if (!busynessData.analysis) {
    console.log('No analysis data available');
    return false;
  }

  // Check venue_forecasted_busyness (0-100 or -1)
  if (busynessData.analysis.venue_forecasted_busyness !== undefined) {
    const busyness = busynessData.analysis.venue_forecasted_busyness;
    console.log('Venue forecasted busyness:', busyness);
    
    // -1 means no data available
    if (busyness === -1) {
      return false;
    }
    
    // 70% or higher is considered busy enough for discount
    return busyness >= 70;
  }

  // Fallback: check hour_analysis intensity_nr
  if (busynessData.analysis.hour_analysis?.intensity_nr !== undefined) {
    const intensity = busynessData.analysis.hour_analysis.intensity_nr;
    console.log('Hour analysis intensity:', intensity);
    
    // -1 means no data available
    if (intensity === -1) {
      return false;
    }
    
    // 70% or higher is considered busy enough for discount
    return intensity >= 70;
  }

  console.log('No busyness metrics found in response');
  return false;
}

/**
 * Generate mock busyness data based on current time
 * Useful for testing without hitting API limits
 */
export function getMockBusynessData(
  venueName: string,
  venueAddress: string
): BusynessData {
  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.getDay(); // 0 = Sunday, 6 = Saturday
  
  // Simulate busyness: high during lunch (12-14) and dinner (18-21)
  const isBusyHour = (currentHour >= 12 && currentHour <= 14) || (currentHour >= 18 && currentHour <= 21);
  const busynessScore = isBusyHour ? 85 : 45; // 85% busy during peak, 45% otherwise

  return {
    status: 'OK',
    venue_info: {
      venue_name: venueName,
      venue_address: venueAddress,
      venue_timezone: 'Asia/Jakarta',
      venue_current_localtime_iso: now.toISOString()
    },
    analysis: {
      venue_forecasted_busyness: busynessScore,
      venue_forecasted_busyness_available: true,
      hour_analysis: {
        hour: currentHour,
        intensity_nr: busynessScore,
        intensity_txt: isBusyHour ? 'High' : 'Average'
      },
      day_info: {
        day_int: currentDay,
        day_text: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentDay],
        venue_open: 9,
        venue_closed: 22
      }
    }
  };
}
