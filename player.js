const debug = document.getElementById("debug");

debug.textContent = "A"; // Script started

function playSong(index) {
    debug.textContent = "B"; // Trying to play

    player.src = songs[index];
    player.play();

    nowPlaying.textContent = songs[index];
}

player.addEventListener("ended", () => {
    debug.textContent = "C"; // Song ended

    currentSong++;

    if (currentSong >= songs.length) {
        debug.textContent = "D"; // Looping back
        currentSong = 0;
    }

    playSong(currentSong);
});

player.addEventListener("error", () => {
    debug.textContent = "E"; // Audio error
});
