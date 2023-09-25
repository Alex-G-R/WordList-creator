const prompt = require('prompt-sync')({sigint: true});

// Get functions
const sixthGeneration = require("./functions/sixthGeneration.js")
const fifthGeneration = require('./functions/fifthGeneration.js');
const firstGeneration = require('./functions/firstGen.js');
const fourthGeneration = require('./functions/fourthGeneration.js');
const getData = require('./functions/getData.js');
const secondGeneration = require('./functions/secondGen.js');
const thirdGeneration = require('./functions/thirdGeneration.js');

// declare variables 
let $KEY = "";
let $DOB = "";
let $KEYc = "";
let $KEYb = "";
let $KEYa = "";

// Create arrays
const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharsArray = ["!", "@", "#", "$", "&", "*", "_", "-"];
const popularPhrasesArray = ["123", "One", "passowrd", "321", "000", "69", "420", "666", "777", "key", "007", "1337"];


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