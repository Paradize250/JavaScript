
//creating functions and parameters and using the functions inside other functions--------------------------------------------------------------
//fonction basic
function hello() {
    console.log("hello world");

}
hello();
//arrow function

const myFunction = () => {
    console.log("this is an arrow function");
}
myFunction();

//shortcut
//for a unnique instrution the brackets are optional
const myFunctionBas = () => console.log("bas");
myFunctionBas();

//for a unnique instrution the paranthesis are optional
const myFunctionTer = parameter => console.log(parameter);
myFunctionTer("ter");

//setTimeout

//create a function that creates a div with the text "bonjour" at the end of the <body> with a parameter called text that we can customize

const addBonjourDiv = (text) => {
    // Create a new div element
    const div = document.createElement('div');

    // Set the text content of the div and call the text parameter created
    div.textContent = text;

    // Append the div to the end of the body
    document.body.appendChild(div);
}

// Call the function to add the "bonjour" div
addBonjourDiv("Bonjour");

// setTimeout(addBonjourDiv, 4000); the first code without a parameter
// while using a function as a parameter of another function you cannot use paranthesis

//using the timeout function------------------------------------------------------------------------------------------------------------------
// with the text parameter click on the function settimeout and add your function inside
setTimeout(() => {
    addBonjourDiv("Bonjour")
}, 4000);

//using the interval function------------------------------------------------------------------------------------------------------------------
//the interval functions unse the same instructions on a certain interval of defined time. 
let chrono = 0;

const interChrono = setInterval(() => {
    console.log(chrono);
    chrono ++;
    
}, 1000);

//to stop the setinterval we use clearInterval (sometimes with cleartimeout)

setTimeout(() => {
    clearInterval(interChrono);
}, 10000);