import { motion } from "motion/react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { invite } from "@/config/invite";

export interface MusicPlayerHandle {
  play: () => void;
  pause: () => void;
  toggle: () => void;
  isPlaying: boolean;
}

export const MusicPlayer = forwardRef<MusicPlayerHandle, { autoPlayTrigger?: boolean }>(
  function MusicPlayer({ autoPlayTrigger }, ref) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    const playAudio = async () => {
      if (!audioRef.current) return;
      try {
        audioRef.current.volume = 0.75;
        await audioRef.current.play();
        setIsPlaying(true);
        setHasInteracted(true);
      } catch (err) {
        console.warn("Audio autoplay blocked by browser:", err);
      }
    };

    const pauseAudio = () => {
      if (!audioRef.current) return;
      audioRef.current.pause();
      setIsPlaying(false);
    };

    const toggleAudio = () => {
      if (typeof navigator !== "undefined" && navigator.vibrate) {
        navigator.vibrate(12);
      }
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    };

    useImperativeHandle(ref, () => ({
      play: playAudio,
      pause: pauseAudio,
      toggle: toggleAudio,
      isPlaying,
    }));

    useEffect(() => {
      if (autoPlayTrigger && !isPlaying && !hasInteracted) {
        playAudio();
      }
    }, [autoPlayTrigger]);

    return (
      <>
        <audio
          ref={audioRef}
          preload="auto"
          loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="/music.m4a" type="audio/mp4" />
          <source src="/music.mp3" type="audio/mpeg" />
        </audio>

        {/* Floating audio control pill */}
        <motion.div
          className="fixed right-4 top-4 z-40 sm:right-6 sm:top-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button
            type="button"
            onClick={toggleAudio}
            aria-label={isPlaying ? "Mute background music" : "Play background music"}
            title={`${invite.music.title} - ${invite.music.artist}`}
            className="group relative flex items-center gap-2 rounded-full border border-gold/40 bg-paper/90 px-3.5 py-2 shadow-[0_8px_20px_-8px_rgba(60,45,25,0.4)] backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-paper"
          >
            {/* Equalizer animation bars or disc */}
            <div className="relative flex size-5 items-center justify-center">
              {isPlaying ? (
                <div className="flex items-end gap-0.5 h-3.5">
                  <motion.span
                    className="w-0.5 rounded-full bg-gold"
                    animate={{ height: ["40%", "100%", "40%"] }}
                    transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="w-0.5 rounded-full bg-gold"
                    animate={{ height: ["80%", "30%", "80%"] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
                  />
                  <motion.span
                    className="w-0.5 rounded-full bg-gold"
                    animate={{ height: ["30%", "90%", "30%"] }}
                    transition={{ duration: 0.65, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  />
                </div>
              ) : (
                <Music className="size-4 text-sepia/70 group-hover:text-ink transition-colors" />
              )}
            </div>

            <div className="flex flex-col text-left">
              <span className="caps text-[0.48rem] text-ink font-semibold tracking-wider flex items-center gap-1">
                {isPlaying ? (
                  <>
                    <Volume2 className="size-2.5 text-gold" />
                    <span>Music On</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="size-2.5 text-sepia" />
                    <span>Play Music</span>
                  </>
                )}
              </span>
              <span className="text-[0.42rem] text-sepia/80 truncate max-w-[90px] hidden sm:inline">
                {invite.music.title}
              </span>
            </div>
          </button>
        </motion.div>
      </>
    );
  },
);
