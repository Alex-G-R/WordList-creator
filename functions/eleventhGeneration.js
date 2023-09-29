
function eleventhGeneration(data, specialChars, popularPhrazes){

    const eighthGeneration = require("./eighthGeneration");
    const fifthGeneration = require("./fifthGeneration");
    const firstGeneration = require("./firstGen");
    const fourthGeneration = require("./fourthGeneration");
    const ninethGeneration = require("./ninethGeneration");
    const secondGeneration = require("./secondGen");
    const seventhGeneration = require("./seventhGeneration");
    const sixthGeneration = require("./sixthGeneration");
    const thirdGeneration = require("./thirdGeneration");



    // Extract keys from the 'data' object and convert them to Uppercase
    

    const $data = {
        keyWord: data.keyWord.toUpperCase(),
        keyA: data.keyA.toUpperCase(),
        keyB: data.keyB.toUpperCase(),
        keyC: data.keyC.toUpperCase(),
        dob: data.dob,
        year: data.year,
        month: data.month,
        monthString: data.monthString,
        day: data.day,
    }
    


    // call the functions
    firstGeneration($data);
    secondGeneration($data, specialChars);
    thirdGeneration($data, specialChars);
    fourthGeneration($data);
    fifthGeneration($data, specialChars);
    sixthGeneration($data, specialChars);
    seventhGeneration($data);
    eighthGeneration($data, popularPhrazes, specialChars);
    ninethGeneration($data, specialChars);
    

}
module.exports = eleventhGeneration;