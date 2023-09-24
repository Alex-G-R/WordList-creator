
function getData (key, dob, keyA, keyB, keyC) {
    if( key == ""){
        throw console.error("You didn't provide the main key");
    }
    if( dob == ""){
        dob = false;
    } else if (dob.length == 10){
        year = dob.substr(0,4); // extract the year
        month = dob.substr(5,2); // extract the month
        day = dob.substr(8,2); // extract the day
    } else{
        throw console.error("You provided wrongly formated DOB")
    }
    if( keyA == ""){
        keyA = false;
    }
    if( keyB == ""){
        keyb = false;
    }
    if( keyC == ""){
        keyC = false;
    }

    const $DATA = {
        "keyWord": key,
        "dob": dob,
        "keyA": keyA,
        "keyB": keyB,
        "keyC": keyC
    }

    return $DATA
}

module.exports = getData;