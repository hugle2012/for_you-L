document.addEventListener('DOMContentLoaded', (event) => {
    let currentQuestion = 1;
    let correctAnswers = 0;
    const totalQuestions = 3;
    const correctAnswersKey = {
        1: 'C',
        2: 'C',
        3: 'A'
    };

    const quizForm = document.getElementById('quizForm');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const retryButton = document.getElementById('retry');
    const continueButton = document.getElementById('continue');
    const slides = document.getElementsByClassName('slide');

    // Show the initial slide
    let currentSlideIndex = 0;
    showSlides(currentSlideIndex);

    document.querySelectorAll('.submit-answer').forEach(button => {
        button.addEventListener('click', function() {
            const selectedOption = document.querySelector(`#question${currentQuestion} .option.selected`);
            if (selectedOption) {
                if (selectedOption.getAttribute('data-answer') === correctAnswersKey[currentQuestion]) {
                    correctAnswers++;
                }
                if (currentQuestion < totalQuestions) {
                    document.getElementById(`question${currentQuestion}`).style.display = 'none';
                    currentQuestion++;
                    document.getElementById(`question${currentQuestion}`).style.display = 'block';
                } else {
                    showQuizResult();
                }
            } else {
                alert('Please select an answer');
            }
        });
    });

    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll(`#question${currentQuestion} .option`).forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    retryButton.addEventListener('click', function() {
        retryQuiz();
    });

    continueButton.addEventListener('click', function() {
        alert("Here's your secret code: (9)->10");
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

    function showQuizResult() {
        const resultText = `You got ${correctAnswers} out of ${totalQuestions} correct!`;
        document.getElementById('quizResult').innerText = resultText;
        modal.style.display = 'block';
    }

    function retryQuiz() {
        currentQuestion = 1;
        correctAnswers = 0;
        document.getElementById('question1').style.display = 'block';
        document.getElementById('question2').style.display = 'none';
        document.getElementById('question3').style.display = 'none';
        document.querySelectorAll('.option').forEach(option => option.classList.remove('selected'));
        modal.style.display = 'none';
    }
});
