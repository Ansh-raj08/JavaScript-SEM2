const head = document.getElementById("heading");
// head.innerHTML="<i>New Heading</i>"

console.log(head.innerText) //it will only show the visible text

console.log(head.textContent) // it will show all the text including hidden text

console.log(head.innerHTML) // it will show all the text with tag/element

// dom modification
// creates new element and sets it's content 

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically created paragraph.";

console.log(newParagraph.textContent);

//Append the new element in the existing container.

const container = document.getElementById("container");
container.appendChild(newParagraph);

// remove element 

const para = document.querySelector("#container p");
para.remove()

let date = new Date()
console.log(date)

setInterval(() => {
    let date = new Date()
    console.log(date)
}, 6000)

function handleClick() {
    document.getElementById("output").textContent = "Button Clicked!"
}