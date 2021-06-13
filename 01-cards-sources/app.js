const slides = document.querySelectorAll('.slide')

const slideClick = (event) => {

    slides.forEach((slide) => {
        if (slide === event.target) {
            slide.classList.add('active')
        }
        else {
            slide.classList.remove('active')
        }

    })
}

for (const slide of slides) {
    slide.addEventListener('click', slideClick)
}