const panTag = document.querySelector("section.panner div.world");

let currentX = 0;
let currentY = 0;
let aimX = 0; // where pan area will go in x direction
let aimY = 0; // where pan area will go in y direction

document.addEventListener("mousemove", function (ev) {
    // figure out the length and width of world div (biggest size area)
    // figure out length and width of browser, (smallest size area)
    // figure out where cursor is in relation to the browser
    // figure out length and width of panning area (medium size area )

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const worldWidth = panTag.clientWidth;
    const worldHeight = panTag.clientHeight;

    const mouseX = ev.pageX;
    const mouseY = ev.pageY;

    // figure out pan size to know how much area you can move around
    const panWidth = worldWidth - windowWidth;
    const panHeight = worldHeight - windowHeight;

    // constrain mouse coordinates (x, y)
    const percentageX = mouseX / windowWidth; // 0 < x < 1
    const percentageY = mouseY / windowHeight; // 0 < y < 1

    // it's the pan area, and how much we want to shift the area by
    aimX = -1 * panWidth * percentageX; // range: -aimX <= 0, ex pandWidth is 1984: -1 * [1984] *[0] = 0,  -1 * [1984] * [1] = -1984, world moved leftwards, but mouse rightward; vice-versa
    aimY = -1 * panHeight * percentageY; // range: -aimY <= 0, ex panHeight is 2292: -1 * [2292] * [0] = 0, -1 * [2292] * [1] = -2292. world moves upward,  but moust downward; vice-versa


    // tweening: where it is now to where you want to move to
    // make panTag go to where it should be currently
});

const animate = function () {
    currentX = currentX + (aimX - currentX) * 0.05; // tweening, it slows world area x Direction with minor increments or decrements at  .000001
    currentY = currentY + (aimY - currentY) * 0.05; // tweening, it slows world area y Direction with minor increments or decrements  at .000001
    panTag.style.left = currentX + "px"; // move that world absolute position: left
    panTag.style.top = currentY + "px"; // move that world absoulte position: top
    requestAnimationFrame(animate); // recursivley call animate over and over!
}

animate();