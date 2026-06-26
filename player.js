const songs = [
    "audio/music/song1.mp3",
    "audio/music/song2.mp3",
    "audio/music/song3.mp3"
];

let currentSong = 0;

const player = document.getElementById("player");
const nowPlaying = document.getElementById("nowPlaying");
const status = document.getElementById("status");
const debug = document.getElementById("debug");
const startButton = document.getElementById("startButton");

function playSong(index) {
    debug.textContent = "B";

    player.src = songs[index];

    player.play().then(() => {
        debug.textContent = "D";
        status.textContent = "Playing";
        nowPlaying.textContent = "Now Playing: " + songs[index];
.catch((error) => {
    debug.textContent = "X";
    status.textContent = error.name + ": " + error.message;
});
}

player.addEventListener("ended", () => {
    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
        debug.textContent = "F";
    }

    playSong(currentSong);
});

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    playSong(currentSong);
});
