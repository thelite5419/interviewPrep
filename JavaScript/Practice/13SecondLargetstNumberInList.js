let Number = [45,25,86,45,25,65]
Number.sort();
console.log('Number :>> ', Number);
let LargestElem = 0;
let SecondLargest = 0;
for (let index = 0; index < Number.length; index++) {
    if(LargestElem < Number[index]){
        SecondLargest = LargestElem;
        LargestElem = Number[index];
        console.log('LargestElem :>> ', LargestElem);
    }
}

console.log(`the largest Element is ${LargestElem}`);
console.log(`the second largest Element is ${SecondLargest}`);