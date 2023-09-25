
function fifthGeneration (data, specialChars){
    const fs = require('fs');

    // MKW + year month day
    if( data.dob != false){
        for(let i = 0; i < specialChars.length; i++){

            const password = data.keyWord + data.year + data.month + data.day + specialChars[i];
            console.log(password);
            fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})

        }
    }

    // MKW + year month
    if( data.dob != false){
        for(let i = 0; i < specialChars.length; i++){

            const password = data.keyWord + data.year + data.month + specialChars[i];
            console.log(password);
            fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})

        }
    }

    // MKW + year
    if( data.dob != false){
        for(let i = 0; i < specialChars.length; i++){

            const password = data.keyWord + data.year + specialChars[i];
            console.log(password);
            fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})

        }
    }

    // MKW + month day
    if( data.dob != false){
        for(let i = 0; i < specialChars.length; i++){

            const password = data.keyWord + data.month + data.day + specialChars[i];
            console.log(password);
            fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})

        }
    }

    // MKW + month
    if( data.dob != false){
        for(let i = 0; i < specialChars.length; i++){

            const password = data.keyWord + data.month + specialChars[i];
            console.log(password);
            fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})

        }
    }

    // MKW + day
    if( data.dob != false){
        for(let i = 0; i < specialChars.length; i++){

            const password = data.keyWord + data.day + specialChars[i];
            console.log(password);
            fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})

        }
    }


    // MKW + year day
    if( data.dob != false){
        for(let i = 0; i < specialChars.length; i++){

            const password = data.keyWord + data.year + data.day + specialChars[i];
            console.log(password);
            fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})

        }
    }

    // MKW + day month
    if( data.dob != false){
        for(let i = 0; i < specialChars.length; i++){

            const password = data.keyWord + data.day + data.month + specialChars[i];
            console.log(password);
            fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})

        }
    }

    // MKW + day year
    if( data.dob != false){
        for(let i = 0; i < specialChars.length; i++){

            const password = data.keyWord + data.day + data.year + specialChars[i];
            console.log(password);
            fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})

        }
    }

    // MKW + day month year
    if( data.dob != false){
        for(let i = 0; i < specialChars.length; i++){

            const password = data.keyWord + data.day + data.month + data.year + specialChars[i];
            console.log(password);
            fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})

        }
    }

    // MKW + month day year
    if( data.dob != false){
        for(let i = 0; i < specialChars.length; i++){

            const password = data.keyWord + data.month + data.day + data.year + specialChars[i];
            console.log(password);
            fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})

        }
    }

    // MKW + year day month
    if( data.dob != false){
        for(let i = 0; i < specialChars.length; i++){

            const password = data.keyWord + data.year + data.day + data.month + specialChars[i];
            console.log(password);
            fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})

        }
    }
    
}

module.exports = fifthGeneration;