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

debug.textContent = "A";

function playSong(index) {
    debug.textContent = "B";

    player.src = songs[index];

    player.play();

    nowPlaying.textContent = "Now Playing: " + songs[index];
    status.textContent = "Playing";
}

player.addEventListener("ended", () => {
    debug.textContent = "C";

    currentSong++;

    if (currentSong >= songs.length) {
        debug.textContent = "D";
        currentSong = 0;
    }

    playSong(currentSong);
});

player.addEventListener("error", () => {
    debug.textContent = "E";
    status.textContent = "Audio Error";
});

// Start the first song
playSong(currentSong);
