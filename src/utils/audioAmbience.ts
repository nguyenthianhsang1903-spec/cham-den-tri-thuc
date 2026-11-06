// Web Audio API ambient generator and sound effects (no external audio assets required)

class StudySoundEngine {
  private ctx: AudioContext | null = null;
  private rainNode: AudioNode | null = null;
  private isAmbiencePlaying: boolean = false;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play peaceful chime sound for correct answers / card draw
  playChime() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.15); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.35); // G5

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.25);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  // Play gentle subtle study rain ambience
  toggleAmbience(callback?: (isPlaying: boolean) => void): boolean {
    try {
      this.initCtx();
      if (!this.ctx) return false;

      if (this.isAmbiencePlaying) {
        if (this.rainNode) {
          this.rainNode.disconnect();
          this.rainNode = null;
        }
        this.isAmbiencePlaying = false;
        callback?.(false);
        return false;
      }

      // Generate brown/pink filtered noise for gentle soft rain
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = output[i];
        output[i] *= 1.8; // Volume scaling
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Lowpass filter for cozy gentle rain sound
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime); // Soft volume

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      whiteNoise.start();
      this.rainNode = whiteNoise;
      this.isAmbiencePlaying = true;
      callback?.(true);
      return true;
    } catch {
      this.isAmbiencePlaying = false;
      callback?.(false);
      return false;
    }
  }

  isPlaying(): boolean {
    return this.isAmbiencePlaying;
  }
}

export const soundEngine = new StudySoundEngine();
