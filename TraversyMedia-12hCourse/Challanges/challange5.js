
//challange 5 functions


//Step 1
const getCelcius = (f) => (f -32) * 5 / 9;

console.log(`The temperatur is ${getCelcius(32)} \xB0C`);


//Step 2

const nums = [1,2,3,4,5]

const minMax = (arr) => {
    return{
        min: `${Math.min(...arr)}`,
        max: `${Math.max(...arr)}`
    }
}
console.log(minMax(nums));

//Step 3 IFFE function
(function(lenght, width){
    console.log(lenght*width);
})(5,10);