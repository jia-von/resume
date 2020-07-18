//JavaScript for Contact Form are based on (Grieve, 2020) method. References are available in README.md.
//camelCase and PascalCase were used in this JavaScript according to (Wieruch, 2019).

//---IMPORTANT!!----
//Part of the rubric of this assignment was to only use 'let' and 'const'. No 'var' is allowed.
//No hardcoding allowed; use 'constants' and 'values' instead.
//Variables and constants are in camelcase, functions and methods are in pascalcase.

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
//I was hoping for Rick and Morty's Sea Cucumber :(
let wordArray = ['feldercarb','frack','skinjob','vulgacarb'];

//1. Collect userinput fields from emailSubject, textArea, and submit Button
//The use of constraint validation features @link: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#htmlattrdefvalue 

//userEmail input event listener
userEmail.addEventListener('input',() => {
    userEmail.setCustomValidity('');
    userEmail.checkValidity();
});

userEmail.addEventListener('invalid', () => {
    if (userEmail.value === ''){
        userEmail.setCustomValidity('Enter your email');
    } else if (userEmail.value === 'feldercarb', 'frack', 'skinjob', 'vulgacarb') 
    //will refactor later with an array but hard code it now cause I am dumb AF
        {
        userEmail.setCustomValidity('Email cannot contain Battlestar Galatica Swearwords');
        }
}); //end of userEmail input event listener

//emailSubject input event listener
emailSubject.addEventListener('input',() => {
    emailSubject.setCustomValidity('');
    emailSubject.checkValidity();
});

emailSubject.addEventListener('invalid', () => {
    if (emailSubject.value === ''){
        emailSubject.setCustomValidity('Enter a subject');
    } else if (emailSubject.value === 'feldercarb', 'frack', 'skinjob', 'vulgacarb') 
    //will refactor later with an array but hard code it now cause I am dumb AF
        {
        emailSubject.setCustomValidity('Subject line cannot contain Battlestar Galatica Swearwords');
        }
}); //end of emailSubject input event listener

//textArea input event listener
textArea.addEventListener('input',() => {
    textArea.setCustomValidity('');
    textArea.checkValidity();
});

textArea.addEventListener('invalid', () => {
    if (textArea.value === ''){
        textArea.setCustomValidity('Enter a subject');
    } else if (textArea.value === 'feldercarb', 'frack', 'skinjob', 'vulgacarb') 
    //will refactor later with an array but hard code it now cause I am dumb AF
        {
        textArea.setCustomValidity('Body cannot contain Battlestar Galatica Swearwords');
        }
}); //end of textArea input event listener


    //call action with method

    // Refactoring the hard coded value with Array 
    //Statement 1 is executed (one time) before the execution of the code block.
        //I will start int i = 0 to scan the first thing in array. 

    //Statement 2 defines the condition for executing the code block.
        //I will terminate with i<4 (because i only have 4 words to deal with)
        //Update as of July 18, 2020 replace statement 2 with wordArray.legth

    //Statement 3 is executed (every time) after the code block has been executed.
        //I will want to increase the value array by 1 after every loop by usng i++
        
        //for (statement 1; statement 2; statement 3) {}

    //3. when the loop runs, it compares the message to the wordArray container
        //if user input empty userEmail, emailSubject, and Textbody a warning will say "Emtpy field detected"

        //if user decide to use one of the 4 swear words the warning will be "This form do not accept Battlestar Galactica Swear Words

    //4. if the user is nice, the message is sent 

