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

interface SearchResultsProps {
  restaurants: Restaurant[];
  loading: boolean;
  onRestaurantClick: (restaurant: Restaurant) => void;
}

function PlaceInfo({ restaurant, onClick }: { restaurant: Restaurant; onClick: () => void }) {
  return (
    <>
      <button
        onClick={onClick}
        className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[1.2] relative shrink-0 text-black w-full text-left bg-transparent border-0 cursor-pointer"
        data-name="Place Info"
      >
        <p className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[16px] tracking-[-0.304px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          {restaurant.name}
        </p>
        <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal opacity-50 overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] tracking-[-0.266px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
          {restaurant.vicinity}
        </p>
      </button>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 321 2">
            <path d="M0 1H321" id="Vector 1" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
    </>
  );
}

function LoadingState() {
  return (
    <div className="flex items-center justify-center h-[200px] w-full">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#6e0915] border-t-transparent rounded-full animate-spin"></div>
        <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal text-[14px] text-black opacity-50">
          Searching for restaurants...
        </p>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex items-center justify-center h-[200px] w-full">
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal text-[14px] text-black opacity-50 text-center px-8">
        No restaurants found. Try searching for a different location or adjust your filters.
      </p>
    </div>
  );
}

export function SearchResults({ restaurants, loading, onRestaurantClick }: SearchResultsProps) {
  // Limit results to 10 locations
  const limitedRestaurants = restaurants.slice(0, 10);

  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[8px] h-[calc(100vh-180px)] items-start left-[20px] overflow-hidden pl-[16px] pr-[16px] py-0 rounded-[24px] top-[162px] w-[calc(100%-40px)] max-w-[337px]" data-name="Result Box">
      <div className="basis-0 box-border content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px overflow-x-clip overflow-y-auto px-0 py-[24px] relative shrink-0 w-full" data-name="Content">
        {loading ? (
          <LoadingState />
        ) : limitedRestaurants.length === 0 ? (
          <EmptyState />
        ) : (
          limitedRestaurants.map((restaurant) => (
            <PlaceInfo 
              key={restaurant.place_id}
              restaurant={restaurant}
              onClick={() => onRestaurantClick(restaurant)}
            />
          ))
        )}
      </div>
    </div>
  );
}
