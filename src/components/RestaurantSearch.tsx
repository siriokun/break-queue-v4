import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-eyy2qfsyjj";
import { SearchResults } from "./SearchResults";
import { RestaurantDetails } from "./RestaurantDetails";
import { searchNearbyRestaurants } from "../utils/googlePlaces";

const BESTTIME_PUBLIC_KEY = (import.meta.env.VITE_BESTTIME_PUBLIC_KEY as string) || '';

interface Restaurant {
  place_id: string;
  name: string;
  vicinity: string;
  rating: number;
  opening_hours?: {
    open_now: boolean;
  };
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

function ChevronBack() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-back">
          <path clipRule="evenodd" d={svgPaths.p2bd04900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="content-stretch flex gap-[8px] items-center relative shrink-0 cursor-pointer bg-transparent border-0"
    >
      <ChevronBack />
      <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-0 relative shrink-0">
        <p className="font-['DM_Sans:Black',_sans-serif] font-black leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.266px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Back
        </p>
      </div>
    </button>
  );
}

function Header({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute content-stretch flex gap-[32px] h-[50.146px] items-center left-[24px] top-[16px] w-[327px] z-10" data-name="Header">
      <BackButton onClick={onBack} />
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Search Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Search Icon">
          <path d={svgPaths.p275a6000} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Search({ 
  value, 
  onChange
}: { 
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-between left-[20px] pl-[24px] pr-[8px] py-[8px] rounded-[10000px] top-[90px] w-[337px] z-10" data-name="Search">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 flex-1" data-name="Search Input Container">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=""
          className="flex-1 font-['DM_Sans:9pt_Regular',_sans-serif] font-normal text-[16px] text-black tracking-[-0.304px] outline-none border-none bg-transparent"
          style={{ fontVariationSettings: "'opsz' 9" }}
        />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#6e0915] box-border content-stretch flex gap-[10px] h-full items-center p-[8px] relative rounded-[32px] shrink-0">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

interface RestaurantSearchProps {
  initialLocation?: string;
  initialCoords?: { lat: number; lng: number };
  onBack: () => void;
}

export function RestaurantSearch({ initialLocation, initialCoords, onBack }: RestaurantSearchProps) {
  const [filterQuery, setFilterQuery] = useState('');
  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  // Auto-search when we have initial coords
  useEffect(() => {
    if (initialCoords && initialLocation) {
      searchRestaurantsWithCoords(initialCoords);
    }
  }, [initialCoords, initialLocation]);

  const searchRestaurantsWithCoords = async (coords: { lat: number; lng: number }) => {
    setLoading(true);
    
    try {
      // Search for nearby restaurants using Google Maps Places Service (1km radius)
      const results = await searchNearbyRestaurants(coords, 1000, 4.0, true);
      setAllRestaurants(results);
    } catch (error) {
      console.error('Error searching restaurants:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter restaurants based on search input
  const filteredRestaurants = allRestaurants.filter((restaurant) => {
    if (!filterQuery.trim()) return true;
    
    const searchLower = filterQuery.toLowerCase();
    return (
      restaurant.name.toLowerCase().includes(searchLower) ||
      restaurant.vicinity.toLowerCase().includes(searchLower)
    );
  });

  const handleRestaurantClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleBackToList = () => {
    setSelectedRestaurant(null);
  };

  return (
    <div className="bg-[#cf010e] relative min-h-screen w-full" data-name="Container">
      <div className="relative w-full min-h-screen max-w-[375px] mx-auto">
        <Header onBack={selectedRestaurant ? handleBackToList : onBack} />
        <Search 
          value={filterQuery}
          onChange={setFilterQuery}
        />
        
        {selectedRestaurant ? (
          <RestaurantDetails 
            restaurant={selectedRestaurant}
            apiKey={BESTTIME_PUBLIC_KEY}
            onLogoClick={onBack}
          />
        ) : (
          <SearchResults 
            restaurants={filteredRestaurants}
            loading={loading}
            onRestaurantClick={handleRestaurantClick}
          />
        )}
      </div>
    </div>
  );
}
