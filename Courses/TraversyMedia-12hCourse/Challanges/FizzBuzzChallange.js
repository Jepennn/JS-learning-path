
//Challange 6, fizzbuzz challange.

for(let i = 0; i <= 100; i++){
    
    if((i % 3 === 0) && (i % 5 === 0)){
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0){
        console.log("fizz");
    }
    else if(i % 5 === 0){
        console.log("bizz");
    }
    else{
        console.log(i);
    }
}