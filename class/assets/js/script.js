////Objects______---------------------------------------------------------------------------------------------------
//to create an object in JS we use brackets. in this example, we give our variable objectDiv a tag and an id (these are properties)
const basicDiv = {

    tag: "div",        // Specifies the HTML tag for the div
    style: [],         // An array for CSS style properties (you can use an object instead for key-value pairs)
    content: {
        text: "",         // A property for text content within the div
        elementHTML: {}  // An object for including other HTML elements within the div
    },
    id: "",
    // An optional ID for the div
    createElem: (tagElem, contentElem, idElem) => {     //this is the creation of a method. a function in an object. TagElem is the parameter of the method
        const elem = document.createElement(tagElem);
        elem.textContent = contentElem;
        elem.id = idElem;
        document.body.append(elem)
    }
};
basicDiv.createElem("div", "this is the content", "top"); //this is where we use the object and function (method)



//example 2----------------------------------------------------------------------------------------------------------
//This structure allows for flexibility in creating div elements with various content types, styles, and optional IDs.
// Create a div element based on the basicDiv object
const divElement = document.createElement(basicDiv.tag);

// Apply styles from the style array (you can modify this to use an object for styles)
basicDiv.style.forEach(styleProperty => {
    divElement.style[styleProperty] = 'yourStyleValue';
});

// Set the text content
divElement.textContent = basicDiv.content.text;

// Optionally set the ID
divElement.id = basicDiv.id;

// You can also add other HTML elements to the div based on the content.elementHTML object
for (const key in basicDiv.content.elementHTML) {
    divElement.appendChild(basicDiv.content.elementHTML[key]);
}

// Finally, append the div to the document's body or another parent element
document.body.appendChild(divElement);




//example 3----------------------------------------------------------------------------------------------------------
//creating a class from the previous object to be able to change the tag. the difference between a class and an object in a syntax is the use on := and ,;

class basicDivClass {

    tag = "";      // Specifies the HTML tag for the div
    style = [];       // An array for CSS style properties (you can use an object instead for key-value pairs)
    content = {
        text: "",         // A property for text content within the div these remain objects in the class
        elementHTML: {}  // An object for including other HTML elements within the div
    };
    id = "";
    // An optional ID for the div
    createElem = () => {     //this is the creation of a method. a function in an object. in a class we use this.tag
        const elem = document.createElement(this.tag);
        elem.textContent = this.content.text;
        elem.id = this.id;
        document.body.append(elem)
    }
};

//Instantiation of an object from a class

const newBasicDiv1 = new basicDivClass();//creating a div or a span
console.dir(newBasicDiv1);
newBasicDiv1.tag = "div";
newBasicDiv1.content.text ="text for my new div";
newBasicDiv1.createElem();


const newBasicNav = new basicDivClass(); //creating a nav
newBasicNav.tag = "nav";
newBasicNav.content.text = "this is the text in the nav";
newBasicNav.createElem();

//creating a function in the class "constructor" to make the syntax shorter

class BasicNewClass {
constructor (tag, style,text,id) {
    this.tag = tag;      
    this.style = style;       
    this.content.text = text;
    this.id = id;

    this.createElem();
}
tag = "";      
style = [];       
content = {
    text: "",        
    elementHTML: {}  
};
id = "";
   
    createElem = () => {     
        const elem = document.createElement(this.tag);
        elem.textContent = this.content.text;
        elem.id = this.id;
        document.body.append(elem)
    }
};
//to create an output in the browser. remember to create a new object with the output you want as shown bellow
const createSpan = new BasicNewClass("span", "", "this is the new span created using a a class with the constructor function","middle");

class SuperBasicNewClass extends BasicNewClass {
    constructor (tag, style,text,id) {
        super(tag,style,text)     
        this.id = id;
    }

}
const input= new SuperBasicNewClass("input", "");
