// Delta Waves: Delta waves are the slowest brainwave frequency range, 
// typically ranging from 0.5 to 4 Hz. They are associated with deep sleep, 
// relaxation, and rejuvenation.

// using delta + binaural
// Set the global sample rate to 44100 Hz
44100 => global float sampleRate;

// Define the base frequency for the binaural beat
2.5 => float baseFrequency;  // Adjust this value within the delta wave range

// Define the frequency difference for the binaural beat
3.5 => float frequencyDifference;  // Adjust this value within the delta wave range

// Calculate the frequencies for the left and right ears
(baseFrequency - (frequencyDifference / 2.0)) => float leftFrequency;
(baseFrequency + (frequencyDifference / 2.0)) => float rightFrequency;

// Create SinOsc objects for the left and right ears
SinOsc leftOscillator => dac;
SinOsc rightOscillator => dac;

// Set the initial phases and frequencies of the oscillators
0.0 => leftOscillator.phase;
0.0 => rightOscillator.phase;
leftFrequency => leftOscillator.freq;
rightFrequency => rightOscillator.freq;


15::second => now;
// // Start the audio output
// while (true) {
//     // Generate and output the next samples for the left and right ears
//     leftOscillator.last() => _ => left;
//     rightOscillator.last() => _ => right;
// }
