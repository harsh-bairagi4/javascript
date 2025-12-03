// Variables

// DataType varName = value;  Strongly Typed Language
// JS -->  Loosely Typed Lan

// Var
var num = 22;// Javascript will automatically consider it as an number.

 console.log(num);

 // The scope of var is global
 if (true){
    var age = 93;

 }
 console.log(age);

 {
    var a = 20;
 }
 console.log(a);
 
 //Const
 //Scope of const is also local
 //The value of const can not be changed once it is assigned ,it cannot be reassigned.
 
 const age_2 = 32;
 
 console.log(age_2 + 12);

 //Let
 let b = 32;
 console.log(b);
 
 // Scope of let is local
 
 if(true){
    let c = 19;
 }
 console.log(c); // It will not be printed as it is local 

