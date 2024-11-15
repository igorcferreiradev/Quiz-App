const startQuizBtn = document.getElementById('startQuizBtn');
const infoBox = document.querySelector('.info_box');
const quitBtn = document.querySelector('.info_box .quit');
const continueBtn = document.querySelector('.info_box .restart');
const quizBox = document.querySelector('.quiz_box');
const nextBtn = document.querySelector('.next_btn');
const resultBox = document.querySelector('.result_box');
const replayBtn = document.querySelector('.result_box .restart');
const quitQuizBtn = document.querySelector('.result_box .quit');
const timerDisplay = document.querySelector('.time_sec');
const timeLine = document.querySelector('.time_line');
const questionText = document.querySelector('.que_text');
const optionList = document.querySelector('.option_list');
const questionCounter = document.querySelector('#questionCounter');

let questionIndex = 0;
let timeValue = 30; // Set initial time value
let score = 0;
let timer; // Variable for the timer
let timerLine; // Variable for the timer line animation
const totalQuestions = 30; // Total number of questions to display

// Shuffle questions function
function shuffleQuestions(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

// Prevent advancing using spacebar
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault(); // Prevent default action of space key
    }
});

startQuizBtn.onclick = () => {
    infoBox.classList.add('activeInfo');
};

quitBtn.onclick = () => {
    window.location.reload();
};

continueBtn.onclick = () => {
    infoBox.classList.remove('activeInfo');
    startQuizBtn.style.display = 'none';
    shuffleQuestions(questions); // Shuffle questions before starting the quiz
    quizBox.classList.add('activeQuiz');
    showQuestions(questionIndex);
    startTimer();
    startTimerLine();
};

nextBtn.onclick = () => {
    // Only allow proceeding if an option has been selected or time runs out
    if (optionList.querySelector('.selected') || timeValue <= 0) {
        clearInterval(timer);      // Clear previous timer
        clearInterval(timerLine);  // Clear previous timer line
        if (questionIndex < totalQuestions - 1) { 
            questionIndex++;
            showQuestions(questionIndex);
            startTimer(); // Reset the timer
            startTimerLine(); // Reset the timer line
        } else {
            clearInterval(timer);
            clearInterval(timerLine);
            showResultBox();
        }
    }
};

replayBtn.onclick = () => {
    questionIndex = 0;
    score = 0;
    timeValue = 30; // Reset time value
    clearInterval(timer);
    clearInterval(timerLine);
    quizBox.classList.add('activeQuiz');
    resultBox.classList.remove('activeResult');
    shuffleQuestions(questions); // Shuffle questions before starting again
    showQuestions(questionIndex);
    startTimer();
    startTimerLine();
};

quitQuizBtn.onclick = () => {
    window.location.reload();
};

function showQuestions(index) {
    const question = questions[index];
    questionText.textContent = ''; // Clear existing question text

    // Add question text
    const textNode = document.createTextNode(`${index + 1}. ${question.question}`);
    questionText.appendChild(textNode);

    optionList.innerHTML = ''; // Clear previous options

    // Create and append each option
    question.options.forEach((option) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');

        const span = document.createElement('span');
        const textNode = document.createTextNode(option);
        span.appendChild(textNode);
        optionElement.appendChild(span);

        optionElement.setAttribute('onclick', 'optionSelected(this)');
        optionList.appendChild(optionElement);
    });

    questionCounter.textContent = `Question: ${index + 1} of ${totalQuestions}`;
    nextBtn.style.display = 'none'; // Hide the next button initially
}

