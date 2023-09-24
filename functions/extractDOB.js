
function extractDOB(DOB){
    $YEAR = DOB.substr(0,4); // extract the year
    $MONTH = DOB.substr(5,2); // extract the month
    $DAY = DOB.substr(8,2); // extract the day

    const extractedDOB = {
        "year": $YEAR,
        "month": $MONTH,
        "day": $DAY
    }

    return(extractedDOB)
}

module.exports = extractDOB;