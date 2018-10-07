"use strict";
 /**  https://simplestepscode.com/javascript-quiz-tutorial/ */
 /**    startPage() * get first question data rendered on the screen
        startQuiz() * submit User checked
        nextQuestion() * go to next question for loop increment i++
        getAnswer() 
        restartQuiz()
      * this approach is the traditiional JQuery way but it uses alot of DOM resources,
      *returning the array or object is more efficient and it works better with REACT
   */

/**
   *Debugging: use the console and console.logs()
   *JQuery: copy-paste selectors into console; if selector has a length of 1 it is not empty
   *just look to see if DOM is updated, there is no way to test your event listeners
   *JS Functions: call the function 'showQuestion() in the console; if prints undefined it is working
   *HTML: elements tab, hover over what's not working;  look at classes, ids 
   *CSS: elements tab, hover over attributes; look at CSS; I had styled the "quiz-section" class display:none

   */

const questionsArray = [
    { 
        questionTitle: "How many people visit The Mona Lisa each year?",
        questionChoices: [ '1 billion', '22 million', '12 million', 'no-one is counting' ],
        questionCorrectChoice: 2,
        correctDetails: "12 million people visit the Louvre Museum where The Mona Lisa has a room of her own!"
    }, 

    { 
        questionTitle: "Question 2",
        questionChoices: [ '10 million', '15 million', '20 million', 'not insured' ],
        questionCorrectChoice: 1, 
        correctDetails: "10 million is the answer, but it's not really alot of money." 
    }, 
    
    { 
        questionTitle: "Question 3",
        questionChoices: [ '260 million', '25 million', '1 billion', 'not known' ],
        questionCorrectChoice: 4, 
        correctDetails: "It is not known." 
    }, 

    { 
        questionTitle: "Question 4",
        questionChoices: [ 'Francois I', 'Pope Paul III', 'Marie Antoinette', 'Leonardo da Vinci' ],
        questionCorrectChoice: 2,
        correctDetails: "Placeholder string number one." 
    }, 

    { 
        questionTitle: "Question 5",
        questionChoices: [ 'Francois I', 'Pope Paul III', 'Marie Antoinette', 'Leonardo da Vinci' ],
        questionCorrectChoice: 1,
        correctDetails: "Placeholder string number two."
    }, 
    
    { 
        questionTitle: "Question 6",
        questionChoices: [ 'Francois I', 'Pope Paul III', 'Marie Antoinette', 'Leonardo da Vinci' ],
        questionCorrectChoice: 3,
        correctDetails: "Placeholder string number three."
    }, 
    
        { 
        questionTitle: "Question 7",
        questionChoices: [ 'Francois I', 'Pope Paul III', 'Marie Antoinette', 'Leonardo da Vinci' ],
        questionCorrectChoice: 5,
        correctDetails: "Placeholder string number four."
    }, 
    
    { 
        questionTitle: "Question 8",
        questionChoices: [ 'Francois I', 'Pope Paul III', 'Marie Antoinette', 'Leonardo da Vinci' ],
        questionCorrectChoice: 4,
        correctDetails: "Placeholder string number five."
    }, 
/*--Questions 9-10 here  ---*/  
];

let currentQuestionNumber = 0; 
let totalNumberOfQuestions = questionsArray.length;
let correctQuestionCounter = 0; 

/* --Gets the data on the screen  */

function showTheQuestion() { 
    let totalNumberOfChoices = questionsArray[currentQuestionNumber].questionChoices.length;
    $('#question').text(questionsArray[currentQuestionNumber].questionTitle);
    $('#choices').empty();
  
    //loop through questionChoices and dynamically generate a row for each of them '<div id=choices>'
    
    for (var i=0; i < totalNumberOfChoices; i++) {
        let buildEachChoiceHTML = `
            <div class="options">
                <label> 
                    <input value='${i}' class="possibleChoice" name='option' type="radio" required> ${questionsArray[currentQuestionNumber].questionChoices[i]} 
                </label>
            </div>`;
        $('#choices').append(buildEachChoiceHTML);
    }
    
    $('#questionNumberDisplay').text(`Question ${currentQuestionNumber + 1 + '/'} ${totalNumberOfQuestions}`);

    handleSubmit();
}

/*-- write functions that run very narrow programs
/*-- 1.validate the form --*/
/*-- 2.retrieve user answer or checked --*/
/*-- 3.display--*/
/*-- 4.go to next --*/
/*-- be careful of closing brackets and indentation: everything inside a block (curlys braces) indent the code w/in one tab space--*/

function handleSubmit() {
    $('.questions').submit(function(event){
        console.log("hello is it working?")
        event.preventDefault();
        
     let correctAnswer = questionsArray[currentQuestionNumber].questionCorrectChoice;
        if ( $('input').is(':checked') ) {
             //get the answer from the User by retrieving the value="one"
            let selectedOption = $('input[name="option"]:checked').val();
            // console.log("validate the user selection");
            if ( selectedOption == correctAnswer ) {
                correctQuestionCounter++;
            //    console.log(correctQuestionCounter);
            } else {
                currentQuestionNumber++;
                console.log("it is incrementing");
              // show the next question
             $('#question').text(questionsArray[currentQuestionNumber].questionTitle)
            }
        }
    })
    
    restartQuiz();
    console.log('restart the quiz');
}

/*-- renderFeedback (use a boolean data type) --*/

function renderFeedback() {
    console.log('render the question!');

}

/*-- double check this function name, it's not an action for restarting the Quiz. What is the .on('click', function) ---*/

function nextQuestion () {
    $('#next-button').text('click', function(event) {
    
    });
    
}
function restartQuiz () {
    $('.reset-button').on('click', function(event) {
    $('.start-section').
    });
}


function init() {
    $('.quiz-section').hide();
    $('.result-section').hide();
/*--- start the quiz and show the first question-*/   
    $('#startButtonQuiz').click(function() { 
/*console.log('start the button click'); //start the quiz and show the first question*/
    $('.quiz-section').show();
    $('.result-section').hide();
    $('.start-section').hide();
    
    });
    
    $('correct-details-container').empty();
    console.log("correct details container");

    showTheQuestion();
    console.log('showTheQuestion!');
    
}

$(init)
/**
  *The First Event when the page is fully loaded that activates the Quiz App
  *invoke JQuery ${} passing init CALLBACK function
  *function that calls all the other functions
  *the page has already been read, the functions get hoistsed, define before and call them after. 
  *$(callBackFunction) replaces document.Ready()
  *${donkey} doesn't matter what you call it
  *${Dom ready} for example the init function can be written like this >>>>>>>
  
  


*/













