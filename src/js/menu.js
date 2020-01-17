let menu = (menu, btn, activeClass) => {
    let menuWrap = document.querySelector(menu);
    let menuBtn  = document.querySelector(btn);

    menuBtn.addEventListener('click', () => {
        if(menuWrap.classList.contains(activeClass)) {
            menuWrap.classList.remove(activeClass);
            menuBtn.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
        }
        else{
            menuWrap.classList.add(activeClass);
            menuBtn.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
        }
    });
};
module.exports = menu;