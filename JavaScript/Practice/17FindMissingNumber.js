let list = [1,2,3,4,5,7,8,10]
list.sort((a,b)=> a-b);
console.log(list);

let lastElem = list.length-1
let j = 0;
for (let i = list[0]; i <= list[lastElem]; i++) {
    if (list[j] !== i) {
        console.log(`The Missing Element is ${i}`);
    } else {
        j++; // Move index forward only if the element matches
    }
}