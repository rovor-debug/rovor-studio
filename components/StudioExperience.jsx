"use client";

import { useEffect, useRef, useState } from "react";

const progression = [
  [73.42, 146.83, 174.61, 220, 261.63, 329.63],
  [58.27, 116.54, 146.83, 174.61, 220, 293.66],
  [65.41, 130.81, 164.81, 196, 261.63, 329.63],
  [65.41, 130.81, 164.81, 196, 246.94, 293.66],
];

export default function StudioExperience({ children }) {
  const [introVisible, setIntroVisible] = useState(true);
  const [soundOn, setSoundOn] = useState(false);
  const [volume, setVolume] = useState(0.82);
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
      try { audio.master.gain.cancelScheduledValues(audio.context.currentTime); } catch {}
      audio.voices.forEach((voice) => { try { voice.stop(); } catch {} });
      audio.context.close();
      audioRef.current = null;
    }
  }, []);

  function changeVolume(nextValue) {
    const next = Number(nextValue);
    setVolume(next);
    const audio = audioRef.current;
    if (audio) audio.master.gain.setTargetAtTime(next * 0.62, audio.context.currentTime, 0.12);
  }

  async function toggleSound() {
    if (soundOn) {
      const audio = audioRef.current;
      if (audio) {
        window.clearInterval(audio.interval);
        audio.master.gain.setTargetAtTime(0, audio.context.currentTime, 0.45);
        window.setTimeout(() => {
          if (audioRef.current !== audio) return;
          audio.voices.forEach((voice) => { try { voice.stop(); } catch {} });
          audio.context.close();
          audioRef.current = null;
        }, 2200);
      }
      setSoundOn(false);
      return;
    }

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    // Some browsers create AudioContext in the suspended state. Resume it
    // directly from the user's click before scheduling any sound.
    try {
      await context.resume();
    } catch {
      await context.close();
      return;
    }
    const master = context.createGain();
    master.gain.setValueAtTime(0, context.currentTime);
    master.gain.linearRampToValueAtTime(volume * 0.62, context.currentTime + 1.8);
    master.connect(context.destination);

    const compressor = context.createDynamicsCompressor();
    compressor.threshold.value = -20;
    compressor.knee.value = 16;
    compressor.ratio.value = 3.5;
    compressor.attack.value = 0.012;
    compressor.release.value = 0.3;
    compressor.connect(master);

    const filter = context.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1450;
    filter.Q.value = 0.5;
    filter.connect(compressor);

    const voices = [];
    const playChord = (index) => {
      const now = context.currentTime;
      progression[index % progression.length].forEach((frequency, noteIndex) => {
        const oscillator = context.createOscillator();
        const voiceGain = context.createGain();
        oscillator.type = noteIndex === 5 ? "triangle" : "sine";
        oscillator.frequency.setValueAtTime(frequency, now);
        oscillator.detune.value = noteIndex % 2 ? -3 : 3;
        voiceGain.gain.setValueAtTime(0.0001, now);
        voiceGain.gain.linearRampToValueAtTime(noteIndex < 2 ? 0.23 : 0.105, now + 1.5);
        voiceGain.gain.setTargetAtTime(0.0001, now + 4.3, 1.2);
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
      <div className="sound-dock" aria-label="Soundtrack controls">
        <button className={soundOn ? "sound-control sound-control--on" : "sound-control"} type="button" onClick={toggleSound} aria-pressed={soundOn} aria-label={soundOn ? "Turn soundtrack off" : "Play soundtrack"}>
          <span className="sound-control__bars" aria-hidden="true"><i /><i /><i /><i /></span>
          <span>{soundOn ? "Soundtrack on" : "Play soundtrack"}</span>
        </button>
        <label className="sound-volume">
          <span>VOL</span>
          <input aria-label="Soundtrack volume" type="range" min="0" max="1" step="0.01" value={volume} onChange={(event) => changeVolume(event.target.value)} />
        </label>
      </div>
    </>
  );
}
