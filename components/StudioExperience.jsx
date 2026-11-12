"use client";

import { useEffect, useRef, useState } from "react";

const progression = [
  [146.83, 174.61, 220, 261.63, 329.63], // Dm9
  [116.54, 146.83, 174.61, 220, 293.66], // Bbmaj7
  [130.81, 164.81, 196, 261.63, 329.63], // Fadd9
  [130.81, 164.81, 196, 246.94, 293.66], // Cmaj7
];

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
      window.clearInterval(audio.interval);
      audio.voices.forEach((voice) => { try { voice.stop(); } catch {} });
      audio.context.close();
      audioRef.current = null;
    }
  }, []);

  function toggleSound() {
    if (soundOn) {
      const audio = audioRef.current;
      if (audio) {
        window.clearInterval(audio.interval);
        audio.master.gain.setTargetAtTime(0, audio.context.currentTime, 1.1);
        window.setTimeout(() => {
          if (audioRef.current !== audio) return;
          audio.voices.forEach((voice) => { try { voice.stop(); } catch {} });
          audio.context.close();
          audioRef.current = null;
        }, 3600);
      }
      setSoundOn(false);
      return;
    }

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    const master = context.createGain();
    master.gain.setValueAtTime(0, context.currentTime);
    master.gain.linearRampToValueAtTime(0.12, context.currentTime + 3.5);
    master.connect(context.destination);

    const filter = context.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1250;
    filter.Q.value = 0.45;
    filter.connect(master);

    const voices = [];
    const playChord = (index) => {
      const now = context.currentTime;
      progression[index % progression.length].forEach((frequency, noteIndex) => {
        const oscillator = context.createOscillator();
        const voiceGain = context.createGain();
        oscillator.type = noteIndex === 4 ? "triangle" : "sine";
        oscillator.frequency.setValueAtTime(frequency, now);
        oscillator.detune.value = noteIndex % 2 ? -4 : 4;
        voiceGain.gain.setValueAtTime(0.0001, now);
        voiceGain.gain.linearRampToValueAtTime(noteIndex === 0 ? 0.17 : 0.095, now + 1.8);
        voiceGain.gain.setTargetAtTime(0.0001, now + 4.1, 1.15);
        oscillator.connect(voiceGain);
        voiceGain.connect(filter);
        oscillator.start(now);
        oscillator.stop(now + 9);
        voices.push(oscillator);
      });
    };

    let chordIndex = 0;
    playChord(chordIndex++);
    const interval = window.setInterval(() => playChord(chordIndex++), 5200);
    audioRef.current = { context, master, voices, interval };
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
      <button className={soundOn ? "sound-control sound-control--on" : "sound-control"} type="button" onClick={toggleSound} aria-pressed={soundOn} aria-label={soundOn ? "Turn ambient sound off" : "Play original ambient soundscape"}>
        <span className="sound-control__bars" aria-hidden="true"><i /><i /><i /><i /></span>
        <span>{soundOn ? "Ambient sound on" : "Play ambient sound"}</span>
      </button>
    </>
  );
}
