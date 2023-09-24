
function firstGeneration (data){
    const fs = require('fs');

    for(let i = 0; i <= 9999; i++){
        const password = data.keyWord + String(i);
        console.log(password);
        fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"}) 
    }
}

module.exports = firstGeneration;