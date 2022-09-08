const slideshow = document.querySelector("section.slideshow");
const images = slideshow.querySelectorAll("img");

slideshow.addEventListener("mousemove", function (event) {
    const x = event.offsetX;
    console.log("offsetX ", x);

    const width = this.offsetWidth;
    console.log(width);

    const percentage = x / width;
    const imageNumber = parseFloat(Math.floor(percentage * images.length));

    console.log("image # ", imageNumber);
    console.log(images.length);

    images.forEach(image => {
        image.style.zIndex = 0;
    })

    if (imageNumber >= images.length) {
        console.log("Out of bounds: image with index [" + imageNumber + "] does not exist!");
        return;
    }

    images[imageNumber].style.zIndex = 1;

})