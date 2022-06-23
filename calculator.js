const operSymbol = prompt("Select an operator from the ones below to perform the calculation:" + "\n" + "\n" +"Operators: +,  -,  *,  or / : ");  
  
const fNumber = parseFloat(prompt ('Enter the First Number: '));  
const sNumber = parseFloat(prompt ('Enter the Second Number: '));  
  
let result;  
  
if (operSymbol == '+') {  
    result = fNumber + sNumber;  
}  
else if (operSymbol == '-') { 
    result = fNumber - sNumber;  
}  
else if (operSymbol == '*') { 
    result = fNumber * sNumber;  
}  
else {  
    result = fNumber / sNumber;
}  
   
window.alert("The Result is:  " + result);  
 