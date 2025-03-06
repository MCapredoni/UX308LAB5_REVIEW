// This program *converts* *integer** **parameters**

function convertIntegerParameter(integer){
    if(integer % 3 === 0){
    return "Yee";
    }
    if(integer % 7 === 0){
    return "Ha";
    }
    if(integer % 7 === 0 && integer % 3 === 0){
    return "Yee Ha";
    }
    else{
        return "Nada";
    }
      
}  

export {convertIntegerParameter}