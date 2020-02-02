import 'normalize.css';
import '../src/assets/css/main.css';

document.addEventListener('DOMContentLoaded', () => {
    const createMenu = require('./js/menu');
    const filter     = require('./js/filters');
    const slider     = require('./js/slider');
    
    createMenu('.menu', '.burgBtn', 'menuActive', 'nav a', 'activeMenuLink', 'activeMenuOnScroll');
    filter('.filtration','.workExample','.filterBtn');
    slider('.dot', '.slide2', '.dots', '.ourPartners .slider');
});
