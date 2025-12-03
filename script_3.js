// Data Types

// Numbers
let num = 3;
let num2 = 4.2; // Here there is no concept of like float and integer.
console.log(num + num2);

// Strings
let firstName = "Harsh";
const lastName = 'Bairagi'; // You can also use single quote for strings.
console.log(firstName + " " + lastName); //You can also concatenate two strings.

// Booleans 
let isLoggedIn = true;
console.log(isLoggedIn);
// We know 1 means true and 0 means false
// So in javascript true --> 1 and false --> 0
if(1){
    console.log(true);
}
console.log(isLoggedIn + 10); // The answer of this will be 11.
console.log(isLoggedIn * 10); // The answer of this will be 10.

//NULL
let lastLoginDate = null; //If you dont wanna to put any value then you can use null e.g. the variable will exist there but it will not contain any value.
console.log(lastLoginDate);

//Undefined
let bermudaTriangle = undefined;// Reverse case of null ,when you don't want the thing to exist there then you can use undefined.
console.log(bermudaTriangle);

//Objects
const person = {
    firstName : "Harsh",
    lastName : "Bairagi",
    age : 19,
    religion : "HINDU", // It's not neccessary to put comma to the last key value pair but it is a good practice to use it .
}
console.log(person);
console.log(person.religion);
console.log(person.age);

// string '1' + '1'
//What will happen if one of the operand is string and the other one is number and the operator is plus , 
console.log('1' + 1); //It is printing 11 in the console
//So basically it is concatenating and printing the string as an answer.

//What will happen, if we repeat the same above case, and the only difference here is that the operator is multiplication
console.log("1" * 12);//It is printing 12 in the console
//Printing the number as an answer.

//So ,we can use the above tricks to convert string to number and number to string
// string + number = string
// string * number = number
console.log('a' * 1); //It is printing NaN which stands for Not_A_Number 
//It is giving NaN because a * 1 is not possible.

console.log('a' + 1);// Yes, a + 1 is possible because it will give string as an answer.

// Type of operator
// With the help of "type of operator" we can know the type of the answer
console.log(typeof(123 * 2));
console.log(typeof Harsh);
console.log(typeof "Harsh");
console.log(typeof 34);