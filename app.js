const prompt = require('prompt-sync')({sigint: true});

//declare constants
let $KEY = "";
let $DOB = "";
let $KEYc = "";
let $KEYb = "";
let $KEYa = "";

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
