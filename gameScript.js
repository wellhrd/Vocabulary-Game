document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    function validateForm() {
        const name = document.userInfo.name.value.trim();
        
        if (!name) {
            alert("NAME CAN'T BE LEFT BLANK!");
            return false;
        } else {
            alert(`Hello ${name}, Welcome to our Vocabulary Builder Quiz!`);
            return true;
        }
    }

    // Timer function
    function startTimer(duration, display) {
        let timer = duration;
        const interval = setInterval(() => {
            const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
            const seconds = String(timer % 60).padStart(2, '0');

            display.textContent = `${minutes}:${seconds}`;
            timer--;

            if (timer < 0) {
                clearInterval(interval);
                display.innerHTML += "<h4>Time's up</h4>";
            }
        }, 1000);
    }

    // Start timer on window load
    window.onload = () => {
        const oneMinute = 60; // 1 minute in seconds
        const display = document.querySelector('.time');
        startTimer(oneMinute, display);
    };

    // Select elements
    const start = document.getElementById("start");
    const reset = document.getElementById("reset");
    const instruction = document.getElementById("instruction");
    const quizContainer = document.getElementById("quiz_Container");
    const scoreDisplay = document.getElementById("MyScore");
    const wordName = document.getElementById("wordName");
    const sentence = document.getElementById("sentence");
    const choiceA = document.getElementById("A");
    const choiceB = document.getElementById("B");
    const choiceC = document.getElementById("C");
    const choiceD = document.getElementById("D");

    // Questions array
    const wordMeaning = [
        {
            wordName: "Constraint",
            sentence: "We do not have many resources, so we’ll have to work with some tight constraints.",
            choiceA: "Defense",
            choiceB: "Tightness",
            choiceC: "Limit",
            choiceD: "Anxiety",
            correct: "C"
        },
        {
            wordName: "Elaborate",
            sentence: "The President’s suit was way too elaborate for the casual dinner.",
            choiceA: "Struggling",
            choiceB: "Infected",
            choiceC: "Detailed",
            choiceD: "I'm not sure",
            correct: "C"
        },
        {
            wordName: "Irrefutable",
            sentence: "The theory of God’s existence is irrefutable with hard evidence.",
            choiceA: "Inferior",
            choiceB: "Strange",
            choiceC: "Blocked",
            choiceD: "Certain",
            correct: "D"
        },
        {
            wordName: "Laborious",
            sentence: "The trouble is very few of their laborious explanations stick in the meaning.",
            choiceA: "Demanding",
            choiceB: "Skilled",
            choiceC: "Knowledgeable",
            choiceD: "Radical",
            correct: "A"
        },
        {
            wordName: "Catalyst",
            sentence: "USC Students are proud to be a catalyst for reform in society.",
            choiceA: "Bright",
            choiceB: "Disincentive",
            choiceC: "Cause of a process",
            choiceD: "I'm not sure",
            correct: "C"
        },
        {
            wordName: "Indefatigable",
            sentence: "John was an indefatigable campaigner for better community services.",
            choiceA: "Idle",
            choiceB: "Tireless",
            choiceC: "Fable",
            choiceD: "None of the above",
            correct: "B"
        },
        {
            wordName: "Lackadaisical",
            sentence: "The department of infrastructure has always rather a lackadaisical approach to urban development.",
            choiceA: "Lacking life",
            choiceB: "Careless",
            choiceC: "Pure in heart",
            choiceD: "Excited",
            correct: "B"
        },
        {
            wordName: "Wheedle",
            sentence: "Amy wheedled her baby sitter into letting her stay up past her curfew.",
            choiceA: "Coax",
            choiceB: "Repulsive",
            choiceC: "Disgust",
            choiceD: "Weary",
            correct: "A"
        },
        {
            wordName: "Pedagogical",
            sentence: "New lecturers are evaluated on pedagogical skills such as lesson planning and classroom management.",
            choiceA: "Teaching",
            choiceB: "Novice",
            choiceC: "Intellectual",
            choiceD: "Scholarly",
            correct: "A"
        },
        {
            wordName: "Fiduciary",
            sentence: "This is otherwise known as a fiduciary relationship.",
            choiceA: "Unbelievable",
            choiceB: "Trustee",
            choiceC: "Improbable",
            choiceD: "Infatuated",
            correct: "B"
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    // Display questions
    function displayQuestion() {
        const dP = wordMeaning[currentQuestion];

        wordName.innerHTML = `<h3>${dP.wordName}</h3>`;
        sentence.innerHTML = `<p>${dP.sentence}</p>`;
        choiceA.innerHTML = dP.choiceA;
        choiceB.innerHTML = dP.choiceB;
        choiceC.innerHTML = dP.choiceC;
        choiceD.innerHTML = dP.choiceD;
    }

    function startQuiz() {
        instruction.style.display = "none";
        displayQuestion();
        quizContainer.style.display = "block";
    }

    start.addEventListener("click", startQuiz);

    function resetQuiz() {
        document.location.reload();
    }

    reset.addEventListener("click", resetQuiz);

    function updateScore() {
        scoreDisplay.innerHTML = score;
    }

    function showScore() {
        alert(`You made: ${score} points!`);
    }

    function checkAnswer(answer) {
        if (answer === wordMeaning[currentQuestion].correct) {
            score++;
            updateScore();
            alert("Awesome Choice! Correct ^_^");
        } else {
            alert("Ohh Nooooo!!! :( You'll do better next time.");
        }

        if (currentQuestion < wordMeaning.length - 1) {
            currentQuestion++;
            displayQuestion();
        } else {
            alert("END of QUIZ! See score | Reset to go again.");
            showScore();
        }
    }

    // Assign checkAnswer to choices
    [choiceA, choiceB, choiceC, choiceD].forEach((choice) => {
        choice.addEventListener("click", () => checkAnswer(choice.getAttribute("data-choice")));
    });

    // Initialize score display
    updateScore();
});
