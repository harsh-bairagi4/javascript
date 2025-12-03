//Logical Operators
//AND --> All the conditions needs to be true.

const age = 20;
const gender = 'male';

if(age >= 18 && gender == 'male'){
    console.log("You are allowed");
}
else{
    console.log("You are not allowed");
}

//OR --> Atleast one condition needs to be true

const age_2 = 20;
const gender_2 = "female";

// Note: == (double equals to) returns boolean value.

if(age >= 18 || gender == "male"){
    console.log("You can sit in the exam");
}

//NOT --> It says not equals to and denoted by != 

const number = 5;
 if(number % 2 != 0){
   console.log("Number is odd");
 }
 else{
    console.log("Number is even");
 }

 //You can put not operator over the whole expression also,

 const number_2 = 4;
 if (!(number_2 % 2 == 0)){
    console.log("Number is odd");
 }
 else {
    console.log("Number is even");
 }
