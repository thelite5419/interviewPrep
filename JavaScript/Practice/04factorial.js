function factorial(num) {
    if(num === 1 || num === 0) {
        return 1;
    }
    return num*factorial(num-1)
}

const result = factorial(5);
console.log(result)


// without recursion 

function withoutRecursion(num) {
    let factorial = 1;
    for( let i = 1; i <= num; i++) {
        factorial *= i;
    }
}

const result1 = factorial(5);
console.log(result1)