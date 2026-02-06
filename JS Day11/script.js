// function handleClick() {
//     document.getElementById("tct").style.color="red";

//     document.getElementById("btn").textContent="Colour Change hogyaaa"
// }


const handleClick = () => {
    const image = document.createElement("img");
    image.setAttribute("src", "https://i.redd.it/cjn58f6cd9le1.png")

    image.setAttribute("alt", "F-22");

    document.getElementById("content").append(image);
}