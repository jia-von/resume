//JavaScript for Contact Form are based on (Grieve, 2020) method. References are available in README.md.
//camelCase and PascalCase were used in this JavaScript according to (Wieruch, 2019).

//---IMPORTANT!!----
//Part of the rubric of this assignment was to only use 'let' and 'const'. No 'var' is allowed.
//No hardcoding allowed; use 'constants' and 'values' instead.
//Variables and constants are in camelcase, functions and methods are in pascalcase.

const formList = document.querySelectorAll('input');
const formBody = document.querySelector('textarea')
const submitButton = document.querySelector('submit');
let wordArray = ['feldercarb','frack','skinjob','vulgacarb'];

formList.addEventListener('input', () => {
    formList.setCustomValidity('');
    formList.checkValidity();
});

formList.addEventListener('invalid', () => {
    if (














