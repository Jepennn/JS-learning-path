
//Challange 3 Arrays

// A)
const arr = [1,2,3,4,5];

arr.push(6)
arr.unshift(0)
arr.reverse()

console.log(arr); // Prints [6,5,4,3,2,1,0]

// B)

const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];

const arr3 = [...arr1.slice(0,4), ...arr2] ;

console.log(arr3);



