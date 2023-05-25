// 528 is said to be good for sleep, solfegio frequencies

// set base frequency
528.0 => float baseFreq;

SinOsc base => dac;
0.1 => base.gain;
baseFreq => base.freq;

5::second => now;