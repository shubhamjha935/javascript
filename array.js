const myArr = [0,1,2,3,4,5];
const myHeors = [ "shaktiman" , "naagraj"]
const myArr2 = new Array(0,1,2,3,4);
//console.log(myArr2)
// myArr.push(6);
// console.log(myArr);

// console.log(myArr.pop())
// console.log(myArr)
myArr.unshift(9);

myArr.shift()
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))
const newArr = myArr.join()
console.log(newArr)
console.log(typeof newArr)
//slice splice 
console.log("A",myArr);
const myn1 = (myArr.slice(1,3))
console.log(myn1)
console.log("b",myArr);
const myn2 = (myArr.splice(1,3))
console.log(myn2);
console.log(myArr)

