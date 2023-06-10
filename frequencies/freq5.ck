
SinOsc s => SinOsc car => ADSR env => Delay delay => dac;
delay => delay;

env.set(10::ms, 80::ms, 0.3, 50::ms);
100::ms => delay.max => delay.delay;
0.8 =>delay.gain;
0.1 => car.gain;
1 => car.sync;

while(1){
    Math.random2(60,72) => int theNote;
    Std.mtof(theNote) => car.freq;
    Std.mtof(theNote) => s.freq;
    env.keyOn();
    10::ms => now;
    env.keyOff();
    env.releaseTime() => now;
    0.01::ms => now;
}