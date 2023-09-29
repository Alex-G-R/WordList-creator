const prompt = require('prompt-sync')({sigint: true});

// Get functions
const seventhGeneration = require("./functions/seventhGeneration.js")
const sixthGeneration = require("./functions/sixthGeneration.js")
const fifthGeneration = require('./functions/fifthGeneration.js');
const firstGeneration = require('./functions/firstGen.js');
const fourthGeneration = require('./functions/fourthGeneration.js');
const getData = require('./functions/getData.js');
const secondGeneration = require('./functions/secondGen.js');
const thirdGeneration = require('./functions/thirdGeneration.js');
const eighthGeneration = require('./functions/eighthGeneration.js');
const ninethGeneration = require('./functions/ninethGeneration.js');
const tenthGeneration = require('./functions/tenthGeneration.js');
const eleventhGeneration = require('./functions/eleventhGeneration.js');
const twelwthGeneration = require('./functions/twelwthGeneration.js');
const threeteenthGeneration = require('./functions/threeteenthGeneration.js');

// declare variables 
let $KEY = "";
let $DOB = "";
let $KEYc = "";
let $KEYb = "";
let $KEYa = "";

// Create arrays
const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharsArray = ["!", "@", "#", "$", "&", "*", "_", "-"];
const popularPhrasesArray = ["123", "One", "password", "321", "000", "69", "420", "666", "777", "key", "007", "1337", "Password", "one", "I"];


// Declare functions to get the data
// key word 
function getTheMainKey(){
    $KEY = prompt("Provide the key value for example name: ");
}

// date of birth - DOB
function getTheDOB(){
    $DOB = prompt("Provide the date of birth YYYY/MM/DD if you don't know leave blank and press ENTER: ");
}

// additional keywords
function getTheAdditionalKeyA(){
    $KEYa = prompt("Provide first additional key word if not needed leave blank and press ENTER: ");
}
function getTheAdditionalKeyB(){
    $KEYb = prompt("Provide second additional key word if not needed leave blank and press ENTER: ");
}
function getTheAdditionalKeyC(){
    $KEYc = prompt("Provide third additional key word if not needed leave blank and press ENTER: ");
}

// Get the data
getTheMainKey();
getTheDOB();
getTheAdditionalKeyA();
getTheAdditionalKeyB();
getTheAdditionalKeyC();

// check get and print the $DATA
const $DATA = getData($KEY, $DOB, $KEYa, $KEYb, $KEYc);
console.log($DATA)

// Generate passwords

// first generation MainKeyWord + 0-9999
firstGeneration($DATA);

// second generation = firstGeneration + specialChars
secondGeneration($DATA, specialCharsArray)

// third generation = MainKeyWord + AdditionalKeyWord a/b/c  
// MainKeyWord + AdditionalKey a/b/c + 0-9999
// MainKeyWord + AdditionalKey a/b/c + special characters
// MainKeyWord + AdditionalKey a/b/c + 0-9999 + special characters
thirdGeneration($DATA, specialCharsArray)

// fourth generation
// MKW + year-month-day --
// MKW + year-month --
// MKW + year --
// MKW + month-day --
// MKW + month --
// MKW + day --
// MKW + year-day --
// MKW + day-month --
// MKW + day-year --
// MKW + day+month+year --
// MKW + month-day-year --
// MKW year-day-month --
fourthGeneration($DATA);

// fifth generation = fourthGeneration + special characters
fifthGeneration($DATA, specialCharsArray)

// sixth generation = MKW + AdditionalWord A/B/C + fifth generation
sixthGeneration($DATA, specialCharsArray);

// seventh generation = MKW + AdditionalWord A/B/C + fourth generation
seventhGeneration($DATA)

// eighth generation = MKW + popular phrazes / MKW + popularPhrazes + specialchars
eighthGeneration($DATA, popularPhrasesArray, specialCharsArray)

// nineth generation = MKW + additionalKey A/B/C + specialChars
ninethGeneration($DATA, specialCharsArray)


// TenthGeneration = 1-9 gen = change to all Small leters
tenthGeneration($DATA, specialCharsArray, popularPhrasesArray)

// EleventhGeneration = 1-9 gen = change all letters to BIG
eleventhGeneration($DATA, specialCharsArray, popularPhrasesArray)

// Twelweth = 1-9 gen = toggleCase
twelwthGeneration($DATA, specialCharsArray, popularPhrasesArray);

// Threetennth = 1-9 gen = reverted toggleCase
threeteenthGeneration($DATA, specialCharsArray, popularPhrasesArray)
