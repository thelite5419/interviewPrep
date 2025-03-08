// gauri = 5
//gau@r$i = 5 

function characterCount(str) {
    count = 0;
    for (let index = 0; index <= str.length-1; index++) {
        
       let ch = str[index];
        if (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z') {
        //console.log(ch);
        
        count++
       }
    }
    console.log('count :>> ', count);
}

characterCount("Pratha+)'mesh-#")
characterCount("gau@r$i")