// @ 30 Jan 

const heading = document.getElementById("myHeading");
console.log(heading);

heading.style.color= "blue";
heading.style.backgroundColor= "grey";
console.log(heading.textContent);
heading.textContent= "DOM and it's introduction!.";

const subHeading = document.getElementsByClassName("sub-heading")
console.log(subHeading);

for(let i = 0; i<subHeading.length;i++) {
    subHeading[i].style.color="blue";
    subHeading[i].style.backgroundColor="green";
}