const createButton = document.querySelector("#createButton");

createButton.addEventListener("click", () => createGrid());

const container = document.querySelector("#container");
container.addEventListener("mousedown", () => mouseHeld = true);
container.addEventListener("mouseup", () => mouseHeld = false);

let mouseHeld = false;

function createGrid() {
    
    container.innerHTML = '';
    let size = prompt("Enter the size of the grid [X by X]", "8");

    for (let i = 0; i < size*size; i++) {

        const gridBox = document.createElement("div");
        gridBox.classList.add("grid");

        let dimention = container.clientWidth/size;

        gridBox.style.width = `${dimention}px`;
        gridBox.style.height = `${dimention}px`;

        gridBox.addEventListener("mouseenter", () => {
            
            if (mouseHeld === true) {
                gridBox.style.backgroundColor = "Black"
            }
        });

        container.appendChild(gridBox);
    }
}