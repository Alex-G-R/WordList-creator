
function sixthGeneration (data, specialChars){
    const fs = require('fs');

    // MKW + AK(A/B/C) + year month day
    if( data.dob != false){
        if( data.keyA != false){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyA + data.year + data.month + data.day + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyB != false){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyB + data.year + data.month + data.day + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyC != false){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyC + data.year + data.month + data.day + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
    }

    // MKW + AK(A/B/C) + year month
    if( data.dob != false){
        if( data.keyA != false ){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyA + data.year + data.month + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyB != false ){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyB + data.year + data.month + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyC != false ){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyC + data.year + data.month + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
    }

    // MKW + AK(A/B/C) + year
    if( data.dob != false){
        if( data.keyA != false ) {
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyA + data.year + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyB != false ) {
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyB + data.year + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyC != false ) {
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyC + data.year + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
    }

    // MKW + AK(A/B/C) + month day
    if( data.dob != false){
        if( data.keyA != false){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyA + data.month + data.day + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyB != false){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyB + data.month + data.day + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyC != false){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyC + data.month + data.day + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
    }

    // MKW + AK(A/B/C) + month
    if( data.dob != false){
        if( data.keyA != false ){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyA + data.month + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyB != false ){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyB + data.month + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyC != false ){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyC + data.month + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        
    }

    // MKW + AK(A/B/C) + day
    if( data.dob != false){
        if( data.keyA != false ) {
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyA + data.day + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }  
        if( data.keyB != false ) {
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyB + data.day + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }  
        if( data.keyC != false ) {
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyC + data.day + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }  
    }


    // MKW + Ak(A/B/C) + year day
    if( data.dob != false){
        if( data.keyA != false ){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyA + data.year + data.day + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyB != false ){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyB + data.year + data.day + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyC != false ){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyC + data.year + data.day + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
    }

    // MKW + AK(a/b/c) + day month
    if( data.dob != false){
        if( data.keyA != false ) {
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyA + data.day + data.month + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyB != false ) {
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyB + data.day + data.month + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyC != false ) {
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyC + data.day + data.month + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
    }

    // MKW + AK(a/b/c) + day year
    if( data.dob != false){
        if( data.keyA != false) {
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyA + data.day + data.year + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyB != false) {
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyB + data.day + data.year + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyC != false) {
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyC + data.day + data.year + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
    }

    // MKW + AK(a/b/c) + day month year
    if( data.dob != false){
        if( data.keyA != false ){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyA + data.day + data.month + data.year + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyB != false ){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyB + data.day + data.month + data.year + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyC != false ){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyC + data.day + data.month + data.year + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
    }

    // MKW + AK(a/b/c) + month day year
    if( data.dob != false){
        if( data.keyA != false ){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyA + data.month + data.day + data.year + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyB != false ){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyB + data.month + data.day + data.year + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyC != false ){
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyC + data.month + data.day + data.year + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
    }

    // MKW + AK(a/b/c) + year day month
    if( data.dob != false){
        if( data.keyA != false ) {
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyA + data.year + data.day + data.month + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyB != false ) {
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyB + data.year + data.day + data.month + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
        if( data.keyC != false ) {
            for(let i = 0; i < specialChars.length; i++){

                const password = data.keyWord + data.keyC + data.year + data.day + data.month + specialChars[i];
                console.log(password);
                fs.writeFileSync(`./wordLists/${data.keyWord}`+"List"+`.txt`, password + "\n", {flag: "a"})
    
            }
        }
    }
    
}

module.exports = sixthGeneration;