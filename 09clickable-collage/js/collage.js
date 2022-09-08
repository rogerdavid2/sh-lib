const images = [
    "img/project-1.jpg",
    "img/project-2.jpg",
    "img/project-3.jpg",
    "img/project-4.jpg",
    "img/project-5.jpg",
    "img/project-6.jpg",
    "img/project-7.jpg",
    "img/project-8.jpg",
]

let i = 0;

function placeImage(x, y) {
    const nextImage = images[i]
    const img = document.createElement("img");
    img.setAttribute("src", nextImage)
    img.style.left = x + "px";
    img.style.top = y + "px";
    img.style.transform = `translate(-50%, -50%) scale(0.5) rotate(${Math.random() * 20 - 10}deg)`; /* between [-10, 10] */

    document.body.appendChild(img);
    i += 1;

    if (i >= images.length) {
        i = 0;
    }
}

document.addEventListener("click", (event) => {
    event.preventDefault();
    placeImage(event.pageX, event.pageY);
})

/* Every 20th picture is shown randomly */
let mouse = 0;
document.addEventListener("mousemove", (event) => {
    event.preventDefault();
    mouse += 1;
    if (mouse % 20 === 0) {
        placeImage(event.clientX, event.clientY);
    }
})

document.addEventListener("touchend", (event) => {
    event.preventDefault();
    placeImage(event.pageX, event.pageY);
})