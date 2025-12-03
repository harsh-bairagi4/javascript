//Loops --> To do a repetative work we use loops.

//For Loops --> When we know the number of iterations for the task.
for(let i = 0; i<= 5; i++){
    console.log("Harsh " + i);
}

console.log("\n");
//While loop --> When you don't know the number of iterations for the task.

let i = 10
while(i >= 0) {
  console.log( i + " Steps remaining");
  i--;
}
console.log("Finally you reached your location");

console.log("\n");
//Another Example
let ip = 0;
let house = 20;

while(ip != house) {
    ip = ip + 1;
    console.log("Step Taken " + ip);
}

console.log("\n");
//Do While Loop --> Will run the code atleast once then it will check the condition.
do{
   ip = ip + 1;
   console.log('Step Taken' + ip);
}while(ip <= house);

console.log("\n");
//Guess the input

let number = 40;

let guess = 0;

do{
    guess = parseInt(prompt("Guess a number"));
    if(guess==number){
        alert("Winner");
        break;
    }
   
}while (guess != 0)

//What if i try the above code in while-loop
while(guess != 0){
    guess = parseInt(prompt("Guess a number"));
    if(guess==number){
        alert("Winner");
        break;
    }
}
//The whole above code will not run as the value of guess is initially zero ,so how 'it is not equal to zero' condition will be valid.