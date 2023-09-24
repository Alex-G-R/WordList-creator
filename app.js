const prompt = require('prompt-sync')({sigint: true});

// Get functions
const getData = require('./functions/getData.js');
const extractDOB = require("./functions/extractDOB.js")

// declare variables 
let $KEY = "";
let $DOB = "";
let $KEYc = "";
let $KEYb = "";
let $KEYa = "";

// Create arrays
const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharsArray = ["!", "@", "#", "$", "&", "*", "_", "-"];
const popularPhrasesArray = ["123", "One", "passowrd", "321", "000", "69", "420", "666", "777", "key"];


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


// Extract the data from the dob
console.log(extractDOB($DOB));


