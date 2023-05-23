function play() {
    var music = document.getElementById("music");
    music.loop = true; // Set the loop property to true
    music.play();
}

function pause() {
    var music = document.getElementById("music");
    music.pause();
}