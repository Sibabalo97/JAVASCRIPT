function reverseString(s){
    return s.split("").reverse().join("");
}
console.log(reverseString("sibabalo"));//"babasilo"

// reverse string - for loop
function reverseString(str) {
    let arr1 = []
    let newStr = str.split("")
        for(let i = newStr.length -1; i >= 0; i--){
           arr1.shift(newStr[i]) 
        }
    return arr1.join("")
}
console.log(reverseString("Maqiyane"));