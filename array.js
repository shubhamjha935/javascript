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
// const newArr = myArr.join()
// console.log(newArr)
// console.log(typeof newArr)
// //slice splice 
// console.log("A",myArr);
// const myn1 = (myArr.slice(1,3))
// console.log(myn1)
// console.log("b",myArr);
// const myn2 = (myArr.splice(1,3))
// console.log(myn2);
// console.log(myArr)

const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros =["superman","flash","batman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros[3][1])
//const all_heros = marvel_heros.concat(dc_heros)
//console.log(marvel_heros)
//console.log(all_heros)
//const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros);
//const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] 
//const real_another_array = another_array.flat(Infinity);
//console.log(real_another_array);
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"}))
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
