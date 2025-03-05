function reverseSentence(str) {
    let reversedSentence = "";
    let word = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        let ch = str[i];

        if (ch !== " ") {
            word = ch + word;
        } else if (word !== "") {
            if (reversedSentence === "") {
                reversedSentence += word;  
            } else {
                reversedSentence += " " + word; 
            }
            word = ""; 
        }
    }


    if (word !== "") {
        reversedSentence += (reversedSentence === "" ? "" : " ") + word;
    }

    return reversedSentence;
}

const input = "hey I am prathamesh";
const reversed = reverseSentence(input);
console.log("Reversed Sentence:", reversed);
