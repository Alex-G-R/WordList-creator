const prompt = require('prompt-sync')({sigint: true});

//declare constants
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

// Check if blank
while( $KEY === "" ){
    getTheMainKey();
}

if( $DOB == "" ){
    $DOB = false;
}

if( $KEYa === "" ){
    $KEYa = false;
}

if( $KEYb === "" ){
    $KEYb = false;
}

if( $KEYc === "" ){
    $KEYc = false;
}



// sumarize the data
console.log(`Main KEY: ${$KEY}`);
console.log(`DOB (date of birth YYYY/MM/DD): ${$DOB}`);
console.log(`Additional KE 1: ${$KEYa}`);
console.log(`Additional KEY 2: ${$KEYb}`);
console.log(`Additional KEY 3: ${$KEYc}`);

// Extract the data from the dob
let $YEAR;
let $MONTH;
let $DAY;

function extractDOB(DOB){
    $YEAR = DOB.substr(0,4); // extract the year
    $MONTH = DOB.substr(5,2); // extract the month
    $DAY = DOB.substr(8,2); // extract the day

    console.log(`year: ${$YEAR}, month: ${$MONTH}, day: ${$DAY}`)
}

extractDOB($DOB)


