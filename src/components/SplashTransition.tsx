import { useEffect } from 'react';
import { motion } from 'motion/react';
import splashImage from '../../src/assets/bg-can-splash.png';

interface SplashTransitionProps {
  onComplete: () => void;
}

export function SplashTransition({ onComplete }: SplashTransitionProps) {
  useEffect(() => {
    // Auto-complete after 1.5 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="bg-[#cf010e] relative size-full overflow-hidden" 
      data-name="SplashContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          alt="Break the Queue" 
          className="absolute inset-0 object-cover pointer-events-none size-full" 
          src={splashImage} 
        />
      </motion.div>

      <motion.div
        className="absolute left-[24px] top-[120px] w-[327px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="font-['DM_Sans:Black',sans-serif] font-black leading-[normal] text-white text-[32px] tracking-[-0.608px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tired of waiting?
        </p>
        <p className="font-['DM_Sans:Black',sans-serif] font-black leading-[normal] text-white text-[32px] tracking-[-0.608px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Well, it's time to...
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-[80px] left-1/2 translate-x-[-50%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="font-['DM_Sans:Black',sans-serif] font-black leading-[normal] text-[48px] text-center text-white tracking-[-0.912px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Break the Queue
        </p>
      </motion.div>
    </motion.div>
  );
}
