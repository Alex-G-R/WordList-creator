

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

    // not working

    // main key word
    let temp = data.keyWord;
    let MKW = temp.toLowerCase();
    // key a
    temp = data.A;
    let KA = temp.toLowerCase();
    // key b
    temp = data.keyB;
    let KB = temp.toLowerCase();
    // key C
    temp = data.keyC;
    let KC = temp.toLowerCase();

    let datadob = data.dob;
    let datayear = data.year;
    let datamonth = data.month;
    let datamonthString = data.monthString;
    let dataday = data.day;

    const $data = {
        keyWord: MKW,
        keyA: KA,
        keyB: KB,
        keyC: KC,
        dob: datadob,
        year: datayear,
        month: datamonth,
        monthString: datamonthString,
        day: dataday,
    }

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