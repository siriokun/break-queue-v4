import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-dmrbrm1nd7";
import { getVenueBusyness, isCurrentHourBusy, type BusynessData } from "../utils/besttime";
import { toast } from "sonner";
import { NotBusyScreen } from "./NotBusyScreen";
import { VideoTransition } from "./VideoTransition";
import { VideoProductTransition } from "./VideoProductTransition";
import ellipseBackground from '../../src/assets/bg-b.png';

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

interface RestaurantDetailsProps {
  restaurant: Restaurant;
  apiKey: string;
  onLogoClick: () => void;
}

function Logo({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="h-[50.146px] relative shrink-0 w-[81px] bg-transparent border-0 cursor-pointer p-0" 
      data-name="Logo"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 51">
        <g clipPath="url(#clip0_11_240)" id="Logo">
          <path d={svgPaths.p166f0100} fill="var(--fill-0, #BA0018)" id="Vector" />
          <path d={svgPaths.p1927c300} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_11_240">
            <rect fill="white" height="50.1461" width="81" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

function Share() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Share">
          <path d={svgPaths.p3550bb80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ShareButton({ restaurantName, isEligible }: { restaurantName: string; isEligible: boolean }) {
  const handleShare = async () => {
    const discountText = isEligible 
      ? "🎉 I found a 15% OFF KitKat discount at this location! The queue is busy enough to qualify." 
      : "Check out this location on KitKat Break the Queue!";
    
    const shareData = {
      title: `KitKat Break the Queue - ${restaurantName}`,
      text: `${discountText}\n\n${restaurantName}\n\nFind your own discounts by checking busyness at nearby restaurants!`,
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
      className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 bg-transparent border-0 cursor-pointer" 
      data-name="Share Button"
    >
      <Share />
      <p className="font-['DM_Sans:Black',_sans-serif] font-black leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.266px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Share
      </p>
    </button>
  );
}

function Header({ onLogoClick, restaurantName, isEligible }: { onLogoClick: () => void; restaurantName: string; isEligible: boolean }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Logo onClick={onLogoClick} />
      <ShareButton restaurantName={restaurantName} isEligible={isEligible} />
    </div>
  );
}

function Percent() {
  return (
    <div className="bg-[#6e0915] box-border content-stretch flex gap-[2.883px] items-center justify-center mr-[-7.111px] p-[2.883px] relative rounded-[288.288px] shrink-0 size-[28.444px]" data-name="percent">
      <p className="font-['Intro_Black:Regular',_sans-serif] leading-[1.2] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16.144px] text-center text-nowrap text-white tracking-[-0.3067px] whitespace-pre">%</p>
    </div>
  );
}

function Component15() {
  return (
    <div className="box-border content-stretch flex items-end pl-0 pr-[7.111px] py-0 relative shrink-0" data-name="15%">
      <p className="font-['Intro_Black:Regular',_sans-serif] leading-[1.2] mr-[-7.111px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[60px] text-center text-nowrap text-white tracking-[-1.14px] whitespace-pre">15</p>
      <Percent />
    </div>
  );
}

function SpikyElement() {
  return (
    <div className="absolute h-[8.702px] left-[191.27px] top-[-12.8px] w-[17.404px]" data-name="Spiky Element">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 9">
        <g clipPath="url(#clip0_11_234)" id="Spiky Element">
          <path clipRule="evenodd" d={svgPaths.p31f5c200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1bb83080} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_11_234">
            <rect fill="white" height="8.70198" width="17.404" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SpikyElement1() {
  return (
    <div className="h-[6.988px] relative w-[14.139px]" data-name="Spiky Element">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 7">
        <g clipPath="url(#clip0_11_231)" id="Spiky Element">
          <path clipRule="evenodd" d={svgPaths.p34a9e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_11_231">
            <rect fill="white" height="6.9881" width="14.1387" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0" data-name="Title">
      <Component15 />
      <p className="font-['Intro_Black:Regular',_sans-serif] leading-[1.2] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[60px] text-center text-nowrap text-white tracking-[-1.14px] whitespace-pre">OFF</p>
      <SpikyElement />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.9659258127212524)+(var(--transform-inner-height)*0.2588190734386444)))] items-center justify-center left-[-7.77px] top-[4.74px] w-[calc(1px*((var(--transform-inner-height)*0.9659258127212524)+(var(--transform-inner-width)*0.258819043636322)))]" style={{ "--transform-inner-width": "14.125", "--transform-inner-height": "6.96875" } as React.CSSProperties}>
        <div className="flex-none rotate-[255deg]">
          <SpikyElement1 />
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Text Container">
      <Title />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#f2f2f2] text-[14px] text-center tracking-[-0.266px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Enjoy a discounted drink on us!
        <br aria-hidden="true" />
        You deserve a break.
        <br aria-hidden="true" />
        Claim your prize now.
      </p>
    </div>
  );
}

function Coupon() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] h-[160px] items-center justify-center overflow-clip relative rounded-[21.333px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.25)] shrink-0 w-[300px]" data-name="Coupon">
      <div className="absolute bottom-0 h-[160px] left-0 w-[297.778px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 298 160">
          <path d={svgPaths.pdda58c0} fill="var(--fill-0, #BA1221)" id="Shape" />
        </svg>
      </div>
      <TextContainer />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative w-[335px]" data-name="Title">
      <p className="font-['Intro_Black:Regular',_sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.456px] w-[min-content]">CONGRATULATIONS!</p>
      <Coupon />
    </div>
  );
}

