function rev(params) {
    let number = params;
    let reversed = 0;
    while(number != 0){
        let temp = Math.floor(number%10);
        console.log('temp :>> ', temp);
        reversed = reversed *10 + temp
        console.log('reversed :>> ', reversed);
        number = Math.floor(number/10);
        console.log('number :>> ', number);
    }
    return reversed
}

const res = rev(12345);
console.log('res :>> ', res);