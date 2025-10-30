import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import svgPaths from "../imports/svg-6mfel8ih7t";
import swipePaths from "../imports/svg-s1d88obyoo";
import imgProduct from "../../src/assets/bg-can.png";

function KitKatLogo() {
  return (
    <div className="h-[50.146px] overflow-clip relative shrink-0 w-[81px]" data-name="Logo">
      <div className="absolute inset-[1.12%_0.27%_2.06%_0.6%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 49">
          <path d={svgPaths.pebd8d80} fill="var(--fill-0, #BA0018)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[-0.01%_0.02%_-0.02%_-0.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 51">
          <path d={svgPaths.p39d64400} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ShareIcon() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-0 pr-px py-0 relative rounded-[10000px] shrink-0 size-[20px]" data-name="Share">
      <div className="h-[13.991px] relative shrink-0 w-[14px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p7bcd0c0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function SwipeIcon() {
  return (
    <motion.div 
      className="relative shrink-0 size-[76px]" 
      data-name="Swipe"
      animate={{ 
        y: [0, -20, 0] 
      }}
      transition={{ 
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="absolute h-[54.543px] left-[calc(50%+10.863px)] top-[calc(50%-10.729px)] translate-x-[-50%] translate-y-[-50%] w-[52.67px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 55">
          <path d={swipePaths.p14b75600} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[41.6px] left-[calc(50%-29.2px)] top-[calc(50%-17.2px)] translate-x-[-50%] translate-y-[-50%] w-[17.6px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 42">
          <path d={swipePaths.p6f51580} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </motion.div>
  );
}

function SwipePrompt() {
  return (
    <motion.div 
      className="absolute content-stretch flex flex-col gap-[16px] items-center left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%]" 
      data-name="Frame"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <SwipeIcon />
      <motion.p 
        className="font-['DM_Sans:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[24px] text-center text-nowrap text-white tracking-[-0.456px] whitespace-pre" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        animate={{ opacity: [1, 0.6, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Swipe to Continue
      </motion.p>
    </motion.div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-1/2 top-[16px] translate-x-[-50%] w-[327px]" data-name="Header">
      <KitKatLogo />
      <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0" data-name="Share Button">
        <ShareIcon />
        <p className="font-['DM_Sans:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.266px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Share
        </p>
      </div>
    </div>
  );
}

interface VideoProductTransitionProps {
  onSwipeUp?: () => void;
}

export function VideoProductTransition({ onSwipeUp }: VideoProductTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    
    if (isUpSwipe && onSwipeUp) {
      onSwipeUp();
    }
  };

  return (
    <div 
      ref={containerRef}
      className="bg-[#cf010e] relative h-screen w-screen" 
      data-name="Container"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute h-screen left-1/2 bottom-[0px] translate-x-[-50%] w-[375px]" data-name="Background Image">
        <img alt="KitKat product" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgProduct} />
      </div>
      <Header />
      <div className="absolute bg-[rgba(0,0,0,0.5)] size-full" data-name="Background" />
      <SwipePrompt />
    </div>
  );
}