function NotEligibleMessage() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative w-[335px]" data-name="Not Eligible">
      <p className="font-['Intro_Black:Regular',_sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.456px] w-[min-content]">NOT BUSY ENOUGH</p>
      <div className="box-border content-stretch flex flex-col gap-[16px] h-[160px] items-center justify-center overflow-clip relative rounded-[21.333px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.25)] shrink-0 w-[300px] bg-[#660016]">
        <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full px-4" data-name="Text Container">
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#f2f2f2] text-[16px] text-center tracking-[-0.266px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            This location isn't busy enough right now.
            <br aria-hidden="true" />
            Try another location or come back later!
          </p>
        </div>
      </div>
    </div>
  );
}

function CouponDisplay({ isEligible, onLogoClick, restaurantName }: { isEligible: boolean; onLogoClick: () => void; restaurantName: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Coupon">
      <Header onLogoClick={onLogoClick} restaurantName={restaurantName} isEligible={isEligible} />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.08715574443340302)+(var(--transform-inner-height)*0.9961947202682495)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.08715574443340302)+(var(--transform-inner-width)*0.9961947202682495)))]" style={{ "--transform-inner-width": "334.984375", "--transform-inner-height": "204.765625" } as React.CSSProperties}>
        <div className="flex-none rotate-[355deg]">
          {isEligible ? <Title1 /> : <NotEligibleMessage />}
        </div>
      </div>
    </div>
  );
}

function Button({ isEligible }: { isEligible: boolean }) {
  return (
    <button 
      disabled={!isEligible}
      className={`box-border content-stretch flex items-center justify-center overflow-clip px-[32px] py-[12px] relative rounded-[1200px] shrink-0 border-0 cursor-pointer transition-opacity ${
        isEligible ? 'bg-white' : 'bg-gray-300 cursor-not-allowed'
      }`}
      data-name="Button"
    >
      <div className={`flex flex-col font-['DM_Sans:Black',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[20px] text-nowrap tracking-[-0.38px] ${
        isEligible ? 'text-[#cf010e]' : 'text-gray-500'
      }`} style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Buy Now in Grab</p>
      </div>
    </button>
  );
}

function ButtonContainer({ isEligible }: { isEligible: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="Button Container">
      <Button isEligible={isEligible} />
      <p className="[text-underline-position:from-font] decoration-solid font-['DM_Sans:Black',_sans-serif] font-black leading-[normal] relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[-0.228px] underline whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>{`Terms & Conditions here`}</p>
    </div>
  );
}