function optionSelected(answer) {
    // Add a 'selected' class to mark the selected answer
    const selectedOptions = optionList.querySelectorAll('.option');
    selectedOptions.forEach(option => {
        option.classList.remove('selected'); // Remove previously selected class
    });
    answer.classList.add('selected'); // Mark the clicked answer as selected

    clearInterval(timer);
    clearInterval(timerLine);
    const userAnswer = answer.textContent.trim(); // Get the user's selected answer
    const correctAnswer = questions[questionIndex].answer; // Get the correct answer

    // Check if the selected answer is correct
    if (userAnswer === correctAnswer) {
        score++;
        answer.classList.add('correct'); // Highlight the correct answer
        const iconDiv = document.createElement('div');
        iconDiv.classList.add('icon', 'tick');
        const icon = document.createElement('i');
        icon.classList.add('fas', 'fa-check');
        iconDiv.appendChild(icon);
        answer.appendChild(iconDiv); // Add tick icon
    } else {
        answer.classList.add('incorrect'); // Highlight the incorrect answer
        const iconDiv = document.createElement('div');
        iconDiv.classList.add('icon', 'cross');
        const icon = document.createElement('i');
        icon.classList.add('fas', 'fa-times');
        iconDiv.appendChild(icon);
        answer.appendChild(iconDiv); // Add cross icon
        const options = optionList.children; // Get all options
        for (let option of options) {
            if (option.textContent.trim() === correctAnswer) {
                option.classList.add('correct'); // Highlight the correct answer
                const iconDiv = document.createElement('div');
                iconDiv.classList.add('icon', 'tick');
                const icon = document.createElement('i');
                icon.classList.add('fas', 'fa-check');
                iconDiv.appendChild(icon);
                option.appendChild(iconDiv); // Add tick icon
            }
        }
    }

    // Disable all options after selection
    for (let option of optionList.children) {
        option.classList.add('disabled');
    }

    // Show the next button after answering or when time runs out
    nextBtn.style.display = 'block';
}

function showResultBox() {
    quizBox.classList.remove('activeQuiz');
    resultBox.classList.add('activeResult');

    const scoreText = resultBox.querySelector('.score_text');
    scoreText.textContent = ''; // Clear previous score text
    const scoreNode = document.createTextNode(`You scored ${score} out of ${totalQuestions}`); // Create score text
    scoreText.appendChild(scoreNode); // Append score text

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;

    // Ensure percentage is correct
    let progressEndValue = Math.round((score / totalQuestions) * 100); 
    progressEndValue = progressEndValue > 100 ? 100 : progressEndValue; // Cap at 100%

    if (progressEndValue < 1 && score > 0) {
        progressEndValue = 1; // Set a minimum percentage of 1% if there is a score
    }

    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#6db1fb ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

        if (progressStartValue >= progressEndValue || progressStartValue >= 100) {
            clearInterval(progress);
        }
    }, speed);
}

function startTimer() {
    timeValue = 30; // Reset the time value
    timerDisplay.textContent = timeValue; // Display the reset time
    timer = setInterval(() => {
        if (timeValue <= 0) {
            clearInterval(timer);
            timeDisplay(); // Call time display function
            const options = optionList.children;
            const correctAnswer = questions[questionIndex].answer;
            for (let option of options) {
                if (option.textContent.trim() === correctAnswer) {
                    option.classList.add('correct'); // Highlight the correct answer
                    const iconDiv = document.createElement('div');
                    iconDiv.classList.add('icon', 'tick');
                    const icon = document.createElement('i');
                    icon.classList.add('fas', 'fa-check');
                    iconDiv.appendChild(icon);
                    option.appendChild(iconDiv); // Add tick icon
                }
            }
            // Disable all options when time runs out
            for (let option of options) {
                option.classList.add('disabled');
            }
            nextBtn.style.display = 'block'; // Show the next button when time runs out
        } else {
            timeValue--;
            timeDisplay(); // Update time display
        }
    }, 1000);
}

function timeDisplay() {
    timerDisplay.textContent = timeValue; // Update timer display
}

let timeLineWidth = 0;
function startTimerLine() {
    timeLineWidth = 0; // Reset time line width
    timeLine.style.width = '100%'; // Set initial width
    timerLine = setInterval(() => {
        timeLineWidth -= 3.33; // Decrease width over time
        timeLine.style.width = `${timeLineWidth}%`; // Update line width
        if (timeLineWidth <= 0) {
            clearInterval(timerLine);
        }
    }, 1000);
}

