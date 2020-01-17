import 'normalize.css';
import '../src/assets/css/main.css';

document.addEventListener('DOMContentLoaded', () => {
    let createMenu = require('./js/menu');

    createMenu('.menu', '.burgBtn', 'menuActive');
});
