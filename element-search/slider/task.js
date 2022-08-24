const
    imgElms = document.querySelectorAll(".slider__item"),
    leftBtn = document.querySelector(".slider__arrow_prev"),
    rightBtn = document.querySelector(".slider__arrow_next"),
    sumOfSlides = imgElms.length;

let activeSlideItem = 0;

function switchActiveSlide(activeSlideItem) {
    let activeSlide = document.querySelector(".slider__item_active");
    activeSlide.classList.remove("slider__item_active");
    imgElms.item(activeSlideItem).classList.add("slider__item_active");
}

leftBtn.addEventListener("click", function () {
    activeSlideItem--;

    if (activeSlideItem < 0) {
        activeSlideItem = sumOfSlides - 1;
    }

    switchActiveSlide(activeSlideItem);
    return activeSlideItem;
});

rightBtn.addEventListener("click", function () {
    activeSlideItem++;

    if (activeSlideItem === sumOfSlides) {
        activeSlideItem = 0;
    }

    switchActiveSlide(activeSlideItem);
    return activeSlideItem;
});