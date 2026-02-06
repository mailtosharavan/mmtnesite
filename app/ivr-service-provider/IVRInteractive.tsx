"use client";
import { useState, useEffect } from "react";

export default function IVRInteractive() {
  const [voice, setVoice] = useState<"male" | "female">("male");
  const [lang, setLang] = useState<string>("en");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (typeof customElements !== "undefined" && customElements.get("lottie-player")) {
      return;
    }
    const s = document.createElement("script");
    s.src = "https://unpkg.com/@lottiefiles/lottie-player@1.5.7/dist/lottie-player.js";
    s.defer = true;
    document.body.appendChild(s);
    return () => {
      // Do not remove script to avoid re-adding issues or registry conflicts
      // try { document.body.removeChild(s); } catch { }
    };
  }, []);

  const getSample = () => {
    // Local assets from public/audio folder
    if (lang === "en") {
      return voice === "male" ? "/audio/speech-e-male.wav" : "/audio/speech-eng-fem.wav";
    }
    if (lang === "hi") {
      return voice === "male" ? "/audio/speech-hindi-male.wav" : "/audio/speech-hindi-fem.wav";
    }
    if (lang === "gu") {

      return voice === "male" ? "/audio/speech-Guj-male.wav" : "/audio/speech-guj-fem.wav";
    }
    // Fallback
    return "/audio/speech-eng-fem.wav";
  };

  const togglePlay = () => {
    const audio = document.getElementById("ivr-sample") as HTMLAudioElement;
    if (isPlaying) {
      audio.pause();
    } else {
      // Reload if source changed but not playing? HTMLAudioElement handles src change usually.
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-6 rounded-2xl border border-navy-700 bg-navy-800/60 backdrop-blur-md shadow-xl relative overflow-hidden group hover:border-cyan-glow/30 transition-all duration-300">

      {/* Label Badge */}
      <div className="absolute top-4 right-4 text-xs font-bold px-2 py-1 bg-cyan-glow/10 text-cyan-glow rounded uppercase tracking-wider">
        Live Demo
      </div>

      <h3 className="text-lg font-bold text-white mb-2">Experience the Quality</h3>
      <p className="text-slate-400 text-sm mb-6">Listen to our neural text-to-speech engine.</p>

      {/* Controls */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex bg-navy-900 rounded-lg p-1 border border-navy-700">
          <button
            onClick={() => setVoice("male")}
            className={`px-3 py-1.5 rounded text-xs font-semibold transition ${voice === "male" ? 'bg-cyan-glow text-navy-900' : 'text-slate-400 hover:text-white'}`}
          >
            Male
          </button>
          <button
            onClick={() => setVoice("female")}
            className={`px-3 py-1.5 rounded text-xs font-semibold transition ${voice === "female" ? 'bg-cyan-glow text-navy-900' : 'text-slate-400 hover:text-white'}`}
          >
            Female
          </button>
        </div>

        <select
          aria-label="Language"
          className="bg-navy-900 border border-navy-700 text-white text-xs px-3 py-1.5 rounded focus:border-cyan-glow outline-none"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="en">English (US)</option>
          <option value="hi">Hindi</option>
          <option value="gu">Gujarati</option>
        </select>
      </div>

      {/* Audio Player UI */}
      <div className="flex items-center gap-4 bg-navy-900 p-3 rounded-xl border border-navy-700/50">
        <audio id="ivr-sample" src={getSample()} onEnded={() => setIsPlaying(false)} />

        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-cyan-glow flex items-center justify-center text-navy-900 shadow-glow transition hover:scale-105 active:scale-95"
        >
          {isPlaying ? (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
          ) : (
            <svg className="w-4 h-4 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          )}
        </button>

        {/* Fake Waveform Visual */}
        <div className="flex-1 flex gap-1 items-center h-6">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`w-1 rounded-full bg-cyan-glow transition-all duration-300 ${isPlaying ? 'animate-pulse' : 'opacity-30'}`}
              style={{ height: isPlaying ? `${Math.random() * 100}%` : '20%', animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>


    </div>
  );
}
