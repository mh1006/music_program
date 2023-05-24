// 432hz is said to be the frequency closest to the natural human frequency
// giving you a relaxing experience

// set base frequency
432.0 => float baseFreq;

SinOsc base => dac;
0.5 => base.gain.
baseFreq => base.freq;

5::second => now;