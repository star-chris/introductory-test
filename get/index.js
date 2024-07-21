let buttonOnPage = document.getElementById("btn");

buttonOnPage.addEventListener("click", greetUser);

let colors = ['green', 'red', 'yellow', 'purple', 'pink', 'brown', 'white', 'peach']; // Array of colors
let currentColorIndex = 0;

function greetUser() {
    console.log('Welcome guests');
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length; // Cycle through the colors
}


