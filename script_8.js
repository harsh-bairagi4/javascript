// Arrow Functions 

//1. Syntax
//  const/let/var function_name = (Arguments) => {Body};

const sayHello = () => {
    console.log("Harsh Bairagi");
}

const add = (a, b) => {
    return a + b;
}

//You can also write the above code in shortform as :
const add_2 = (a, b) => a + b;

sayHello();
console.log(add(2,2));
console.log(add_2(21,2));

//2. Arguments keyword
//You cannot use arguments keyword in the arrow functions

// const answer = () => {
//     console.log(arguments);
// }
// answer(22, 43, 2, 4);

//So instead of using arguments keyword in arrow function you can use spread operator .
const answer_2 = (...nums) => {
    console.log(nums);
}
answer_2(22, 43, 2, 4);

//3. Hoisting

sayHey(); //It has been called first

//And defined later
function sayHey() {
    console.log("Hey there");
}
//Then also it ran ,because JavaScript already keeps the function in memory, so it doesn't matter if you define the function later or first.

//But the above thing doesn't works in the arrow function .

//So basically hoisting is available in normal function but not in arrow functions.

//4. this keyword

const obj = {
    name: "Harsh",
    fathername : "Dinesh Bairagi",
    value: 30,
    normalFuntion : function () {
        console.log("Value is " + this.value); // It is printing value is 30.
    },

}
console.log(obj)
obj.normalFuntion(); // Called normalFuntion from the object 

const obj_2 = {
    value : 20,
    myFunction : () => {
        console.log("Value is " + this.value);// It is printing value is undefined.
    },
};

obj_2.myFunction();

//The this keyword is one of the most confusing aspects of the JavaScript language. It is used to refer to the current object context, and its value can change depending on how the function is called.

// So the basic difference in both the above cases is that ,
// In normal function this was pointing to the caller that is the whole object,whereas in arrow function this keyword is pointing to the whole window of the browser.