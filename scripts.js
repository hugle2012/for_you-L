document.addEventListener('DOMContentLoaded', (event) => {
    const quizForm = document.getElementById('quizForm');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    let currentSlideIndex = 0;
    const slides = document.getElementsByClassName('slide');

    // Show the initial slide
    showSlides(currentSlideIndex);

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const answers = Array.from(quizForm.querySelectorAll('input[type="radio"]:checked'));
        if (answers.length === 3) {
            modal.style.display = 'block';
        } else {
            alert('Please answer all questions.');
        }
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

    document.querySelector('.prev').addEventListener('click', function() {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        plusSlides(1);
    });

    function showSlides(n) {
        if (n >= slides.length) {
            currentSlideIndex = 0;
        } else if (n < 0) {
            currentSlideIndex = slides.length - 1;
        } else {
            currentSlideIndex = n;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[currentSlideIndex].style.display = "block";
    }

    function plusSlides(n) {
        showSlides(currentSlideIndex + n);
    }
});
