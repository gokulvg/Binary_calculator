const addDigit = (event) => {
  result.innerHTML += event.target.innerHTML;
};
const clearFn = () => {
  result.innerHTML = "";
};
// const actionFn = (event) => {
 
//   let action = event.target.innerHTML;
//   console.log(action)
// };

const evaluateFn = ( )=>{
    let expression = result.innerHTML;
    
    if(expression.includes("/")){
        result.innerHTML=Math.floor(eval(expression))
        return
    }
    const pattern = /\d+/g
   expression= expression.replace(pattern,(match)=>{
       return parseInt(match,2)
   });
   
   
   result.innerHTML = eval(expression).toString(2)
    console.log(expression)
}
let result = document.getElementById("res");
const btn0 = document
  .getElementById("btn0")
  .addEventListener("click", addDigit);
const btn1 = document
  .getElementById("btn1")
  .addEventListener("click", addDigit);
const btnClr = document
  .getElementById("btnClr")
  .addEventListener("click", clearFn);
const btnEql = document.getElementById("btnEql").addEventListener("click",evaluateFn);
const btnSum = document
  .getElementById("btnSum")
  .addEventListener("click",addDigit);
const btnSub = document
  .getElementById("btnSub")
  .addEventListener("click",addDigit);
const btnMul = document
  .getElementById("btnMul")
  .addEventListener("click", addDigit);
const btnDiv = document.getElementById("btnDiv").addEventListener("click",addDigit);


