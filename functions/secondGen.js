function secondGeneration (data, specialChars){
    const fs = require('fs');

    for(let i = 0; i <= 9999; i++){
        const password = data.keyWord + String(i) + specialChars[0];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
    for(let i = 0; i <= 9999; i++){
        const password = data.keyWord + String(i) + specialChars[1];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
    for(let i = 0; i <= 9999; i++){
        const password = data.keyWord + String(i) + specialChars[2];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
    for(let i = 0; i <= 9999; i++){
        const password = data.keyWord + String(i) + specialChars[3];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
    for(let i = 0; i <= 9999; i++){
        const password = data.keyWord + String(i) + specialChars[4];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
    for(let i = 0; i <= 9999; i++){
        const password = data.keyWord + String(i) + specialChars[5];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
    for(let i = 0; i <= 9999; i++){
        const password = data.keyWord + String(i) + specialChars[6];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
    for(let i = 0; i <= 9999; i++){
        const password = data.keyWord + String(i) + specialChars[7];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
}

module.exports = secondGeneration;