
function ninethGeneration (data, specialChars){
    const fs = require('fs');

    if( data.keyA != false ) {
        for(let i = 0; i < specialChars.length; i++){
            const password = data.keyWord + data.keyA + specialChars[i];
            console.log(password);
            fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
        }
    }
    if( data.keyB != false ) {
        for(let i = 0; i < specialChars.length; i++){
            const password = data.keyWord + data.keyB + specialChars[i];
            console.log(password);
            fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
        }
    }
    if( data.keyC != false ) {
        for(let i = 0; i < specialChars.length; i++){
            const password = data.keyWord + data.keyC + specialChars[i];
            console.log(password);
            fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
        }
    }

}

module.exports = ninethGeneration;