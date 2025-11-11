"use client";

import { useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
  minSpeed?: number; // fastest
  maxSpeed?: number; // slowest
}

export default function TypeWriter({
  text,
  minSpeed = 75,
  maxSpeed = 225,
}: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;

    function typeNextChar() {
      setDisplayed(text.slice(0, i));
      i++;

      if (i <= text.length) {
        const randomSpeed =
          Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed;
        setTimeout(typeNextChar, randomSpeed);
      }
    }

    typeNextChar();
  }, [text, minSpeed, maxSpeed]);

  return (
    <span className="leading-snug whitespace-pre-line">
      {displayed}
      <span className="border-r-2 border-cyan-600 ml-1 animate-pulse"></span>
    </span>
  );
}
