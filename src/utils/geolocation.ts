/**
 * Calculate distance between two geographic coordinates using Haversine formula
 * Returns distance in kilometers
 */
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  console.log('Distance calculation:', {
    from: { lat: lat1, lon: lon1 },
    to: { lat: lat2, lon: lon2 },
    distance: `${distance.toFixed(3)} km`
  });

  return distance;
}

/**
 * Convert degrees to radians
 */
function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * Special location type definition
 */
export interface SpecialLocation {
  name: string;
  lat: number;
  lon: number;
}

/**
 * Array of special location coordinates for eligibility bypass
 * Add or remove locations as needed
 */
export const SPECIAL_LOCATIONS: SpecialLocation[] = [
  {
    name: 'Fork',
    lat: -6.9076026129855554,
    lon: 107.60913267237055
  },
  {
    name: 'La Baraga Cafe',
    lat: -6.917333973912754,
    lon: 107.60943446774033
  },
  {
    name: 'Ibu Tuty Kue',
    lat: -6.950205443229705,
    lon: 107.6829845965765
  },
  {
    name: 'Roji Ramen RDTX Kuningan',
    lat: -6.223238986221357,
    lon: 106.82164435767169
  },
  {
    name: 'Fook Yew - De Entrance Arkadia',
    lat: -6.300338715353493,
    lon: 106.83362878465664
  },
  {
    name: 'Canary Restaurant',
    lat: -6.301014231500035,
    lon: 106.83461060979064
  }
  // Add more locations here as needed:
  // {
  //   name: 'Location Name',
  //   lat: YOUR_LATITUDE,
  //   lon: YOUR_LONGITUDE
  // },
];

/**
 * Check if user is within specified radius of any special location
 * @param userLat User's current latitude
 * @param userLon User's current longitude
 * @param radiusKm Radius in kilometers (default: 1 km)
 * @returns Object with isNear boolean and nearest location if found
 */
export function isNearSpecialLocation(
  userLat: number,
  userLon: number,
  radiusKm: number = 1
): { isNear: boolean; location: SpecialLocation | null; distance: number | null } {
  let nearestLocation: SpecialLocation | null = null;
  let nearestDistance: number | null = null;

  for (const location of SPECIAL_LOCATIONS) {
    const distance = calculateDistance(
      userLat,
      userLon,
      location.lat,
      location.lon
    );

    if (distance <= radiusKm) {
      // Found a location within radius
      if (nearestDistance === null || distance < nearestDistance) {
        nearestDistance = distance;
        nearestLocation = location;
      }
    }
  }

  const isNear = nearestLocation !== null;

  console.log('Special locations check:', {
    userLocation: { lat: userLat, lon: userLon },
    totalSpecialLocations: SPECIAL_LOCATIONS.length,
    radiusKm,
    isNear,
    nearestLocation: nearestLocation ? {
      name: nearestLocation.name,
      distance: `${nearestDistance?.toFixed(3)} km`
    } : null
  });

  return {
    isNear,
    location: nearestLocation,
    distance: nearestDistance
  };
}
