function largestNumber(a,b,c) {
    if (a>b) {
        if (a>c) {
            return a;
        }
    }
    if (b>a){
        if (b>c){
            return b;
        }
    }
    if (c>a){
        if (c>b){
            return c;
        }
    }
}

const numbers = largestNumber(1,5,13)
console.log('largest number is :>> ', numbers);