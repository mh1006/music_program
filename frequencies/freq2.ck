// binaural beats is said to match the frequency of brain activity
// giving you a trans-like experience

// set base frequency
400.0 => float baseFrequency;

// binaural beats uses 2 different type of frequencies
10.0 => float frequencyDifference;

// calculate the frequencies for the left and right ears
(baseFrequency - (frequencyDifference / 2.0)) => float leftFrequency;
(baseFrequency + (frequencyDifference / 2.0)) => float rightFrequency;

// SinOsc objects for the left and right ears
SinOsc leftOscillator => dac;
SinOsc rightOscillator => dac;

0.0 => leftOscillator.phase;
0.0 => rightOscillator.phase;
leftFrequency => leftOscillator.freq;
rightFrequency => rightOscillator.freq;

15::second => now;

// while (true) {
//     // Generate and output the next samples for the left and right ears
//     leftOscillator.last() => _ => left;
//     rightOscillator.last() => _ => right;
// }
