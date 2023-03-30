var number1=0;
var number2=0;
var result=0;
var operation='';
var statusLocal='0';
let output='';

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
    console.log("num:"+arguments[1])
    console.log("den:"+arguments[0])
    if(arguments[0]==0){
        window.alert("You are trying to divide by 0!");
        return arguments[1];
    }
    return  parseInt(arguments[1]/arguments[0]);
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
        
    const maxNumber=1000000;
    console.log("id:"+element.textContent);
    let data=element.textContent;

    const resultHolder=document.getElementById("resultStorage");
    const inputHolder=document.getElementById("inputStorage");
    output=  inputHolder.textContent;       
    
    if((data==='*')||(data==='/')||(data==='+')||(data==='-'))
    {
        number1=parseInt(inputHolder.textContent);  
        number2=(resultHolder.textContent);  
        

        let operationLocal=number2[(number2.length)-1];
        console.log("operationlocal:"+operationLocal);
        if((operationLocal==='*')||(operationLocal==='/')||(operationLocal==='+')||(operationLocal==='-')){
            number2=parseInt((resultHolder.textContent).slice(0,-1));
            number1=parseInt(inputHolder.textContent);    
            let resultLocal=parseInt(operate(operationLocal, number2, number1));              
            resultHolder.textContent=resultLocal+data;
            inputHolder.textContent="0";
        }
        else{            
            if(output!=0){
                resultHolder.textContent=output+data;
                inputHolder.textContent='0';
                }else {
                    resultHolder.textContent=data;
                    inputHolder.textContent='0';
                }  
        }    
        return 1;
    }
    else {
        if(data==='='){  
            number2=(resultHolder.textContent);    
            console.log("number2:",number2)
            if(number2==0){
                return 1;
            }                    
            let operationLocal=number2[(number2.length)-1]; 
            if(resultHolder.textContent.length>2){
                number2=parseInt((resultHolder.textContent).slice(0,-1));
            }
            else{
                number2=parseInt((resultHolder.textContent));
            }
            number1=parseInt(inputHolder.textContent);
               
            let resultLocal=parseInt(operate(operationLocal, number2, number1));              
            resultHolder.textContent=resultLocal;
            inputHolder.textContent=resultLocal;
            return 1;
        }
        else{
            const resultHolder=document.getElementById("resultStorage");
            
             

            if(inputHolder.textContent=='0'){
                inputHolder.textContent='';
            }
            number1=parseInt(inputHolder.textContent)*10;
            
            if(number1+parseInt(element.textContent) >maxNumber ){
                return 0;
            }
            inputHolder.textContent= inputHolder.textContent+element.textContent;
        }
    }
    return 1;

};
function onButtonClear(element){
    
    const maxNumber=100;
    const resultHolder=document.getElementById("resultStorage");
    resultHolder.textContent="0";
    const inputHolder=document.getElementById("inputStorage");
    inputHolder.textContent="0";
    console.log("Clear");
    number1=0;
    number2=0;
    result=0;
    statusLocal='0';
    return 1;
};
function onButtonBackspace(element){    
    const inputHolder=document.getElementById("inputStorage");
    if((isNaN(inputHolder.textContent)!=true)&&(parseInt(inputHolder.textContent)>10)){
        inputHolder.textContent=inputHolder.textContent.slice(0,-1);
        }    
    return 1;
};
