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
 * Special location coordinates for eligibility bypass
 */
export const SPECIAL_LOCATION = {
  lat: -6.916375267767954,
  lon: 107.60944954796743
};

/**
 * Check if user is within specified radius of special location
 * @param userLat User's current latitude
 * @param userLon User's current longitude
 * @param radiusKm Radius in kilometers (default: 1 km)
 * @returns true if user is within radius
 */
export function isNearSpecialLocation(
  userLat: number,
  userLon: number,
  radiusKm: number = 1
): boolean {
  const distance = calculateDistance(
    userLat,
    userLon,
    SPECIAL_LOCATION.lat,
    SPECIAL_LOCATION.lon
  );

  const isNear = distance <= radiusKm;

  console.log('Special location check:', {
    userLocation: { lat: userLat, lon: userLon },
    specialLocation: SPECIAL_LOCATION,
    distance: `${distance.toFixed(3)} km`,
    radiusKm,
    isNear
  });

  return isNear;
}
