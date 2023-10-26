let Id=33;
let name1 ="daniyal"
let isLoggedIn = 1


let idToString=String(Id)
let stringToNum = Number(name1)
let NumToBoolean = Boolean(isLoggedIn)


// number to string 
 console.log(idToString)
 console.log(typeof idToString)

// string to number 
console.log(stringToNum)                 // NaN Not a Number 
console.log(typeof stringToNum)         // but data type is number 

// number to boolean 
console.log(NumToBoolean)
console.log(typeof NumToBoolean)

// ++++++++++++++++++++++++++++++++++++++++operation ++++++++++++++++++++++++++++
let str1="hello"
let str2 = " daniyal"
let str3 = str1 + str2
console.log(str3)

console.log(1+2+"3") // output will be 33 (1+2)+"3"=3+"3"="33"=33
console.log("1"+2+3)  // output will be 123  if first is string then all are consider as string

console.log(true)  // output will be true
console.log(+true) // output will be 1