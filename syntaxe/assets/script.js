//comments on a one line
/* comments on multiple lines*/
var myVariable = "character chain";
var myVariable = 1;

/* it is possible in script to declare the same variable multiple times and with different types
this was done before 2015; and after 2015 the declaration of variables is done with let*/

let myVariablelet = "character chain";
myVariablelet = 1;

/* in this case we cannot declare a variable twice but we can give it a different type by calling
below is a way tp declare the constant and the type with use of const*/

const myVariableConst = "character chain";

const colorArray = ["red", "yellow", "blue"];
colorArray.push("green");

/*in the const declaration we have the right to add a value in the array with push but we do not have the right to
reassign a value using the = */
colorArray[1] = "orange";
// in an array the entries have values starting from zero. in our table we have 0 to 3 and yellow is 1
console.log(colorArray); //display array elements in the console

//including the HTML elements

let firstName = "Dizo";
const user = document.getElementById("user")
/*(method) Document.getElementById(elementId: string): HTMLElement | null
Returns a reference to the first object with the specified value of the ID attribute.*/

console.log(user);
console.dir(user); //display all the elements of the html in the console
user.innerText = firstName;
//user.style.backgroundColor = "yellow" to not use directly in js
user.classList.add("green");
user.classList.remove("lambda");

///______________________________________________________________________________________________________________
//events on HTMLelement
user.addEventListener("click", function (event) {
    console.dir(event);
    user.classList.toggle("green");
    user.classList.toggle("yellow");
})


//const employee = ["Bob", "Accountant", "2021-08-23"];
const employee = {
    name: "Bob",
    post: "Accountant",
    hired: "2021-08-23",
    callback: function () { //callback that we created is a method
        alert("Start work!") //alert is used to create alerts in the navigation
    }

};
console.log(employee.name);
//employee.callback(); to make the alert display on the navigation

const employees = [
    {
        name: "Alan",
        post: "Manager",
        hired: "2021-08-01",

    },
    {
        name: "Brian",
        post: "Receptionist",
        hired: "2021-08-11",

    },
    {
        name: "Ann",
        post: "Engineer",
        hired: "2021-08-32",

    }
];

//loops

let index = 0; //while loop
while (index < employees.length) {
    console.log(employees[index].name);
    index++;
}

for (let index = 0; index < employees.length; index++) { // for loop
    const element = employees[index]; //declaration of the constant element
    console.log(element.post);
}

employees.forEach(function (element, index) { //foreach loop; the elements are the contets of a table eg hired:date, name:brian
    console.log(index);
    console.log(element.hired);
});
// functions
// funtion named helloEmployee declaration 
function helloEmployee(name, message) {
    //const employeename = document.getElementById("employeename");
    const employeeName = document.querySelector("#employeeName"); // this is the equivalent of get element by id but uses a css value
    employeeName.innerText = message+" "+name;
}
helloEmployee("Georges");

//display the second employee in the array replaces George with Brian
helloEmployee(employees[1].name);

helloEmployee(employees[1].name , "Bonsoir");

//_______________________________________________________________________________________________________________________

const postdisplay = function (employees) {
    console.log(employees.post);
}
postdisplay(employees[0]); //version 1

const postdisply = (employees) => {console.log(employees.post);} //version 2
const postdispl = employees => console.logemployees.post; //version 3

//_______________________________________________________________________________________________________________________
//innertext vs innerHTML

const inner = document.getElementsByClassName("inner")[0];
console.dir(inner);
inner.innerHTML = "<button>Hello</button>";
//inner.innerText = "<script>alert(Hello);</scrpit>";
const extraTextForLorem = "the part of lorem to add";

inner.innerText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. ${extraTextForLorem} Maiores eius quidem sequi soluta sit ratione eum ducimus tenetur officia possimus voluptas suscipit, provident inventore ea cum! Enim veniam omnis accusantium!`



