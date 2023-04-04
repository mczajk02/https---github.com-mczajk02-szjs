name = '1.js';
document.querySelector('#btn').addEventListener('click', () => saveTheWorld(name))
function saveTheWorld(name) {
    console.log('saveTheWorld from 1.js, name:', name)
}