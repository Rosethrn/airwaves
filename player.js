const playlist = [
    "audio/music/song1.mp3",
    "audio/music/song2.mp3",
    "audio/music/song3.mp3"
];

let current = 0;

const player = document.getElementById("player");
const status = document.getElementById("status");
const nowPlaying = document.getElementById("nowPlaying");

function playSong(index) {
    player.src = playlist[index];
    player.play();

    status.textContent = "Broadcasting";
    nowPlaying.textContent = playlist[index].split("/").pop();
}

player.addEventListener("ended", () => {
    current++;

    if (current >= playlist.length)
        current = 0;

    playSong(current);
});

playSong(0);
