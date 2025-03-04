function vowel(str) {
    let count = 0;
    for (let index = 0; index < str.length-1; index++) {
       let char = str[index];
        if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
            count++
        }
    }
    return count
}

const count = vowel("prathamesh")
console.log('count :>> ', count);