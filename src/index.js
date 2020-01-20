import 'normalize.css';
import '../src/assets/css/main.css';

document.addEventListener('DOMContentLoaded', () => {
    const createMenu = require('./js/menu');
    const filter     = require('./js/filters');
    createMenu('.menu', '.burgBtn', 'menuActive');
    filter('.filtration','.workExample','.filterBtn');
});
