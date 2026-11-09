"use client";

import { useEffect, useRef, useState } from "react";

export default function StudioExperience({ children }) {
  const [introVisible, setIntroVisible] = useState(true);
  const [soundOn, setSoundOn] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setIntroVisible(false), reducedMotion ? 250 : 1650);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => () => {
    const audio = audioRef.current;
    if (audio) {
      audio.oscillators.forEach((oscillator) => {
        try { oscillator.stop(); } catch {}
      });
      audio.context.close();
      audioRef.current = null;
    }
  }, []);

  function toggleSound() {
    if (soundOn) {
      const audio = audioRef.current;
      if (audio) {
        audio.master.gain.setTargetAtTime(0, audio.context.currentTime, 0.8);
        window.setTimeout(() => {
          audio.oscillators.forEach((oscillator) => {
            try { oscillator.stop(); } catch {}
          });
          audio.context.close();
          if (audioRef.current === audio) audioRef.current = null;
        }, 2600);
      }
      setSoundOn(false);
      return;
    }

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    const context = new AudioContextClass();
    const master = context.createGain();
    master.gain.setValueAtTime(0, context.currentTime);
    master.gain.linearRampToValueAtTime(0.045, context.currentTime + 2.5);
    master.connect(context.destination);

    const oscillators = [110, 164.81, 220, 329.63].map((frequency, index) => {
      const oscillator = context.createOscillator();
      const voice = context.createGain();
      oscillator.type = index === 3 ? "triangle" : "sine";
      oscillator.frequency.value = frequency;
      voice.gain.value = index === 0 ? 0.34 : 0.16;
      oscillator.connect(voice);
      voice.connect(master);
      oscillator.start();
      return oscillator;
    });

    audioRef.current = { context, master, oscillators };
    setSoundOn(true);
  }

  return (
    <>
      <div className={introVisible ? "intro-loader intro-loader--visible" : "intro-loader"} aria-hidden={!introVisible}>
        <div className="intro-loader__content">
          <span className="intro-loader__wordmark" aria-label="ROVOR">{ "ROVOR".split("").map((letter, index) => <span className="intro-loader__letter" style={{ "--letter-index": index }} key={index}>{letter}</span>) }</span>
          <span className="intro-loader__line" />
          <span className="intro-loader__caption">ARCHITECTURE BEYOND TIME</span>
        </div>
      </div>
      {children}
      <button
        className={soundOn ? "sound-control sound-control--on" : "sound-control"}
        type="button"
        onClick={toggleSound}
        aria-pressed={soundOn}
        aria-label={soundOn ? "Turn ambient sound off" : "Turn ambient sound on"}
      >
        <span className="sound-control__bars" aria-hidden="true"><i /><i /><i /><i /></span>
        <span>{soundOn ? "Sound on" : "Sound off"}</span>
      </button>
    </>
  );
}
