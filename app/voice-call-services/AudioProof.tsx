"use client";

import { useState, useRef } from "react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";

export default function AudioProof() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 flex items-center gap-4 shadow-sm">
            <button
                onClick={togglePlay}
                className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
            >
                {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} className="ml-1" />}
            </button>
            <div className="flex-grow">
                <p className="text-sm font-bold text-slate-800">Hear the Clarity</p>
                <p className="text-xs text-slate-500">Sample Broadcast Message (English - Female)</p>
            </div>
            <div className="hidden sm:flex text-blue-300 gap-1 items-end h-6">
                {[1, 3, 2, 4, 3, 5, 2, 4, 1, 3].map((h, i) => (
                    <div key={i} className={`w-1 rounded-full bg-blue-400 ${isPlaying ? 'animate-pulse' : ''}`} style={{ height: `${h * 4}px` }}></div>
                ))}
            </div>
            <audio
                ref={audioRef}
                src="/audio/speech-voice-call-fem.wav"
                onEnded={() => setIsPlaying(false)}
                preload="none"
            />
        </div>
    );
}
