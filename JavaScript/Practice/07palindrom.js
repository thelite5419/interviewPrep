function palindrom(str) {
    count = 0; 

    for (let index = str.length -1 ; index >= 0 ; index--) {
        console.log("count",str[count]);
        console.log("index",str[index])
       if(str[index] !== str[count]) {
        console.log("if executed");
        
        return true; 
       }
       count++
    }
    return false;
}

const pal = palindrom('154');
if(!pal){
    console.log("palindrome");
}else{
    console.log("not palindrome");
}