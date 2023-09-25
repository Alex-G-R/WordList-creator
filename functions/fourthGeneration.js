
function fourthGeneration (data){
    const fs = require('fs');

    // MKW + year month day
    if( data.dob != false){
        const password = data.keyWord + data.year + data.month + data.day;
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }

    // MKW + year month
    if( data.dob != false){
        const password = data.keyWord + data.year + data.month;
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }

    // MKW + year
    if( data.dob != false){
        const password = data.keyWord + data.year;
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }

    // MKW + month day
    if( data.dob != false){
        const password = data.keyWord + data.month + data.day;
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }

    // MKW + month
    if( data.dob != false){
        const password = data.keyWord + data.month;
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }

    // MKW + day
    if( data.dob != false){
        const password = data.keyWord + data.day;
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }


    // MKW + year day
    if( data.dob != false){
        const password = data.keyWord + data.year + data.day;
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }

    // MKW + day month
    if( data.dob != false){
        const password = data.keyWord + data.day + data.month;
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }

    // MKW + day year
    if( data.dob != false){
        const password = data.keyWord + data.day + data.year;
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }

    // MKW + day month year
    if( data.dob != false){
        const password = data.keyWord + data.day + data.month + data.year;
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }

    // MKW + month day year
    if( data.dob != false){
        const password = data.keyWord + data.month + data.day + data.year;
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }

    // MKW + year day month
    if( data.dob != false){
        const password = data.keyWord + data.year + data.day + data.month;
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
}

module.exports = fourthGeneration;