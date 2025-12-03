// A closure is the combination of a function bundled together (enclosed) with references to its surronding state (the lexical environment ).In other words, a closure gives you access to an outer function's scope from an inner function.

// function main() {
//     const name = "Harsh Bairagi";

//     function sayMyName() {
//         // this sayMyName() is the inner function , a closure
//         console.log(name);
//     }
//     sayMyName();
// }

// main();

//Instead of calling the function like above i can call it with a return value

function main() {
    const name = "Harsh Bairagi";

    function sayMyName() {
        console.log(name);
    }
   return sayMyName;
}

let fn = main();

fn();
fn();

//Let give an argument
function main2 (name) {
    function sayMyName() {
        console.log(name);
    }
    return sayMyName;
}

let consoleFunction = main2("Dinesh Bairagi");
consoleFunction();
consoleFunction();
console.log(consoleFunction);

//Example of application
console.log("\n");

function adder(num){
    function add(b) {
        console.log(num + b);
    }
    return add;
}

const addTo5 = adder(5);

addTo5(2);
addTo5(10);

const addTo10 = adder(10);

addTo10(20);
addTo10(3);

//Another example of application

const myName = document.getElementById("my-name");
const btn = document.getElementById("my-btn");

function makeTextSizer(size) {
    function changeSize() {
        myName.style.fontSize = `${size}px`;
    }
    return changeSize;
}

const size12 = makeTextSizer(12);
const size20 = makeTextSizer(20);
const size15 = makeTextSizer(15);
const size75 = makeTextSizer(75);

btn.addEventListener("click" , size75);

//You can even make a counter
console.log("\n");

function makeCounter() {
    let count = 1;
    function increment(){
        console.log(count++);
    }
    return increment;
}

const counter = makeCounter();
counter();
counter();
counter();
counter();
counter();

