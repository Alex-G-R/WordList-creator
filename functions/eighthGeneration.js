function eighthGeneration (data, popularPhrazes, specialChars){
    const fs = require('fs');

    for(let i = 0; i < popularPhrazes.length; i++){
        const password = data.keyWord + popularPhrazes[i];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }

    // special chars
    for(let i = 0; i < popularPhrazes.length; i++){
        const password = data.keyWord + popularPhrazes[i] + specialChars[0];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
    for(let i = 0; i < popularPhrazes.length; i++){
        const password = data.keyWord + popularPhrazes[i] + specialChars[1];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
    for(let i = 0; i < popularPhrazes.length; i++){
        const password = data.keyWord + popularPhrazes[i] + specialChars[2];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
    for(let i = 0; i < popularPhrazes.length; i++){
        const password = data.keyWord + popularPhrazes[i] + specialChars[3];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
    for(let i = 0; i < popularPhrazes.length; i++){
        const password = data.keyWord + popularPhrazes[i] + specialChars[4];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
    for(let i = 0; i < popularPhrazes.length; i++){
        const password = data.keyWord + popularPhrazes[i] + specialChars[5];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
    for(let i = 0; i < popularPhrazes.length; i++){
        const password = data.keyWord + popularPhrazes[i] + specialChars[6];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
    for(let i = 0; i < popularPhrazes.length; i++){
        const password = data.keyWord + popularPhrazes[i] + specialChars[7];
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
}

module.exports = eighthGeneration;