//JavaScript for Contact Form are based on (Grieve, 2020) method. References are available in README.md.
//camelCase and PascalCase were used in this JavaScript according to (Wieruch, 2019)

//---IMPORTANT!!----
//Part of the rubric of this assignment was to only use 'let' and 'const'. No 'var' is allowed.
//No hardcoding allowed; use 'constants' and 'values' instead.


//<input type="email" name="email" maxlength="50">
//const uses camelCase
const userEmail = document.getElementsByName("email");

//<input type="text" name="subject">
const emailSubject = document.getElementsByName("subject");

//<textarea name="body">
const textArea = document.getElementsByName("body");

//Mandatory Rubric: Word filter from Battlestar Galactica: "feldercarb", "frack", "skinjob", "vulgacarb"
let wordArray =["feldercarb","frack","skinjob","vulgacarb"];