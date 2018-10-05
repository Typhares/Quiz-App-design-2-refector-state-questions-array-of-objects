"use strict";
 /** MVP
    *To complete this challenge, you'll need to use objects, arrays, functions, looping, event listeners, and DOM traversal and manipulation.
      * get data rendered on the screen
      * submit 
      * go to next question for loop increment i++
      * this approach is the traditiional JQuery way but it uses alot of DOM resources,
      *returning the array or object is more efficient and it works better with REACT
   */

/* I think that the showTheQuestion function and function init can be redesigned 
//when inside a block indent one space {} or if { }statement is a block

/**
   *Debugging: use the console and console.logs()
   *JQuery: copy-paste selectors into console; if selector has a length of 1 it is not empty
   *JS Functions: call the function 'showQuestion() in the console; if prints undefined it is working
   *HTML: elements tab, hover over what's not working;  look at classes, ids 
   *CSS: elements tab, hover over attributes; look at CSS; I had styled the "quiz-section" class display:none

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
    { 
        questionTitle: "Question 5",
        questionChoices: [ 'Francois I', 'Pope Paul III', 'Marie Antoinette', 'Leonardo da Vinci' ],
        questionCorrectChoice: 1,
        correctDetails: "Franciose was the most recent owner." 
    }, 
];
let currentQuestionNumber = 0; 
let totalNumberOfQuestions = questionsArray.length;
let correctQuestionCounter = 0; 

function showTheQuestion() { 
    let totalNumberOfChoices= questionsArray[currentQuestionNumber].questionChoices.length;
    /*  updates the questionTitle is it showing only the first question
    does the next questions need to be rendered in their own function*/
    $('#question').text(questionsArray[currentQuestionNumber].questionTitle);
    $('#choices').empty();
  
    //loop through questionChoices and dynamically generate a row for each of them '<div id=choices>'
    
    for (var i=0; i<totalNumberOfChoices; i++) {
        let buildEachChoiceHTML = `
            <div class="options">
                <label> 
                    <input value='${i}' class="possibleChoice" name='option' type="radio" required> ${questionsArray[currentQuestionNumber].questionChoices[i]} 
                </label>
            </div>`;
        $('#choices').append(buildEachChoiceHTML);
    }
    
    $('#questionNumberDisplay').text(`Question ${currentQuestionNumber + 1} out of ${totalNumberOfQuestions}`);
}

/*-- Using functions 
    *refactor each function below to handle a very narrow scope of commands---*/
function handleSubmitButtons() {
    //retrieve User choice
    
}
  

function renderQuestion() {
    console.log('hello world!');
/*question has already been rendered with the for loop */
}

function nextQuestion() {
    console.log('hello world!');
}

function init() {
/*--- 
    *console.log('hello world!');
    *debugging Maxim: just look to see if DOM is updated, there is no way to test your event listeners---*/ 
    $('.quiz-section').hide();
    $('.result-section').hide()
/*--- start the quiz and show the first question-*/   
    $('#startButtonQuiz').click(function(){ 
/*console.log('start the button click'); //start the quiz and show the first question*/
    $('.quiz-section').show();
    $('.result-section').hide();
    $('.start-section').hide();
    });
    $('correct-details-container').empty();
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













