
function twelwthGeneration(data, specialChars, popularPhrazes){

    const eighthGeneration = require("./eighthGeneration");
    const fifthGeneration = require("./fifthGeneration");
    const firstGeneration = require("./firstGen");
    const fourthGeneration = require("./fourthGeneration");
    const ninethGeneration = require("./ninethGeneration");
    const secondGeneration = require("./secondGen");
    const seventhGeneration = require("./seventhGeneration");
    const sixthGeneration = require("./sixthGeneration");
    const thirdGeneration = require("./thirdGeneration");

    function toggleCase(inputString) {
        let toggledString = '';
        for (let i = 0; i < inputString.length; i++) {
            if (i % 2 === 0) {
                toggledString += inputString[i].toUpperCase();
            } else {
                toggledString += inputString[i].toLowerCase();
            }
        }
        return toggledString;
      }

    // Extract keys from the 'data' object and convert them to CammelCase
    

    const $data = {
        keyWord: toggleCase(data.keyWord),
        keyA: toggleCase(data.keyA),
        keyB: toggleCase(data.keyB),
        keyC: toggleCase(data.keyC),
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
module.exports = twelwthGeneration;