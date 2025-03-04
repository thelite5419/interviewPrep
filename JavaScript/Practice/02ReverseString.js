function reveserStr(str) {
    let reverse = "";
    for (let index = str.length-1; index >= 0; index--) {
        reverse += str[index]
    }
    return reverse
}

const str = reveserStr("Prathamesh");
console.log('str :>> ', str);