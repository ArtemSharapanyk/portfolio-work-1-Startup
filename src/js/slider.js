let sliderCreater = (dots, slide, wrap, sliderEl) => {
    let dotsBtns = document.querySelectorAll(dots);
    let slides   = document.querySelectorAll(slide);
    let dotWrap  = document.querySelector(wrap);

    let showSlide = (slideIndex = 0) => {
        slides.forEach((item) => item.classList.remove('show'));
        slides.forEach((item) => item.classList.add('hide'));
        dotsBtns.forEach((item) => item.classList.remove('dotActive'));

        slides[slideIndex].classList.add('show');
        slides[slideIndex].classList.remove('hide');
        dotsBtns[slideIndex].classList.add('dotActive');
    };
    showSlide();

    dotWrap.addEventListener('click', (e) => {
        if(e.target && e.target.classList.contains('dot')) {
            for(let i = 0; i < dotsBtns.length; i++) {
                if(e.target === dotsBtns[i]){
                    showSlide(i);
                }
            }
        }
    });
};

module.exports = sliderCreater;