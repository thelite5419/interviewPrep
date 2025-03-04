function palindrom(num) {
    let temp1 = num;
    let reversedNum = 0;
    

    while(temp1 != 0){
        let tmp = temp1 % 10; // Extract last digit
        reversedNum = reversedNum * 10 + tmp; // Build reversed number
        temp1 = Math.floor(temp1 / 10); // Remove last digit
    }
}

const pal = palindrom(1235);
if(!pal){
    console.log("palindrome");
}else{
    console.log("not palindrome");
}