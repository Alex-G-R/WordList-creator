
function getData (key, dob, keyA, keyB, keyC) {
    if( key == ""){
        throw console.error("You didn't provide the main key");
    }
    if( dob == ""){
        dob = false;
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