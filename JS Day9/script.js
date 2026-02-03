// const query = document.querySelector("#content p");
// console.log(query);

// // queryselectorAll 

// const query2 = document.querySelectorAll("p");
// console.log(query2,"query")
// for(let i=0;i<query.length;i++){
//     query2[i].query.textContent="This is changed via JS"
// }

// 1. Select all <p> tags
const paragraphs = document.getElementsByTagName('p');

for (let i = 0; i < paragraphs.length; i++) {
    // Note: Array indexing starts at 0. 
    // Usually, in coding tasks, "Even" paragraphs refer to the visual 2nd, 4th, etc.
    // i % 2 !== 0 checks for odd index (which is the 2nd, 4th visual element)
    
    if (i % 2 !== 0) {
        // Even paragraphs (2nd, 4th...)
        paragraphs[i].style.color = 'blue';
    } else {
        // Odd paragraphs (1st, 3rd...)
        paragraphs[i].style.color = 'green';
    }
}

// 3. Make the last paragraph bold
if (paragraphs.length > 0) {
    paragraphs[paragraphs.length - 1].style.fontWeight = 'bold';
}