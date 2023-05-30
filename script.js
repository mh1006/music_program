var lastPlaying = false;

var musicFiles = [
    'music/圖書館.mp3',
    'music/海浪1.mp3',
    'music/海浪2.mp3',
    'music/淡水老街.mp3',
    'music/淡水老街2.mp3',
    'music/發電機.mp3',
    'music/路上.mp3'
];

var picFiles = [
    'Picture/圖書館.JPG',
    'Picture/海浪1.JPG',
    'Picture/海浪2.JPG',
    'Picture/淡水老街.JPG',
    'Picture/淡水老街2.JPG',
    'Picture/發電機.jpeg',
    'Picture/路上.JPG'
];

function adjustVolume(audioId, sliderId, outputId) {
    var audio = document.getElementById(audioId);
    var slider = document.getElementById(sliderId);
    var volume = slider.value / 100;
    
    audio.volume = volume;

    var output = document.getElementById(outputId);
    output.innerHTML = slider.value;
  }

  function toggleSound(audioId, containerId) {
    var audio = document.getElementById(audioId);
    var container = document.getElementById(containerId);
  
    if (container.style.display === 'none') {
      container.style.display = 'block';
      audio.loop = true;
      audio.play();
    } else {
      container.style.display = 'none';
      audio.loop = false;
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
      audio.loop = true; 
      playPauseIcon.classList.remove('fa-play');
      playPauseIcon.classList.add('fa-pause');
      lastPlaying = true;
    } else {
      audio.pause();
      audio.loop = false; 
      playPauseIcon.classList.remove('fa-pause');
      playPauseIcon.classList.add('fa-play');
      lastPlaying = false;
    }
  }

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

    if(lastPlaying) {
        pausePlayBtnSound();
    };
    ++num;
    num = num % numOfMusic;
    displayCurrentlyPlaying();
    var el = document.getElementById('body');
    el.style.backgroundImage = "url(" + picFiles[num] + ")" ;
    
}
function picnext(){

    // pic.src = "Picture/pic2.jpg";

    if(lastPlaying) {
        pausePlayBtnSound();
    };
    --num;
    num = num % numOfMusic;
    displayCurrentlyPlaying();
    var el = document.getElementById('body');
    el.style.backgroundImage = "url(" + picFiles[num] + ")";
}

//https://medium.com/ken-ken-%E8%BE%B2%E5%A0%B4/%E7%85%A7%E7%89%87%E7%89%86%E5%88%87%E6%8F%9B-%E5%9F%BA%E7%A4%8E%E7%AF%87-7-e5fba813df9f