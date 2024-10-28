let container = document.querySelector("#container");
let btn = document.querySelector(".btn");
let count = 16;

btn.addEventListener("click", () => {
    count = Number(prompt("Enter a number less than 300"));
    container.style.display="none";

    let new_div = document.createElement("div");
    new_div.classList.add("newContainer")

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            let grid = document.createElement("div");
            grid.setAttribute("class", "grid");
            let per_box = 960 / count;
            let percent = (per_box * 100) / 960;
            grid.style.flex = `1 1 ${percent}%`;
            grid.style.width = `${per_box}px`;
            grid.style.height = `${per_box}px`;
            new_div.append(grid);
        }
    }
    document.body.append(new_div);
    let newBoxes = document.querySelectorAll(".grid");
    newBoxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            let r = Math.random() * 255;
            let g = Math.random() * 255;
            let b = Math.random() * 255;
            box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    })
})


for(let i = 0; i < count; i++) {
    for(let j = 0; j < count; j++) {
    let grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    let per_box = 960 / count;
    let percent = (per_box * 100) / 960;
    grid.style.flex=`1 1 ${percent}%`;
    grid.style.width=`${per_box}px`;
    grid.style.height=`${per_box}px`;
    container.append(grid);
    }
}

let grid = document.querySelectorAll(".grid");

grid.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        grid.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
    })
})