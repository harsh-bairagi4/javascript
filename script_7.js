// Functions

function sayHello() {
    console.log("Hey Harsh");
}

sayHello(); //Calling the function

function multiply (a, b){
    console.log(a * b);
}

 let a = multiply(10, 4);
console.log("Hey user result is" ,a); //This will give undefined as the answer is not returned ,that's why it is good practice to use return. 

//           arguments
function sum(a, b, c) {
    return a + b - c;
}

let ans = sum(4, 2, 1); // parameters
console.log(ans);

//What if i want a function that can take unlimited no. of arguments ,
function addNumbers() {
    console.log(arguments);
}

addNumbers(1, 2,22, 4, 32, 5); //So, in javascript we have a object called arguments which is used to store all the arguments which are passed in the functions.

function addNumbers_2(){
    let ans = 0;
    for(let i = 0; i < arguments.length; i++){
        ans += arguments[i];
    }
    return ans;
}

let answer = addNumbers_2(23, 22, 54, 65, 11);
console.log(answer);

//Another method by using 'spread operator'
function addNumbers_3(...numbers){
    let ans = 0;
    for (let i = 0; i < numbers.length; i++) {
         ans += numbers[i];
        
    }
    return ans;
}
let answer_2 = addNumbers_3(3, 21, 53, 61, 21);
console.log(answer_2);

//The only difference is that you can give any name to the spread operator whereas it's compulsory to write the word arguments in the first case.

function addNumbers_4(...harsh){
    let ans = 0;
    for (let i = 0; i < harsh.length; i++) {
         ans += harsh[i];
        
    }
    return ans;
}
let answer_3 = addNumbers_4( 14, 2, 5, 22, 1);
console.log(answer_3);

console.log("\n");
//Printing each element in arguments
function addNumbers_5(){
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);  
    }
}
addNumbers_5( 1, 3, 6, 8);
