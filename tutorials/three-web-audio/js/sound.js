

let song = document.querySelector("#song");
let playBtn = document.querySelector("#play-button");
let pauseBtn = document.querySelector("#pause-button");
let volBtn = document.querySelector("#volume");

song.volume = 1;

playBtn.addEventListener('click', function () {
    song.play();
});

pauseBtn.addEventListener('click', function () {
    song.pause();
});

volBtn.addEventListener('click', function () {
    if (song.volume == 1) {
        song.volume = .25;
    } else {
        song.volume = 1;
    }
});

song.onloadeddata = function () {
    playBtn.style.visibility = "visible";
    pauseBtn.style.visibility = "visible";
    volBtn.style.visibility = "visible";
}