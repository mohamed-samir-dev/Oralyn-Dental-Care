/**
 * Geolocation Service
 * Detects user's country and determines appropriate language
 */

// Arabic-speaking countries
const ARABIC_COUNTRIES = [
  'EG', // Egypt
  'SA', // Saudi Arabia
  'AE', // UAE
  'QA', // Qatar
  'KW', // Kuwait
  'BH', // Bahrain
  'OM', // Oman
  'JO', // Jordan
  'LB', // Lebanon
  'SY', // Syria
  'IQ', // Iraq
  'YE', // Yemen
  'PS', // Palestine
  'MA', // Morocco
  'TN', // Tunisia
  'DZ', // Algeria
  'LY', // Libya
  'SD', // Sudan
  'MR', // Mauritania
  'DJ', // Djibouti
  'SO', // Somalia
  'KM', // Comoros
];

export interface LocationInfo {
  country: string;
  countryCode: string;
  isArabicRegion: boolean;
}

/**
 * Detects user's location using IP geolocation
 */
export const detectUserLocation = async (): Promise<LocationInfo> => {
  try {
    // Try multiple geolocation services for reliability
    const services = [
      'https://ipapi.co/json/',
      'https://ip-api.com/json/',
      'https://ipinfo.io/json'
    ];

    for (const service of services) {
      try {
        const response = await fetch(service);
        if (!response.ok) continue;
        
        const data = await response.json();
        const countryCode = data.country_code || data.countryCode || data.country;
        
        if (countryCode) {
          return {
            country: data.country_name || data.country || countryCode,
            countryCode: countryCode.toUpperCase(),
            isArabicRegion: ARABIC_COUNTRIES.includes(countryCode.toUpperCase())
          };
        }
      } catch (error) {
        console.warn(`Geolocation service ${service} failed:`, error);
        continue;
      }
    }

    // Fallback: try to detect from browser language
    const browserLang = navigator.language || navigator.languages?.[0];
    const isArabicBrowser = browserLang?.startsWith('ar');
    
    return {
      country: 'Unknown',
      countryCode: 'XX',
      isArabicRegion: isArabicBrowser || false
    };
  } catch (error) {
    console.error('Failed to detect user location:', error);
    return {
      country: 'Unknown',
      countryCode: 'XX',
      isArabicRegion: false
    };
  }
};

/**
 * Gets cached location or detects new location
 */
export const getUserLocation = async (): Promise<LocationInfo> => {
  const cached = localStorage.getItem('userLocation');
  
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      // Cache for 24 hours
      if (parsed.timestamp && Date.now() - parsed.timestamp < 24 * 60 * 60 * 1000) {
        return parsed.data;
      }
    } catch (error) {
      console.warn('Failed to parse cached location:', error);
    }
  }

  const location = await detectUserLocation();
  
  // Cache the result
  localStorage.setItem('userLocation', JSON.stringify({
    data: location,
    timestamp: Date.now()
  }));

  return location;
};