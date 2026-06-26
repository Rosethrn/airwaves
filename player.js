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

    debug.textContent = "C";

    player.play().then(() => {
        debug.textContent = "D";
        status.textContent = "Playing";
        nowPlaying.textContent = "Now Playing: " + songs[index];
    }).catch(() => {
        debug.textContent = "X";
        status.textContent = "Click anywhere to start playback.";
    });
}

player.addEventListener("ended", () => {
    debug.textContent = "E";

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
        debug.textContent = "F";
    }

    playSong(currentSong);
});

player.addEventListener("error", () => {
    debug.textContent = "G";
    status.textContent = "Audio Error";
});

// Start the first song
playSong(currentSong);
