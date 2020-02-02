let menu = (menu, btn, activeClass, link, activeLinkClass, onScrollActive) => {
    let menuWrap       = document.querySelector(menu);
    let menuBtn        = document.querySelector(btn);
    let links          = document.querySelectorAll(link);
    let navigation     = document.querySelector('nav');

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
    document.addEventListener('scroll', () => {
        let addActiveClassToMenuItemsOrRemove = (num) => {
            links.forEach((item) => item.classList.remove(activeLinkClass));
            links[num].classList.add(activeLinkClass);
        };

        if(document.documentElement.scrollTop >= 100) {
            navigation.classList.add(onScrollActive);
        }
        else{
            navigation.classList.remove(onScrollActive);
        }
        
        if(document.documentElement.scrollTop >= 0) {
            addActiveClassToMenuItemsOrRemove(0);
            if(document.documentElement.scrollTop > 572) {
                addActiveClassToMenuItemsOrRemove(1);
                if(document.documentElement.scrollTop > 1100) {
                    addActiveClassToMenuItemsOrRemove(2);
                    if(document.documentElement.scrollTop > 1802) {
                        addActiveClassToMenuItemsOrRemove(3);
                        if(document.documentElement.scrollTop > 2996) {
                            addActiveClassToMenuItemsOrRemove(4);
                            if(document.documentElement.scrollTop > 3902) {
                                addActiveClassToMenuItemsOrRemove(5);
                            }
                        }
                    }
                }
            }
        }
    });
};
module.exports = menu;