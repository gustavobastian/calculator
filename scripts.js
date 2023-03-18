

const hello = function hello(){
    return "hello from Script.js";
};
const add = function() {
    return arguments[0] + arguments[1];
};
const subtract = function(number1, number2) {
    return number1 - number2;
};
const multiply = function() {
    return  arguments[0]*arguments[1];
};
const divide = function() {
    if(arguments[1]==0){
        return "ERROR"
    }
    return  arguments[0]/arguments[1];
};

const operate = function( operator,number1,number2) {
    let output=0;
    switch(operator){
        case '+':            
            output=sum(number1,number2);
            break;
        case '-':            
            output=substract(number1,number2);
            break;    
        case '*':
            output=multiply(number1,number2);
            break;    
        case '/':
            output=divide(number1,number2);
            break;    
        default:    
            output= "ERROR";
            break;    
    }

    return  output;    
};

module.exports= {
    hello,
    add,
    subtract,  
    multiply,
    divide,
    operate
  };
