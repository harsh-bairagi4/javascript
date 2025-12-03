const input = document.getElementById("number-input");
const result = document.getElementById("result");

function handleClickButton(el){
    const exp = `${input.value}${el.innerText}`;
    input.value = exp;
    if(["+" , "-" , "*" , "/"].includes(el.innerText)) return;
    result.value = eval(exp); //This function helps to evaluate any value.
}
// For input type tage use .value not target and other stuff

function reset() {
    input.value = '';
    result.value = '';
}
