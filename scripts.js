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

module.exports= {
    hello,
    add,
    subtract,  
    multiply,
    divide
  };
