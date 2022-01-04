var mainHeading = document.querySelector(".current-color")
const mainBtn = document.querySelector(".btn-main");
var body = document.body;


mainBtn.addEventListener("click", (e) =>{
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${blue}, ${green})`
    body.style.background = randomColor;
    mainHeading.textContent = randomColor;

})