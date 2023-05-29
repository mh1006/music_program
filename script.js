
var volumeSlider = document.getElementById("musicVolume");

var musicFiles = [
    'music/圖書館.mp3',
    'music/海浪1.mp3',
    'music/海浪2.mp3',
    'music/淡水老街.mp3',
    'music/淡水老街2.mp3',
    'music/發電機.mp3',
    'music/路上.mp3'
];

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

function toggleSound(audioId) {
    var audio = document.getElementById(audioId);
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
}

var button = document.querySelector('.play-pause-button');

function pausePlayBtnSound() {
    var audio = document.getElementById('audioPlayer');
    var playPauseIcon = document.getElementById('playPauseIcon');
  
    if (audio.paused) {
      audio.src = musicFiles[num];
      audio.play();
      playPauseIcon.classList.remove('fa-play');
      playPauseIcon.classList.add('fa-pause');
    } else {
      audio.pause();
      playPauseIcon.classList.remove('fa-pause');
      playPauseIcon.classList.add('fa-play');
    }
}

volumeSlider.addEventListener("input", adjustVolume);

var audioPlayer = document.getElementById('audioPlayer');

function displayCurrentlyPlaying() {
    var currentlyPlayingElement = document.getElementById('currentlyPlaying');
    currentlyPlayingElement.textContent = 'currently playing: ' + musicFiles[num];
}

var btnpre = document.getElementById("btnpre");
var btnnex = document.getElementById("btnnex");
var pic = document.getElementById("pic");
var num = 0;
const numOfMusic = 7;

btnpre.addEventListener("click", picprev);
btnnex.addEventListener("click", picprev);

function picprev(){

    // pic.src = "Picture/pic1.jpg";
    ++num;
    num = num % numOfMusic;
    displayCurrentlyPlaying();
    
}
function picnext(){

    // pic.src = "Picture/pic2.jpg";
    --num;
    num = num % numOfMusic;
    displayCurrentlyPlaying();
}

//https://medium.com/ken-ken-%E8%BE%B2%E5%A0%B4/%E7%85%A7%E7%89%87%E7%89%86%E5%88%87%E6%8F%9B-%E5%9F%BA%E7%A4%8E%E7%AF%87-7-e5fba813df9f