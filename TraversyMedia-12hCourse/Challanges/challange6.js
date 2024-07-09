
//challange 6 controll flow. (if&else och switch statments)

const calculator = (num1, num2, op) => {

    switch(op){
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        case "/":
            console.log(num1 / num2);
            break
        default:
            console.log("Not a valid operator");
            break
        };
    };


    calculator(5,2, "/");