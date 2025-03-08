// WAP to return the values from if the index from start and index from last matches 

let arr = [1, 2, 3, 4, 5, 7, 8, 9, 2, 80, 10, 12, 15];
let startingIndex = 0;
let lastIndex = 0;


for (let index = 0; index < arr.length; index++) {
   for (let j = index + 1; j < arr.length; j++) {
    console.log('arr[index] :>> ', arr[index]);
    console.log('arr[j] :>> ', arr[j]);
        if(arr[index] === arr[j]){
           console.log("if true");
           console.log('arr[index] :>> ', arr[index]);
           console.log('arr[j] :>> ', arr[j]);
           startingIndex = index;
           lastIndex = j;
           break;
        }
   }
}

console.log('startingIndex :>> ', startingIndex);
console.log('lastIndex :>> ', lastIndex);

for (let index = startingIndex+1; index < lastIndex; index++) {
   console.log(arr[index]); 
}