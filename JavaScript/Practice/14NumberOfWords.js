let string = " hello i  am prathamesh"
let words = string.trim().split(" ")
console.log('words :>> ', words.length);

// without predefiened methods 
count = 1
for (let index = 0; index < string.length; index++) {
   //Debug::> console.log('string.charAt(index) :>> ', string.charAt(index));
   if(string.charAt(index)== " " && string.charAt(index+1) != " "){
    console.log('space found at index :>> ', index); //debug
    count++ 
   }
}

console.log(`Total number of words in the string is ${count}`);
