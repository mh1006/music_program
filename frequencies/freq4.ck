30.0 => float baseFreq;

SinOsc base => dac;
0.05 => base.gain;
baseFreq => base.freq;

5::second => now;