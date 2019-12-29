function validateForm() {
    var name = document.userInfo.name.value;
    
    if (name == null || name == "") {
        alert("NAME CAN'T BE LEFT BLANK!");
        return false;
    }
    else {
        var name = document.getElementById("name").value;
        alert ("Hello " + name + ", Welcome to our Vocabulary Builder Quiz!");
    }
}

/* Game time code */

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes: minutes;
        seconds = seconds < 10 ? "0" + seconds: seconds;
        
        display.textContent = minutes + ":" + seconds;
        timer --;
        
        if (timer < 0) {
            timer = duration;
            //clearInterval(setInterval);
           //Display time up
         document.getElementsByClassName(".time").innerHTML += "<h4> Time's up </h4>";
            
        } 
        
    }, 1000);
    
}

window.onload = function () {
    var twoMinutes = 60 * 0.84,
        display = document.querySelector('.time');
    startTimer(twoMinutes, display);
};


//Select elements
var start = document.getElementById("start");
var reset = document.getElementById("reset");
var instruction = document.getElementById("instruction");
var quiz_Container = document.getElementById("quiz_Container");
var score = document.getElementById("score");
var wordName = document.getElementById("wordName");
var sentence = document.getElementById("sentence");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");



//Create Questions in an Array
var wordMeaning = [
        //Question 1 - Index [0]
    {
        wordName : "Constraint",
        sentence : "We do not have many resources, so we’ll have to work with some tight constraints.",
        choiceA : "Defense",
        choiceB : "Tightness",
        choiceC : "Limit",
        choiceD : "Anxiety",
        correct : "C"
    },
        //Question 2 - Index [1]
    {
        wordName : "Elaborate",
        sentence : "The President’s suit was way to elaborate for the casual dinner.",
        choiceA : "Struggling",
        choiceB : "Infected",
        choiceC : "Detailed",
        choiceD : "I'm not sure",
        correct : "C"
    },
        //Question 3 - Index [2]
    {
        wordName : "Irrefutable",
        sentence : "The theory of God’s existence is iffufutable with hard evidence.",
        choiceA : "Inferior",
        choiceB : "Strange",
        choiceC : "Blocked",
        choiceD : "Certain",
        correct : "D"
    },
        //Question 4 - Index[3]
    {
        wordName : "Laborious",
        sentence : "The trouble is very few of their laborious explanations stick in the meaning.",
        choiceA : "Demanding",
        choiceB : "Skilled",
        choiceC : "Knowledgable",
        choiceD : "Radical",
        correct : "B"
    },
        //Question 5 - Index [4]
    {
        wordName : "Catalyst",
        sentence : "USC Students are proud to be a catalyst for reform in society.",
        choiceA : "Bright",
        choiceB : "Disincentive",
        choiceC : "Cause of a process",
        choiceD : "I'm not sure",
        correct : "C"
    },
        //Question 6 - Index [5]
    {
        wordName : "Indefatigable",
        sentence : "John was an indefatigable campaigner for better community services.",
        choiceA : "Idle",
        choiceB : "Tireless",
        choiceC : "Fable",
        choiceD : "None of the above",
        correct : "B"
    },
        //Question 7 - Index [6]
    {
        wordName : "Lackadaisical ",
        sentence : "The department of infrastructure has always rather a lackadaisical approach to urban development.",
        choiceA : "Lacking life",
        choiceB : "Careless",
        choiceC : "Pure in hert",
        choiceD : "Excited",
        correct : "A"
    },
        //Question 8 - Index [7]
    {
        wordName : "Wheedle",
        sentence : "Amy wheedled her baby sitter into letter her stay up past her curfew.",
        choiceA : "Coax",
        choiceB : "Repulsive",
        choiceC : "Disgust",
        choiceD : "Weary",
        correct : "A"
    },
        //Question 9 - Index [8]
    {
        wordName : "Pedagogical",
        sentence : "New lecturers are evaluated on pedagogical skills such as lesson planning and classroom management.",
        choiceA : "Teaching",
        choiceB : "Novice",
        choiceC : "Intellectual",
        choiceD : "Scholarly",
        correct : "D"
    },
        //Question 10 - index [9]
    {
        wordName : "Fiduciary",
        sentence : "This is otherwise known as a fiduciary relationship.",
        choiceA : "Unbelievable",
        choiceB : "Trustee",
        choiceC : "Improbable",
        choiceD : "Infatuated",
        correct : "B"
    }
]; //End of Array

//Global Variables
var lastQuestion = wordMeaning.length - 6; //To load 5 questions
var currentQuestion = 0;
var score = 0;

//Display questions
function displayQuestion() {
    var dP = wordMeaning[currentQuestion];
    
    wordName.innerHTML = "<h3>"+ dP.wordName +"</h3>";
    sentence.innerHTML = "<p>"+ dP.sentence +"</p>";
    choiceA.innerHTML = dP.choiceA;
    choiceB.innerHTML = dP.choiceB;
    choiceC.innerHTML = dP.choiceC;
    choiceD.innerHTML = dP.choiceD;
    
    var currentIndex = wordMeaning.length, tempVal, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        
        tempVal = wordMeaning[currentIndex];
        wordMeaning[currentIndex] = wordMeaning[randomIndex];
        wordMeaning[randomIndex] = tempVal;
    }
    return wordMeaning;
}


function startQuiz() {
    //Hide instruction after game starts
    instruction.style.display = "none";
    
    //Show Quiz
    displayQuestion();
    quiz_Container.style.display = "block";
}

//Quiz Will only start after user clicks start
start.addEventListener("click", startQuiz);


//Restart Quiz - Reload the page, easily :D
function resetQuiz() {
    document.location.href = "";
    //score = 0;
}

reset.addEventListener("click", resetQuiz);


//Display Score
function showScore() {
    score.innerHTML += "<p> You made "+ score + " PTS!</p>";
    //or 
    alert("You made: " + score + " points!");
}

//Check answer
function checkAnswer(answer) {
    if (answer == wordMeaning[currentQuestion].correct) {
        //correct
        score+=1;
        
        //Alert user
        alert("Awesome Choice! Correct ^_^ ");
    }
    else {
        //Incorrect Alert user
        alert ("Ohh Nooooo!!! :( You'll do better next time.");
    }
    //Go to next question
    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        displayQuestion();
    }
        else {
            //End of QUIZ and display score
            alert("END of QUIZ!  See score | Reset to go again.");
            showScore();
        }
}