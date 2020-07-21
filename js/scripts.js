//JavaScript for Contact Form are based on (Grieve, 2020) method. References are available in README.md.
//camelCase and PascalCase were used in this JavaScript according to (Wieruch, 2019).

//---IMPORTANT!!----
//Part of the rubric of this assignment was to only use 'let' and 'const'. No 'var' is allowed.
//No hardcoding allowed; use 'constants' and 'values' instead.
//Variables and constants are in camelcase, functions and methods are in pascalcase.


const contactForm = document.querySelector('form'); 
const userEmail = document.querySelector('email');
const emailSubject = document.querySelector('subject');
const textArea = document.querySelector('body');
const submitButton = document.querySelector('submit');
const resetButton = document.querySelector('resetForm');
let wordArray = ['feldercarb','frack','skinjob','vulgacarb'];

submitButton.addEventListener('click', formAction);

function formAction () {
    
} 


