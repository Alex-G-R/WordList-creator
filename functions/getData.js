
function getData (key, dob, keyA, keyB, keyC) {
    if( key == ""){
        throw console.error("You didn't provide the main key");
    }

    let monthString;
    if( dob == ""){
        dob = false;
        year = false;
        month = false;
        monthString = false;
        day = false;

        // Check if the DOB is formated correctly if not throw error
    } else if (dob.length == 10 && dob.substr(4,1) == "/" && dob.substr(7, 1) == "/"){
        year = dob.substr(0,4); // extract the year
        month = dob.substr(5,2); // extract the month
        day = dob.substr(8,2); // extract the day

        switch(month) {
            case "01":
                monthString = "January"
                break;
            case "02":
                monthString = "February"
                break;
            case "03":
                monthString = "March"
                break;
            case "04":
                monthString = "April"
                break;
            case "05":
                monthString = "May"
                break;
            case "06":
                monthString = "June"
                break;
            case "07":
                monthString = "July"
                break;
            case "08":
                monthString = "August"
                break;
            case "09":
                monthString = "September"
                break;
            case "10":
                monthString = "October"
                break;
            case "11":
                monthString = "November"
                break;
            case "12":
                monthString = "December"
                break;
            default:
                monthString = false;
                
        }

    } else{
        throw console.error("You provided wrongly formated DOB")
    }

    if( keyA == ""){
        keyA = false;
    }
    if( keyB == ""){
        keyB = false;
    }
    if( keyC == ""){
        keyC = false;
    }

    const $DATA = {
        "keyWord": key,
        "keyA": keyA,
        "keyB": keyB,
        "keyC": keyC,
        "dob": dob,
        "year": year,
        "month": month,
        "monthString": monthString,
        "day": day,
    }

    return $DATA
}

module.exports = getData;