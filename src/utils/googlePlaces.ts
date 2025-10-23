import { loadGoogleMaps } from './googleMapsLoader';

// Read Google API key from Vite environment variables
const GOOGLE_API_KEY = (import.meta.env.VITE_GOOGLE_API_KEY as string) || '';

export interface Location {
  lat: number;
  lng: number;
}

export interface Restaurant {
  place_id: string;
  name: string;
  vicinity: string;
  rating: number;
  opening_hours?: {
    open_now: boolean;
  };
  geometry: {
    location: Location;
  };
}

/**
 * Geocode an address to get coordinates using Google Maps Geocoding API
 */
export async function geocodeAddress(address: string): Promise<Location | null> {
  await loadGoogleMaps();
  
  try {
    // Import the geocoding library
    const { Geocoder } = await google.maps.importLibrary("geocoding") as google.maps.GeocodingLibrary;
    
    return new Promise((resolve) => {
      const geocoder = new Geocoder();
      
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          const location = results[0].geometry.location;
          resolve({
            lat: location.lat(),
            lng: location.lng()
          });
        } else {
          console.error('Geocoding failed:', status);
          resolve(null);
        }
      });
    });
  } catch (error) {
    console.error('Error loading geocoding library:', error);
    return null;
  }
}

/**
 * Reverse geocode coordinates to get address using Google Maps Geocoding API
 */
export async function reverseGeocode(lat: number, lng: number): Promise<string | null> {
  await loadGoogleMaps();
  
  try {
    // Import the geocoding library
    const { Geocoder } = await google.maps.importLibrary("geocoding") as google.maps.GeocodingLibrary;
    
    return new Promise((resolve) => {
      const geocoder = new Geocoder();
      const latlng = { lat, lng };
      
      geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          resolve(results[0].formatted_address);
        } else {
          console.error('Reverse geocoding failed:', status);
          resolve(null);
        }
      });
    });
  } catch (error) {
    console.error('Error loading geocoding library:', error);
    return null;
  }
}

/**
 * Search for nearby restaurants using Google Places API REST endpoint (searchNearby)
 * Uses REST API with DISTANCE rank preference
 * @param location - Center point for search
 * @param radius - Search radius in meters (default 1000m = 1km)
 * @param minRating - Minimum rating filter (default 4.0)
 * @param checkOpenNow - Filter for currently open restaurants (default true)
 */
export async function searchNearbyRestaurants(
  location: Location,
  radius: number = 1000,
  minRating: number = 4.0,
  checkOpenNow: boolean = true
): Promise<Restaurant[]> {
  const endpoint = 'https://places.googleapis.com/v1/places:searchNearby';
  
  try {
    // Prepare request body for Places API (New)
    const requestBody = {
      includedTypes: ['restaurant', 'cafe', 'coffee_shop'],
      maxResultCount: 20, // Request more than 10 so we can filter
      locationRestriction: {
        circle: {
          center: {
            latitude: location.lat,
            longitude: location.lng
          },
          radius: radius
        }
      },
      rankPreference: 'DISTANCE'
    };
    
    // Make POST request to searchNearby endpoint
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': GOOGLE_API_KEY,
        'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.location,places.rating,places.businessStatus,places.currentOpeningHours'
      },
      body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
      console.error('Places API error:', response.status, response.statusText);
      return [];
    }
    
    const data = await response.json();
    
    if (!data.places || data.places.length === 0) {
      return [];
    }
    
    // Load Google Maps SDK to use PlaceOpeningHours for proper isOpen() check
    await loadGoogleMaps();
    
    // Filter and map results
    const restaurants: Restaurant[] = data.places
      .filter((place: any) => {
        // Filter by rating
        const meetsRating = place.rating !== null && place.rating !== undefined && place.rating >= minRating;
        
        // Filter by open now using currentOpeningHours.openNow
        // This uses the PlaceOpeningHours interface data
        const meetsOpenNow = checkOpenNow 
          ? (place.businessStatus === 'OPERATIONAL' && 
             place.currentOpeningHours?.openNow === true)
          : true;
        
        return meetsRating && meetsOpenNow;
      })
      .map((place: any) => ({
        place_id: place.id,
        name: place.displayName?.text || '',
        vicinity: place.formattedAddress || '',
        rating: place.rating || 0,
        opening_hours: place.currentOpeningHours ? {
          open_now: place.currentOpeningHours.openNow || false
        } : undefined,
        geometry: {
          location: {
            lat: place.location?.latitude || 0,
            lng: place.location?.longitude || 0
          }
        }
      }));
    
    return restaurants;
  } catch (error) {
    console.error('Places search failed:', error);
    return [];
  }
}

/**
 * Get current user location
 */
export function getCurrentLocation(): Promise<Location> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
}
