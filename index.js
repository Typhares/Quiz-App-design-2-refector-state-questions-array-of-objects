"use strict";

/** <!--Refactor HTML as a Form check my selectors-->
   *Debugging: use the console and console.logs()
   *JQuery: copy-paste selectors into console; if selector has a length of 1 it is not empty
   *JS Functions: call the function 'showQuestion() in the console; if prints undefined it is working
   *HTML: elements tab, hover over what's not working;  look at classes, ids 
   *CSS: elements tab, hover over attributes; look at CSS; I had styled the "quiz-section" class display:none
   * look at the requirements: core functionality for Quiz App is create the object, get the data on the screen, submit button, go to next question [i++]
   */
/** MVP
    * 10 questions 5 choices
      * get data rendered on the screen
      * submit 
    * go to next question for loop increment i++
      * this approach is the traditiional JQuery way but it uses alot of DOM resources,
      *returning the array or object is more efficient and it works better with REACT
   */
const questionsArray = [
//Question 1
    { 
    questionTitle: "How many people visit The Mona Lisa each year?",
    questionChoices: [ '1 billion', '22 million', '12 million', 'no-one is counting' ],
    questionCorrectChoice: 2,
    correctDetails: "12 million people visit the Louvre Museum where The Mona Lisa has a room of her own!" 
    }, 
//Question 2
    { 
    questionTitle: "Question 2",
    questionChoices: [ '10 million', '15 million', '20 million', 'not insured' ],
    questionCorrectChoice: 3, 
    correctDetails: "10 million is not alot of money." 
    }, 
//Question 3
    { 
    questionTitle: "Question 3",
    questionChoices: [ '260 million', '25 million', '1 billion', 'not known' ],
    questionCorrectChoice: 0, 
    correctDetails: "It is not known." 
    }, 
//Question 4
    { 
    questionTitle: "Question 4",
    questionChoices: [ 'Francois I', 'Pope Paul III', 'Marie Antoinette', 'Leonardo da Vinci' ],
    questionCorrectChoice: 3,
    correctDetails: "Franciose was the most recent owner." 
    }, 

/*--Questions 5-10 here  ---*/  

];

let currentQuestionNumber = 0; 
let totalNumberOfQuestions = questionsArray.length;
let totalNumberOfCorrectAnswers = 0;

/*--- Defining functions ---*/

//generate the question form
function showTheQuestion() { 
    // update questionTitle text
    $('#question').text(questionsArray[currentQuestionNumber].questionTitle);
    //hide existing radio button choices'<div id=choices>'
    $('#choices').empty();

    let totalNumberOfChoices= questionsArray[currentQuestionNumber].questionChoices.length;
    
    //loop through questionChoices and append them to '<div id=choices>'

    for (var i=0; i<totalNumberOfChoices; i++) {
        
    let buildEachChoiceHTML =`<input type='radio' class='option' name='option' value='${i}'> ${questionsArray[currentQuestionNumber].questionChoices[i]}`;
    $('#choices').append(buildEachChoiceHTML);
        
    }
    
    $('#questionNumberDisplay').text(`Question ${currentQuestionNumber + 1} ${totalNumberOfQuestions}`);
}

/*-- Using functions ---*/

function renderQuestion() {
    console.log('hello world!');
}

function nextQuestion() {
    console.log('hello world!');
}

function init() {
    console.log('hello world!');
/*--- Hide quiz and result section on load ---*/    
    /*--- just look to see if DOM is updated, there is no way to test your event listeners---*/    
    $('.quiz-section').hide();
    $('.result-section').hide()
        /*--- you can console log the call back function and inspect in the console hit the start button and 'start button click' will appear--*/   
    $('#startButtonQuiz').click(function ( ){ 
      console.log('start button click'); //start the quiz and show the first question
    $('.result-section').hide();
    $('.start-section').hide();
    $('.quiz-section').show();     
    });
    console.log("hello does this work?")
    
    showTheQuestion();
//    console.log('hello world!');
    renderQuestion();
//    console.log('hello world!');
    nextQuestion();
//    console.log('hello world!');
    
}

$(init);


/**
  
  *The First Event when the page is fully loaded that activates the Quiz App
  *invoke JQuery ${} passing init CALLBACK function
  *function that calls all the other functions
  *the page has already been read, the functions get hoistsed, define before and call them after. 
  *$(callBackFunction) replaces document.Ready()
  *${donkey} doesn't matter what you call it
  *${Dom ready} for example the init function can be written like this >>>>>>>
  
  
        function init() {

        handleThumnailClicks(); 
        doSomething(); 
        
        }

*/













