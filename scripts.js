var number1=0;
var number2=0;
var result=0;
var operation='';
var statusLocal='0';

function hello(){
    return "hello from Script.js";
};

function add() {
    return arguments[0] + arguments[1];
};

function subtract(number1, number2) {
    return number1 - number2;
};
function multiply() {
    return  arguments[0]*arguments[1];
};
function divide() {
    if(arguments[1]==0){
        return "ERROR"
    }
    return  parseInt(arguments[0]/arguments[1]);
};

function operate( operator,number1,number2) {
    let output=0;    
    switch(operator){
        case '+':            
            output=add(number1,number2);
            break;
        case '-':            
            output=subtract(number1,number2);
            break;    
        case '*':
            output=multiply(number1,number2);
            break;    
        case '/':
            output=divide(number2,number1);
            break;    
        default:    
            output= "ERROR";
            break;    
    }

    return  output;    
};

function onButtonClick(element){
        
    const maxNumber=100;
    console.log("id:"+element.textContent);
    let data=element.textContent;
    if(statusLocal=='1' && data!='C'){return;}

    if((data==='*')||(data==='/')||(data==='+')||(data==='-'))
    {
        const resultHolder=document.getElementById("resultStorage");
        number2=parseInt(resultHolder.textContent);
        resultHolder.textContent='0';
        operation=data;
        return 1;
    }
    else {
        if(data==='='){
            const resultHolder=document.getElementById("resultStorage");
            number1=parseInt(resultHolder.textContent);                                 
            result=operate(operation,number1,number2);
            resultHolder.textContent=result;
            statusLocal='1';
            return 1;
        }
        else{
            const resultHolder=document.getElementById("resultStorage");
            if(resultHolder.textContent=='0'){
                resultHolder.textContent='';
            }
            number1=parseInt(resultHolder.textContent)*10;
            
            if(number1+parseInt(element.textContent) >maxNumber ){
                return 0;
            }
            resultHolder.textContent= resultHolder.textContent+element.textContent;
        }
    }
    return 1;

};
function onButtonClear(element){
    
    const maxNumber=100;
    const resultHolder=document.getElementById("resultStorage");
    resultHolder.textContent="0";
    console.log("Clear");
    number1=0;
    number2=0;
    result=0;
    statusLocal='0';
    return 1;
};

/*
export default{
    onButtonClick,
    onButtonClear
}
*/