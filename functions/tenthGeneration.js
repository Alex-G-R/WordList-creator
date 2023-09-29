
function tenthGeneration(data, specialChars, popularPhrazes){

    const eighthGeneration = require("./eighthGeneration");
    const fifthGeneration = require("./fifthGeneration");
    const firstGeneration = require("./firstGen");
    const fourthGeneration = require("./fourthGeneration");
    const ninethGeneration = require("./ninethGeneration");
    const secondGeneration = require("./secondGen");
    const seventhGeneration = require("./seventhGeneration");
    const sixthGeneration = require("./sixthGeneration");
    const thirdGeneration = require("./thirdGeneration");



    // Extract keys from the 'data' object and convert them to lowercase
    

    const $data = {
        keyWord: data.keyWord.toLowerCase(),
        keyA: data.keyA.toLowerCase(),
        keyB: data.keyB.toLowerCase(),
        keyC: data.keyC.toLowerCase(),
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
module.exports = tenthGeneration;