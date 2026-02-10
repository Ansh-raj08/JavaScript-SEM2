// const nameInput = document.getElementById("myInput").addEventListener("change",()=>{
//     document.getElementById("output").textContent = "change detected";
//     console.log(nameInput.value)
// });

const nameInput = document.getElementById("myInput");
const out = document.getElementById("output");
const study = document.getElementById("course");
const form = document.getElementById("myForm");

form.addEventListener("submit", ()=>{
    event.preventDefault();

    const name = nameInput.value;
    const course = study.value;
    console.log(name,course);

    out.textContent = name+ " "+course
})