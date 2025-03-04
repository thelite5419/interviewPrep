function primeNum(num) {
    if (num < 2) return false; 

    for (let index = 2; index <= Math.sqrt(num); index++) {
        if (num % index === 0) { 
            return false; 
        }
    }
    return true; 
}

const flag = primeNum(10);

if (flag) {
    console.log("The number is prime");
} else {
    console.log("The number is not prime");
}
