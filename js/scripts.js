//JavaScript for Contact Form are based on (Grieve, 2020) method. References are available in README.md.
//camelCase and PascalCase were used in this JavaScript according to (Wieruch, 2019).

//---IMPORTANT!!----
//Part of the rubric of this assignment was to only use 'let' and 'const'. No 'var' is allowed.
//No hardcoding allowed; use 'constants' and 'values' instead.
//Variables and constants are in camelcase, functions and methods are in pascalcase.


const contactForm = document.querySelector('form');
//<input type="email" name="email" maxlength="50">
//const uses camelCase
const userEmail = document.getElementById('email');

//<input type="text" name="subject">
const emailSubject = document.getElementById('subject');

//<textarea name="body">
const textArea = document.getElementById('body');

//<button type="submit" name="submit" id="submit">Submit</button>
const submitButton = document.getElementById('submit');


//Mandatory Rubric: Word filter from Battlestar Galactica: "feldercarb", "frack", "skinjob", "vulgacarb"
let wordArray = ['feldercarb','frack','skinjob','vulgacarb'];

//A. global has been made above, but now I want to have a place where they call the methods to excute the something for event listner when the user hit submit. 

//submitButton is the event listener to intiate check the form for Battlestar Galactica.
contactForm.addEventListener('submit',formAction);
//end of the event listner

//Initiate form validation. 
function formAction(){
    if ((textArea.value === 'feldercarb' || textArea.value === 'frack' || textArea.value === 'skinjob' || textArea.value === 'vulgarcarb'))
        {
        textArea.setCustomValidity('Do not use Battlestar Galactica Profanities');}

    // a. Want to get the right data, in the right format


    //1. scan for words in the form
        
    //2. user type their information in the form
    //3. user completed typing form and hit submit button
        //get the value of the userinput and the DOM reference variable.
    //4. by clicking the submit button, the word checking intiated 
        //if battlestar galactica detected, output is bad user 

    // Refactoring the hard coded value with Array 
    //Statement 1 is executed (one time) before the execution of the code block.
        //I will start int i = 0 to scan the first thing in array. 

    //Statement 2 defines the condition for executing the code block.
        //Update as of July 18, 2020 replace statement 2 with wordArray.legth

    //Statement 3 is executed (every time) after the code block has been executed.
        //I will want to increase the value array by 1 after every loop by usng i++
        
        //for (statement 1; statement 2; statement 3) {}

    //3. when the loop runs, it compares the message to the wordArray container
        //if user input empty userEmail, emailSubject, and Textbody a warning will say "Emtpy field detected"

        //if user decide to use one of the 4 swear words the warning will be "This form do not accept Battlestar Galactica Swear Words
}

    //4. if the user is nice, the message is sent 

