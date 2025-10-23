import { useState, useEffect } from "react";
import svgPaths from "./imports/svg-epfkmzeuid";
import imgProduct from "./assets/product.png";
import { RestaurantSearch } from "./components/RestaurantSearch";
import { reverseGeocode } from "./utils/googlePlaces";
import VideoPreload from "./imports/VideoPreload";
import { toast } from "sonner";
import { Toaster } from "./components/ui/sonner";

function Logo() {
  return (
    <div
      className="absolute h-[140px] left-[44px] top-[109px] w-[287px]"
      data-name="Logo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 287 140"
      >
        <g clipPath="url(#clip0_13_431)" id="Logo">
          <g id="Group">
            <path
              d={svgPaths.p12acb800}
              fill="var(--fill-0, #FFFDFB)"
              id="Vector"
            />
            <path
              d={svgPaths.p1ad42b00}
              fill="var(--fill-0, #FFFDFB)"
              id="Vector_2"
            />
            <path
              d={svgPaths.p32c19300}
              fill="var(--fill-0, #FFFDFB)"
              id="Vector_3"
            />
            <path
              d={svgPaths.p1c43d200}
              fill="var(--fill-0, #FFFDFB)"
              id="Vector_4"
            />
            <path
              d={svgPaths.p2c59ce00}
              fill="var(--fill-0, #FFFDFB)"
              id="Vector_5"
            />
          </g>
          <g id="Group_2">
            <path
              d={svgPaths.p6eaa880}
              fill="var(--fill-0, #FFFDFB)"
              id="Vector_6"
            />
            <path
              d={svgPaths.p31d1e200}
              fill="var(--fill-0, #FFFDFB)"
              id="Vector_7"
            />
            <path
              d={svgPaths.pe7ba580}
              fill="var(--fill-0, #FFFDFB)"
              id="Vector_8"
            />
          </g>
          <path
            d={svgPaths.p1c52e5f0}
            fill="var(--fill-0, white)"
            id="Vector_9"
          />
          <path
            d={svgPaths.p2455d480}
            fill="var(--fill-0, #CF714C)"
            id="Vector_10"
          />
          <path
            d={svgPaths.p104c4100}
            fill="var(--fill-0, white)"
            id="Vector_11"
          />
          <path
            d={svgPaths.pabeb200}
            fill="var(--fill-0, white)"
            id="Vector_12"
          />
          <g id="Group_3">
            <path
              d={svgPaths.p5f60a00}
              fill="var(--fill-0, #FFFDFB)"
              id="Vector_13"
            />
            <path
              d={svgPaths.p375b9600}
              fill="var(--fill-0, #FFFDFB)"
              id="Vector_14"
            />
            <path
              d={svgPaths.p251cbf00}
              fill="var(--fill-0, #FFFDFB)"
              id="Vector_15"
            />
          </g>
          <path
            d={svgPaths.p388c7440}
            fill="var(--fill-0, #FFFDFB)"
            id="Vector_16"
          />
        </g>
        <defs>
          <clipPath id="clip0_13_431">
            <rect fill="white" height="140" width="287" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div
      className="h-[50.146px] relative shrink-0 w-[81px]"
      data-name="Logo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 81 51"
      >
        <g clipPath="url(#clip0_13_427)" id="Logo">
          <path
            d={svgPaths.p166f0100}
            fill="var(--fill-0, #BA0018)"
            id="Vector"
          />
          <path
            d={svgPaths.p18063300}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_13_427">
            <rect fill="white" height="50.1461" width="81" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Share() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Share"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Share">
          <path
            d={svgPaths.p3550bb80}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ShareButton() {
  const handleShare = async () => {
    const shareData = {
      title: "KitKat Break the Queue",
      text: "Find nearby restaurants with less queue time and get exclusive KitKat discounts! Break the queue, have a break!",
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast.success("Shared successfully!");
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
        toast.success("Link copied to clipboard!");
      }
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error("Error sharing:", error);
        toast.error("Failed to share. Please try again.");
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 bg-transparent border-0 cursor-pointer"
      data-name="Share Button"
    >
      <Share />
      <p
        className="font-['DM_Sans:Black',_sans-serif] font-black leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.266px] whitespace-pre"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        Share
      </p>
    </button>
  );
}

function Header() {
  return (
    <div
      className="absolute content-stretch flex items-center justify-between left-1/2 top-[16px] translate-x-[-50%] w-[327px]"
      data-name="Header"
    >
      <Logo1 />
      <ShareButton />
    </div>
  );
}

function Notification({
  hasPermission,
}: {
  hasPermission: boolean;
}) {
  return (
    <div
      className="absolute bg-[#660016] box-border content-stretch flex gap-[8px] items-center justify-center leading-[normal] left-[20px] px-0 py-[12px] rounded-[10000px] text-[#f2f2f2] text-center text-nowrap top-[68px] w-[335px] whitespace-pre"
      data-name="Notification"
    >
      <p className="font-['FranklinGothic_URW:Heavy',_sans-serif] not-italic relative shrink-0 text-[20px] tracking-[-0.38px]">
        {hasPermission ? "✅" : "💔"}
      </p>
      <p
        className="font-['DM_Sans:Black',_sans-serif] font-black relative shrink-0 text-[16px] tracking-[-0.304px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        {hasPermission
          ? "Location access granted!"
          : "Please allow location to continue"}
      </p>
    </div>
  );
}

function Button({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute box-border content-stretch flex items-center justify-center left-1/2 -translate-x-1/2 overflow-clip px-[32px] py-[12px] rounded-[1200px] top-[528px] border-0 cursor-pointer transition-opacity ${
        disabled ? "bg-gray-300 cursor-not-allowed" : "bg-white"
      }`}
      data-name="Button"
    >
      <div
        className={`flex flex-col font-['DM_Sans:Black',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap tracking-[-0.304px] ${
          disabled ? "text-gray-500" : "text-[#cf010e]"
        }`}
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="leading-[normal] whitespace-pre">
          Continue
        </p>
      </div>
    </button>
  );
}

function HomePage({
  onContinue,
}: {
  onContinue: (
    location: string,
    coords: { lat: number; lng: number },
  ) => void;
}) {
  const [showNotification, setShowNotification] =
    useState(false);
  const [locationGranted, setLocationGranted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = async () => {
    setIsLoading(true);
    setShowNotification(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          setLocationGranted(true);

          // Reverse geocode to get location name
          try {
            const address = await reverseGeocode(
              coords.lat,
              coords.lng,
            );
            setTimeout(() => {
              onContinue(address || "Current Location", coords);
            }, 500);
          } catch (error) {
            console.error("Error reverse geocoding:", error);
            onContinue("Current Location", coords);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLoading(false);
          setLocationGranted(false);
          alert("Please enable location services to continue");
        },
      );
    } else {
      setIsLoading(false);
      alert("Geolocation is not supported by your browser");
    }
  };

  return (
    <div
      className="bg-[#cf010e] relative size-full min-h-screen flex items-center justify-center overflow-hidden"
      data-name="Container"
    >
      <div className="relative w-full max-w-[375px] min-h-screen mx-auto">
        <Logo />
        <div
          className="absolute h-[226px] left-[144px] top-[274px] w-[86px]"
          data-name="Product"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src={imgProduct}
          />
        </div>
        <Header />
        {showNotification && (
          <Notification hasPermission={locationGranted} />
        )}
        <Button onClick={handleContinue} disabled={isLoading} />
      </div>
    </div>
  );
}

export default function App() {
  const [showPreload, setShowPreload] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [userLocation, setUserLocation] = useState<string>("");
  const [userCoords, setUserCoords] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // Show preload screen for 7 seconds (animation completes + transition)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreload(false);
    }, 7000); // 7 seconds to allow for full animation

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = (
    location: string,
    coords: { lat: number; lng: number },
  ) => {
    setUserLocation(location);
    setUserCoords(coords);
    setShowSearch(true);
  };

  const handleBackToHome = () => {
    setShowSearch(false);
  };

  // Show preload screen
  if (showPreload) {
    return (
      <div className="fixed inset-0 bg-[#cf010e] z-50 overflow-hidden">
        <VideoPreload />
      </div>
    );
  }

  if (showSearch) {
    return (
      <RestaurantSearch
        initialLocation={userLocation}
        initialCoords={userCoords || undefined}
        onBack={handleBackToHome}
      />
    );
  }

  return (
    <>
      <Toaster position="top-center" />
      <HomePage onContinue={handleContinue} />
    </>
  );
}