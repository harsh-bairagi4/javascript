//this is currying

function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(add(2)(4)(6));

//With modern JS the short code of the above code can be
const add2 = (a) => (b) => (c) => a + b + c;
console.log(add2(4)(5)(8));


//Application example of currying

function sendAutoEmail(to) {
    return function (subject) {
        return function (body) {
            console.log(`Sending Email to ${to} with subject ${subject}: ${body}`);
        };
    };
}

let step1 = sendAutoEmail('hars@gmail.com');
let step2 = step1("New Order Confirmation");
step2("Hey Harsh , Here is something for you");


//You can write the above code in short form as

const sendAutoEmail2 = (to) => (subject) => (body) =>`Sending Email to ${to} with subject ${subject}: ${body}`;
console.log(sendAutoEmail2('hars@gmail.com')("Prize")("You have grab an opportunity to enroll in the course for free"));
