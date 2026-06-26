const songs = [
    "audio/music/song1.mp3",
    "audio/music/song2.mp3",
    "audio/music/song3.mp3"
];

let currentSong = 0;

const player = document.getElementById("player");
const nowPlaying = document.getElementById("nowPlaying");

function playSong(index) {
    console.log("Playing:", songs[index]);

    player.src = songs[index];

    player.play().catch(err => {
        console.error("Play failed:", err);
    });

    nowPlaying.textContent = "Now Playing: " + songs[index];
}

player.addEventListener("ended", () => {
    console.log("Song ended!");

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    playSong(currentSong);
});

playSong(currentSong);
