const ball = document.querySelector("div.ball");

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.02; // if dy/dx < 0, the slower the animation.



function animate() {
    let distanceX = mouseX - ballX; // distance of where mouse is minus where ball is
    let distanceY = mouseY - ballY;

    ballX = ballX + (distanceX * speed); // find where u are and find some distance and times it by speed
    ballY = ballY + (distanceY * speed);

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
    requestAnimationFrame(animate)
}


document.addEventListener("mousemove", function (ev) {
    mouseX = ev.pageX;
    mouseY = ev.pageY;
})

animate();