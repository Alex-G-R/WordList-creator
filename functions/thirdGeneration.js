
function thirdGeneration (data, specialChars){
    const fs = require('fs');

    // mainKeyWord + AdditionalKey
    let passwordA = data.keyWord + data.keyA;
    fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, passwordA + "\n", {flag: "a"}) 
    let passwordB = data.keyWord + data.keyB;
    fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, passwordB + "\n", {flag: "a"}) 
    let passwordC = data.keyWord + data.keyC;
    fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, passwordC + "\n", {flag: "a"}) 


    // MainKeyWord + AdditionalKey a/b/c + 0-9999
    for(let i = 0; i <= 9999; i++){
        const password = data.keyWord + data.keyA + String(i);
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
    for(let i = 0; i <= 9999; i++){
        const password = data.keyWord + data.keyB + String(i);
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
    for(let i = 0; i <= 9999; i++){
        const password = data.keyWord + data.keyC + String(i);
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }

    // MainKeyWord + AdditionalKey a/b/c + special characters
    for(let i = 0; i < specialChars.length; i++){
        const password = data.keyWord + data.keyA + specialChars[i];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
    for(let i = 0; i < specialChars.length; i++){
        const password = data.keyWord + data.keyB + specialChars[i];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
    for(let i = 0; i < specialChars.length; i++){
        const password = data.keyWord + data.keyC + specialChars[i];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }

    // MainKeyWord + AdditionalKey a/b/c + 0-9999 + special characters
    for(let i = 0; i < specialChars.length; i++){
        for(let j = 0; j <= 9999; j++){
            const password = data.keyWord + data.keyA + String(j) + specialChars[i];
            console.log(password);
            fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
        }
    }
    for(let i = 0; i < specialChars.length; i++){
        for(let j = 0; j <= 9999; j++){
            const password = data.keyWord + data.keyB + String(j) + specialChars[i];
            console.log(password);
            fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
        }
    }
    for(let i = 0; i < specialChars.length; i++){
        for(let j = 0; j <= 9999; j++){
            const password = data.keyWord + data.keyC + String(j) + specialChars[i];
            console.log(password);
            fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
        }
    }
}

module.exports = thirdGeneration;