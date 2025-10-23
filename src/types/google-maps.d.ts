// TypeScript declarations for Google Maps JavaScript API
declare namespace google {
  namespace maps {
    interface PlacesLibrary {
      Place: typeof places.Place;
    }

    interface GeocodingLibrary {
      Geocoder: typeof Geocoder;
    }

    class LatLng {
      constructor(lat: number, lng: number);
      lat(): number;
      lng(): number;
    }

    class Geocoder {
      geocode(
        request: GeocoderRequest,
        callback: (results: GeocoderResult[] | null, status: GeocoderStatus) => void
      ): void;
    }

    interface GeocoderRequest {
      address?: string;
      location?: LatLng | { lat: number; lng: number };
    }

    interface GeocoderResult {
      formatted_address: string;
      geometry: {
        location: LatLng;
      };
    }

    type GeocoderStatus = string;

    namespace places {
      /**
       * Defines information about the opening hours of a Place.
       */
      interface PlaceOpeningHours {
        /**
         * Check if the place is open at the specified time.
         * @param date Optional date to check. If not provided, checks current time.
         * @returns true if open, false if closed, undefined if hours are unknown
         */
        isOpen(date?: Date): boolean | undefined;

        /**
         * Opening periods covering seven days, starting from Sunday.
         */
        periods?: PlaceOpeningHoursPeriod[];

        /**
         * An array of seven strings representing the formatted opening hours for each day of the week.
         */
        weekdayDescriptions?: string[];
      }

      interface PlaceOpeningHoursPeriod {
        open: PlaceOpeningHoursTime;
        close?: PlaceOpeningHoursTime;
      }

      interface PlaceOpeningHoursTime {
        day: number;
        hours: number;
        minutes: number;
      }

      class Place {
        id: string;
        displayName?: string | null;
        formattedAddress?: string | null;
        location?: LatLng | null;
        rating?: number | null;
        businessStatus?: string | null;
        regularOpeningHours?: PlaceOpeningHours | null;
        currentOpeningHours?: PlaceOpeningHours | null;

        static searchNearby(request: SearchNearbyRequest): Promise<{ places: Place[] }>;
        fetchFields(options: FetchFieldsRequest): Promise<{ place: Place }>;
      }

      interface SearchNearbyRequest {
        locationRestriction: {
          center: LatLng | { lat: number; lng: number };
          radius: number;
        };
        includedTypes?: string[];
        excludedTypes?: string[];
        maxResultCount?: number;
        rankPreference?: SearchNearbyRankPreference;
        languageCode?: string;
      }

      interface FetchFieldsRequest {
        fields: string[];
      }

      enum SearchNearbyRankPreference {
        DISTANCE = 'DISTANCE',
        POPULARITY = 'POPULARITY'
      }

      // Legacy API (keeping for geocoder compatibility)
      class PlacesService {
        constructor(attrContainer: HTMLDivElement | google.maps.Map);
        nearbySearch(
          request: any,
          callback: (results: any[] | null, status: PlacesServiceStatus) => void
        ): void;
      }

      enum PlacesServiceStatus {
        OK = 'OK',
        ZERO_RESULTS = 'ZERO_RESULTS',
        ERROR = 'ERROR',
        INVALID_REQUEST = 'INVALID_REQUEST',
        OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',
        REQUEST_DENIED = 'REQUEST_DENIED',
        UNKNOWN_ERROR = 'UNKNOWN_ERROR'
      }
    }

    function importLibrary(library: string): Promise<any>;
  }
}
