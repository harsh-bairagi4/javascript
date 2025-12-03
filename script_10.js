//Arrays
const students = ["Piyush", "Jhon", "Jane", "Priya"];
console.log(students);
console.log(students.length);
console.log(students[2]);
console.log(students[1]);
console.log(students[0]);
students[0] = "Harsh";
console.log(students[0]);

students.push("Alexa");
console.log(students);

//The advantage of arrays in javascript is that you can store any data-type in arrays
const newArray = [2, true, "Ansh", "😒"]; //Win + . : Press the Win key and full stop (.) for emojis
console.log(newArray);

//You can even push objects in an array.
newArray.push(
    { 
    name: "Shubham",
     age: 23 ,
    }
    );
console.log(newArray);

//You can even find the index of any value
console.log(newArray.indexOf("Ansh")); //if this value doesn't exist in the array it will return -1

//pop method is used to delete the thing.

students.pop();
console.log(students);
students.reverse(); //Used to reverse the array
console.log(students);
