document.addEventListener('DOMContentLoaded', (event) => {
    const quizForm = document.getElementById('quizForm');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    yesButton.addEventListener('click', function() {
        alert("Here's your secret code: (9)->10");
        modal.style.display = 'none';
    });

    noButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    const audioPlayer = document.getElementById('audioPlayer');
    const songs = ['song1.mp3', 'song2.mp3', 'song3.mp3'];
    let currentSongIndex = 0;

    document.getElementById('next').addEventListener('click', function() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        audioPlayer.src = songs[currentSongIndex];
        audioPlayer.play();
    });

    document.getElementById('prev').addEventListener('click', function() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        audioPlayer.src = songs[currentSongIndex];
        audioPlayer.play();
    });
});
