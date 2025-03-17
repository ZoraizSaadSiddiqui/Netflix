const initSlider = () => {
    const imageList = document.querySelector(".image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const imageWidth = 250 + 15; // Image width + gap
    const visibleImages = 5; // Show 5 images at a time
    let currentPosition = 0;

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const maxScroll = imageList.scrollWidth - imageList.clientWidth;
            
            if (button.id === "next-slide") {
                currentPosition = Math.min(currentPosition + imageWidth * visibleImages, maxScroll);
            } else {
                currentPosition = Math.max(currentPosition - imageWidth * visibleImages, 0);
            }

            imageList.scrollTo({
                left: currentPosition,
                behavior: "smooth"
            });
        });
    });
};


window.addEventListener("load", initSlider);
