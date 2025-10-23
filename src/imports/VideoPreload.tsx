import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import preloadGif from '../../src/assets/video-preload.gif';

export default function VideoPreload() {
  const [stage, setStage] = useState<'playing' | 'shrinking' | 'fading' | 'complete'>('playing');

  useEffect(() => {
    // After 4 seconds, start shrinking
    const shrinkTimer = setTimeout(() => {
      setStage('shrinking');
    }, 4000);

    // After 5 seconds, start fading out
    const fadeTimer = setTimeout(() => {
      setStage('fading');
    }, 5000);

    // After 6 seconds, complete
    const completeTimer = setTimeout(() => {
      setStage('complete');
    }, 6000);

    return () => {
      clearTimeout(shrinkTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (stage === 'complete') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative size-full flex items-center justify-center bg-[#cf010e] overflow-hidden"
      >
      </motion.div>
    );
  }

  return (
    <div className="relative size-full flex items-center justify-center bg-[#cf010e] overflow-hidden" data-name="video preload">
      <motion.div
        initial={{ width: '100%', height: '100%', opacity: 1 }}
        animate={
          stage === 'shrinking' || stage === 'fading'
            ? { width: '375px', height: 'auto', opacity: stage === 'fading' ? 0 : 1 }
            : { width: '100%', height: '100%', opacity: 1 }
        }
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="flex items-center justify-center"
      >
        <img
          src={preloadGif}
          alt="Loading..."
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </div>
  );
}