"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setShowHint(false);
      }).catch(() => {});
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try auto-play
    const tryPlay = () => {
      audio.play().then(() => {
        setIsPlaying(true);
        setShowHint(false);
      }).catch(() => {
        // Auto-play blocked, listen for first user interaction
        const onInteract = () => {
          audio.play().then(() => {
            setIsPlaying(true);
            setShowHint(false);
          }).catch(() => {});
          cleanup();
        };
        const cleanup = () => {
          document.removeEventListener("click", onInteract);
          document.removeEventListener("scroll", onInteract, true);
          document.removeEventListener("keydown", onInteract);
          document.removeEventListener("touchstart", onInteract);
        };
        document.addEventListener("click", onInteract);
        document.addEventListener("scroll", onInteract, true);
        document.addEventListener("keydown", onInteract);
        document.addEventListener("touchstart", onInteract);
      });
    };

    // Small delay to let page load
    const timer = setTimeout(tryPlay, 500);
    const hintTimer = setTimeout(() => setShowHint(false), 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hintTimer);
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/audio/bgm.mp3" loop preload="auto" />

      <motion.button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-ink-900/80 backdrop-blur-md border border-white/10 hover:border-glow/40 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <div className="flex items-end gap-[3px] h-4">
            <motion.span
              className="w-[3px] bg-glow rounded-full"
              animate={{ height: [6, 14, 6] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="w-[3px] bg-glow rounded-full"
              animate={{ height: [14, 6, 14] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="w-[3px] bg-glow rounded-full"
              animate={{ height: [10, 16, 10] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-silver">
            <path d="M9 18V5l12-2v13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="6" cy="18" r="3" strokeWidth="1.5" />
            <circle cx="18" cy="16" r="3" strokeWidth="1.5" />
          </svg>
        )}
      </motion.button>

      <AnimatePresence>
        {showHint && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="fixed bottom-7 right-[72px] z-50 px-3 py-1.5 bg-ink-900/90 backdrop-blur-md border border-white/10 text-xs text-silver whitespace-nowrap pointer-events-none"
          >
            ♪ 点击页面任意位置播放音乐
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
