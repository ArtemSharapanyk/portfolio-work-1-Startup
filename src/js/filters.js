let addFilter = (filterWrap, elOfFilter, filterButtons) => {
    let filterWrapper    = document.querySelector(filterWrap);
    let elementsOfFilter = document.querySelectorAll(elOfFilter);
    let filterBtns       = document.querySelectorAll(filterButtons);

    let showElem = (num) => {
        filterBtns.forEach((item) => item.classList.remove('activeFilter'))
        filterBtns[num].classList.add('activeFilter');

        let findEl = (className) => {
            for(let i = 0; i < elementsOfFilter.length; i++) {
               if(elementsOfFilter[i].classList.contains(className)){
                if(!elementsOfFilter[i].classList.contains('show')) {
                    elementsOfFilter[i].classList.remove('hide');
                    elementsOfFilter[i].classList.add('show');
                }
               }
               
               else{
                    elementsOfFilter[i].classList.remove('show');
                    elementsOfFilter[i].classList.add('hide');
                    continue;
               }
            } 
        };
        
        if(num === 0) {
            findEl('workExample');
        }
        else if(num === 1){
            findEl('Branding');
        }
        else if(num === 2){
            findEl('Design');
        }
        else if(num === 3){
            findEl('Development');
        }
        else if(num === 4){
            findEl('Strategy');
        }
    };
    showElem(0);
    filterWrapper.addEventListener('click', (e) => {
        if(e.target && e.target.classList.contains('filterBtn')) {
            for(let i = 0; i < filterBtns.length; i++) {
                if(e.target == filterBtns[i]) {
                    showElem(i);
                }
            }
        }

    });
    
};
module.exports = addFilter;