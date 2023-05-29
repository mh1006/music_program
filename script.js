
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

function freq1() {
    var music = document.getElementById("freq1");
    music.loop = true; // Set the loop property to true
    music.play();
}

var btnpre = document.getElementById("btnpre");
var btnnex = document.getElementById("btnnex");
var pic = document.getElementById("pic");
var num =1;

btnpre.addEventListener("click", picprev);
btnnex.addEventListener("click", picprev);

function picprev(){

    pic.src = "Picture/pic1.jpg";
    
}
function picnext(){

    pic.src = "Picture/pic2.jpg";
    
}

//https://medium.com/ken-ken-%E8%BE%B2%E5%A0%B4/%E7%85%A7%E7%89%87%E7%89%86%E5%88%87%E6%8F%9B-%E5%9F%BA%E7%A4%8E%E7%AF%87-7-e5fba813df9f