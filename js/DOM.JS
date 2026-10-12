// DOM = Document Object Model IS A programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can connect to the page.
//  DOM Manipulation is the process of changing the document structure, style, and content. It is a way to interact with the HTML and XML documents using JavaScript. The DOM allows developers to create dynamic web pages by manipulating the elements on the page in real-time.

console.log("hello dom");

//  const heading = document.getElementsByTagName("h1");
// //  console.log(heading);
// heading[0].textContent = "Hello harsh";
// console.log(heading[0].textContent);

// const heading = document.getElementsByClassName("heading");
// console.log(heading);
// heading[0].textContent = "Hello harsh";
// console.log(heading[0].textContent);

const heading = document.getElementById("heading");
console.log(heading);
heading.textContent = "Hello harsh";
console.log(heading.textContent);

const heading2 = document.getElementById("heading2");
console.log(heading2);
heading2.textContent = "Hello jahanvi";
console.log(heading2.textContent);

