const createButton = document.querySelector("#createButton");

const container = document.querySelector("#container");
const gridSizeText = document.querySelector("#grid-size");
const input = document.querySelector("#size-slider");
const clear = document.querySelector("#clear");
const eraser = document.querySelector("#eraser");
const black = document.querySelector("#black");
container.addEventListener("mousedown", () => mouseHeld = true);
container.addEventListener("mouseup", () => mouseHeld = false);

let mouseHeld = false;
let currentSize = 16;
let currentColor = "Black"

document.addEventListener('DOMContentLoaded', () => createGrid(currentSize));

gridSizeText.textContent = "16 x 16";

input.addEventListener("input", (event) => {
    gridSizeText.textContent = input.value + " x " + input.value;
});

createButton.addEventListener("click", () => createGrid(input.value));
clear.addEventListener("click", () => createGrid(currentSize));
eraser.addEventListener("click", () => currentColor = "White");
black.addEventListener("click", () => currentColor = "Black");

function createGrid(size) {
    
    currentSize = input.value;
    container.innerHTML = '';

    if (size > 100) {
        size = 100;
    } else if (size < 4) {
        size = 4;
    }

    size = Math.round(size);

    for (let i = 0; i < size*size; i++) {

        const gridBox = document.createElement("div");
        gridBox.classList.add("grid");

        let dimention = container.clientWidth/size;

        gridBox.style.width = `${dimention}px`;
        gridBox.style.height = `${dimention}px`;

        gridBox.addEventListener("mouseenter", () => {
            
            if (mouseHeld === true) {
                gridBox.style.backgroundColor = currentColor;
            }
        });
        gridBox.addEventListener("mousedown", () => gridBox.style.backgroundColor = "Black");

        container.appendChild(gridBox);
    }
}