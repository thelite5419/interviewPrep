function swap(a,b) {
    a = b+a;
    b = a-b;
    a = a-b;
    return [a, b]
}

const swapped = swap(2,3)
console.log('swapped :>> ', swapped);