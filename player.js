const songs = [
    "audio/music/song1.mp3",
    "audio/music/song2.mp3",
    "audio/music/song3.mp3"
];

let currentSong = 0;

const player = document.getElementById("player");
const nowPlaying = document.getElementById("nowPlaying");

function playSong(index) {
    player.src = songs[index];
    player.play();

    nowPlaying.textContent =
        "Now Playing: " + songs[index].split("/").pop();
}

// When a song finishes...
player.addEventListener("ended", () => {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    playSong(currentSong);

});

playSong(currentSong);
