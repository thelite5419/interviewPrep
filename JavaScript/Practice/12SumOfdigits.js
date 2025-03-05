function sumOfdigit(num){
    let funNum = num; 
    let sum = 0;
    while(funNum != 0){
        console.log('Math.floor(funNum/10) :>> ', Math.floor(funNum%10)); // debug
        sum += Math.floor(funNum%10);
        console.log('sum :>> ', sum); // debug
        funNum = Math.floor(funNum/10);
        console.log('funNum :>> ', funNum); // dubug
    }

    return sum

}

const result = sumOfdigit(12345)
console.log('result :>> ', result); // 15