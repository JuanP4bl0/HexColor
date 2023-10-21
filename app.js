let color = document.getElementById("colorPicker")
let text = document.querySelector(".container_p")
let colorContainer = document.querySelector(".container_color")
let btn = document.querySelector(".container_btn")

// console.log("Vinculado")

btn.addEventListener("click", () =>{
    colorContainer.style.backgroundColor = color.value;
    text.textContent = color.value
})
