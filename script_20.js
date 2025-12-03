const username = document.getElementById("username");
const inputusername = document.getElementById("input-username");
const button = document.getElementById("button");

button.addEventListener('click' , ()=>{
    const value = username.value;//We have accessed the value of username and put it in the value variable.

    //Now we will be putting these value in the local storage , we have a object called localStorage and a method setItem .
    localStorage.setItem("name" , value);
    location.reload();
});

//This will help me to print the name in the DOM whenever I load the window
window.addEventListener('load', () => {
    const value = localStorage.getItem("name"); // I get the name from the localStorage and put it in the value variable.
    inputusername.innerText = value;  
});