alert("hi");

const age = 90;
if (age >= 80) {
    console.log("Yes ,you are an adult");
}
else if (age >= 18) {
    console.log("Yes ,you can vote")
}
else {
    console.log("No, you can't vote");
}

//Ternary operator in JS
const age1 = 12;
age1 >= 18 ? console.log("Yes") : console.log("No");

//Switch-Case Statements

const option = "c";

switch (option) {
    case 'a': {
        console.log("Apple")
        break;
    }
    case 'b': {
        console.log("Mango")
        break;
    }
    case 'c': {
        console.log("Orange")
        break;
    }
    default: {
        console.log("None of the above")
    }

}

let a = 30;
let opt = '+';
let b = 40;

switch(opt){
    case '+': console.log(a + b);
    break;
    case '-': console.log(b - a);
    break;
    case '*': console.log(a*b);
    break;
    default: console.log('IDK');}