function DescriptionContainer({ isEligible }: { isEligible: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0" data-name="Description Container">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#f2f2f2] text-[16px] text-center tracking-[-0.304px] w-[335px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span>
          Try our delicious new
          <br aria-hidden="true" />
        </span>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>
          KitKat's Ready to Drink
        </span>
        <span>
          {` and`}
          <br aria-hidden="true" />
          take a break in your long queue.
        </span>
      </p>
      <ButtonContainer isEligible={isEligible} />
    </div>
  );
}



export function RestaurantDetails({ restaurant, apiKey, onLogoClick }: RestaurantDetailsProps) {
  const [busynessData, setBusynessData] = useState<BusynessData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showProductTransition, setShowProductTransition] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBusynessData();
  }, [restaurant]);

  const fetchBusynessData = async () => {
    const startTime = Date.now();
    const MIN_LOADING_TIME = 7000; // 7 seconds minimum for VideoTransition
    
    setLoading(true);
    setShowProductTransition(false);
    setError(null);

    try {
      console.log('Fetching busyness for:', {
        name: restaurant.name,
        address: restaurant.vicinity,
        place_id: restaurant.place_id
      });

      // Query BestTime API for real busyness data
      const data = await getVenueBusyness(restaurant.name, restaurant.vicinity);
      
      if (data) {
        console.log('Busyness data received successfully');
        setBusynessData(data);
      } else {
        console.error('BestTime API returned no data');
        setError('Unable to fetch busyness data');
      }
    } catch (err) {
      console.error('Error fetching busyness data:', err);
      setError('Unable to fetch busyness data');
    } finally {
      // Ensure minimum loading time of 7 seconds for VideoTransition
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);
      
      if (remainingTime > 0) {
        console.log(`Waiting ${remainingTime}ms to meet minimum loading time`);
        setTimeout(() => {
          setLoading(false);
          setShowProductTransition(true);
        }, remainingTime);
      } else {
        setLoading(false);
        setShowProductTransition(true);
      }
    }
  };

  const handleSwipeUp = () => {
    console.log('User swiped up to continue');
    setShowProductTransition(false);
  };

  // Check if user is eligible for discount (current hour is in busy_hours)
  const isEligible = busynessData ? isCurrentHourBusy(busynessData) : false;
  
  console.log('Eligibility check:', {
    hasData: !!busynessData,
    isEligible,
    currentHour: new Date().getHours()
  });

  // Show VideoTransition while loading
  if (loading) {
    return <VideoTransition />;
  }

  // Show VideoProductTransition after VideoTransition - user must swipe to continue
  if (showProductTransition) {
    return <VideoProductTransition onSwipeUp={handleSwipeUp} />;
  }

  // If not eligible or no data, show the NotBusyScreen
  try {
    if (!error && (!busynessData || !isEligible)) {
      // If we have data but not eligible, check if it's due to no data available
      if (busynessData) {
        isCurrentHourBusy(busynessData); // This will throw if -1
      }
      return <NotBusyScreen onTryAgain={onLogoClick} />;
    }
  } catch (e) {
    if (e instanceof Error) {
      return <NotBusyScreen onTryAgain={onLogoClick} message={e.message} />;
    }
    return <NotBusyScreen onTryAgain={onLogoClick} />;
  }

  return (
    <div className="bg-[#cf010e] absolute inset-0 z-30" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-between pb-[56px] pt-[24px] px-[20px] relative size-full">
          <div 
            className="absolute h-[560px] left-[calc(50%-0.5px)] top-[-180px] translate-x-[-50%] w-[666px]" 
            data-name="Ellipse Background"
            style={{
              backgroundImage: `url(${ellipseBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {error ? (
            <div className="flex items-center justify-center h-full">
              <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal text-[14px] text-white">
                {error}
              </p>
            </div>
          ) : (
            <>
              <CouponDisplay isEligible={isEligible} onLogoClick={onLogoClick} restaurantName={restaurant.name} />
              <DescriptionContainer isEligible={isEligible} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
