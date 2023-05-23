var volumeSlider = document.getElementById("musicVolume");

function play() {
    var music = document.getElementById("music");
    music.loop = true; // Set the loop property to true
    music.play();
}

function pause() {
    var music = document.getElementById("music");
    music.pause();
}

function adjustVolume(volume) {
    var volume = volumeSlider.value / 100; // Convert range 1-100 to 0.01-1
    music.volume = volume;
}

volumeSlider.addEventListener("input", adjustVolume);