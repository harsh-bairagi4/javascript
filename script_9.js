// High Order Functions

function add (a, b){
    return a + b;
}
console.log(add(31, 2));

// Instead of doing the thing like i did above , i can do it like this:

//The function which can accept a function as an argument is called a high-order function.
function sum(a, b, cb) {
    let result = a + b;
    cb(result); //The function which is called is called call-back function.
}

sum(2, 3, (val) => console.log(val));
sum(299, 1, (res) => console.log(res));

//The reason of doing it like this, is that at some point we will run some task which will take some amount of time and to avoid that thing we run call-back function .

//You can even return a function

function sub (a, b, callback){
    let result = a - b;
    callback(result);

    return () => console.log(result);
}

let resultFunction = sub(9, 2 ,() => {});
resultFunction();

// Here , in the above case ,we have made a function named sub which will take three things two variables and a function which will be a callback function .So the answer of the two variables subtraction is stored in the result variable and as we have called the callback function in the third line of the sub function with result as an argument, but did not passed any value to the callback function in the sub function ,so it will not do anything, but the thing or the change we have did here is that , we have returned a function from the sub function as it is returning a arrow-function which is just printing result.
//Note: Here the returned function is an arrow function ,you can even make a simple function too like  ' function() { } '
// When we called the sub function at line number 30, and stored it's value in the resultFunction variable at that time the sub function is returning a function as an value ,so the resultFunction variable is no more a variable it will also become a function as it is storing the value of a function now.
//So as we know now resultFunction has become a function, so we just called it at line number 31, and it will print the thing that sub function is returning.