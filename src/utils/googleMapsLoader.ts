// Read Google API key from Vite environment variables
const GOOGLE_API_KEY = (import.meta.env.VITE_GOOGLE_API_KEY as string) || '';

let googleMapsLoaded = false;
let loadingPromise: Promise<void> | null = null;

/**
 * Load Google Maps JavaScript API with async loading method
 * Uses the modern &loading=async parameter for dynamic library imports
 */
export function loadGoogleMaps(): Promise<void> {
  if (googleMapsLoaded) {
    return Promise.resolve();
  }

  if (loadingPromise) {
    return loadingPromise;
  }

  loadingPromise = new Promise((resolve, reject) => {
    // Check if Google Maps is already loaded
    if (typeof google !== 'undefined' && google.maps && typeof google.maps.importLibrary === 'function') {
      googleMapsLoaded = true;
      resolve();
      return;
    }

    // Check if script is already in the DOM
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (existingScript) {
      // Script exists but not loaded yet, wait for it
      const checkLoaded = setInterval(() => {
        if (typeof google !== 'undefined' && google.maps && typeof google.maps.importLibrary === 'function') {
          clearInterval(checkLoaded);
          googleMapsLoaded = true;
          resolve();
        }
      }, 100);
      
      // Timeout after 10 seconds
      setTimeout(() => {
        clearInterval(checkLoaded);
        if (!googleMapsLoaded) {
          reject(new Error('Timeout loading Google Maps'));
        }
      }, 10000);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&loading=async`;
    script.async = true;
    
    script.onload = () => {
      // Wait for google.maps.importLibrary to be available
      const checkImportLibrary = setInterval(() => {
        if (typeof google !== 'undefined' && google.maps && typeof google.maps.importLibrary === 'function') {
          clearInterval(checkImportLibrary);
          googleMapsLoaded = true;
          resolve();
        }
      }, 50);
      
      // Timeout after 5 seconds
      setTimeout(() => {
        clearInterval(checkImportLibrary);
        if (!googleMapsLoaded) {
          reject(new Error('google.maps.importLibrary not available'));
        }
      }, 5000);
    };
    
    script.onerror = () => {
      loadingPromise = null;
      reject(new Error('Failed to load Google Maps'));
    };
    
    document.head.appendChild(script);
  });

  return loadingPromise;
}

export function isGoogleMapsLoaded(): boolean {
  return googleMapsLoaded && typeof google !== 'undefined' && typeof google.maps?.importLibrary === 'function';
}
