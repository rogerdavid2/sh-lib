
// find distance of mouse to divTag
document.addEventListener("mousemove", function (event) {
    const x = event.pageX
    const y = event.pageY

    document.querySelectorAll("section div").forEach(div => {
        const dx = (div.offsetLeft + 50) - x  // distance from page - cursor x pos 
        const dy = (div.offsetTop + 50) - y // distance from page - cursor y pos
        const dist = Math.sqrt(dx * dx + dy * dy)

        const score = Math.exp(dist * -0.003)// change the curve or dif mathematical equation, how far away a div is from the cursor from [0, 1]


        div.style.transform = "scale(" + score + ")"
        div.style.fontWeight = 100 + (100 * Math.floor(8 * score)) // go to nearest whole number
    })
})