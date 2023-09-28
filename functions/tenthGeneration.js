const eighthGeneration = require("./eighthGeneration");
const fifthGeneration = require("./fifthGeneration");
const firstGeneration = require("./firstGen");
const fourthGeneration = require("./fourthGeneration");
const ninethGeneration = require("./ninethGeneration");
const secondGeneration = require("./secondGen");
const seventhGeneration = require("./seventhGeneration");
const sixthGeneration = require("./sixthGeneration");
const thirdGeneration = require("./thirdGeneration");

function tenthGeneration(data, specialChars, popularPhrazes){

    data.keyWord = data.keyWord.toLowerCase();
    data.keyA = data.keyA.toLowerCase();
    data.keyB = data.keyB.toLowerCase();
    data.keyC = data.keyC.toLowerCase();

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

    console.log(data.keyA)

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
module.exports = tenthGeneration();