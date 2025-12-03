const students = ["Piyush" ,"Jhon" ,"Jane", "Priya"];

function print(n) {
    console.log(n);
}
students.forEach(print);

//There is another way to do so
console.log("\n");
students.forEach((val) => {console.log(val)})

//There is similar function like for-each named as .map
console.log("\n");
students.map((val) => console.log(val));

//The basic difference in the for-each and .map function is that for-each function does not return any value whereas the .map function return's a value.
//Example
const numbers = [1, 2, 3, 4, 5, 6, 7];
function double(n) {
    return n*2;

} 

let newArr = numbers.forEach(double);
console.log(newArr);

//Here you will see that the answer in the console will be undefined as foreach doesn't return anything.

let nwArr = numbers.map(double);
console.log(nwArr);

//Now you will see that you will be getting a new array in the console as .map returns a new array.

//.find function
let ans = numbers.find((num) => num === 4);
console.log(ans);
//The above thing will return 4 ,as 4 is present in the array, the .find function will take a callback function and we have passed a callback function there and the task of the function is to take a num value as an argument and return the value if num is equal to the given value as (num === 4).

//there is another thing like .find e.g .findIndex which return the index value of the number.

let answ = numbers.findIndex(val => val == 3);
console.log(answ);
//To access values you can write like:
console.log(numbers[answ]);

// .includes which return just a boolean value ,checks whether the value exist or not.

let value = numbers.includes(3);
console.log(value);

// .filter function which help to filter the elements according to our requirement.

const newAnswer = numbers.filter((val) => val % 2 == 0);
console.log(newAnswer);

//.slice function which is used to break out any element from the arrays. 
//It takes a start index and a end index ,it will not include the end index value.
//If you don't give the start index value it will start from zeroth index.

const newAns = numbers.slice(1 , 5);
console.log(newAns);

//.splice function deletes the element from the original array and stores it in itself.
const numbers_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = numbers_2.splice(1, 5);//Here the elements from index 1st to 5th will be deleted from the original array, and the deleted elements will be stored in the newArray variable.

console.log(newArray);
console.log(numbers_2);

const names = "Harsh Dinesh Bairagi";
console.log(names);
let answer = names.split(" ");
console.log(answer);
let size = answer.length;
console.log(size);



