// let name = '2.js'; // 'name' has already been declared error - in console
name = '2.js';
document.querySelector('#btn').addEventListener('click', () => saveTheWorld(name))
function saveTheWorld(name) {
    console.log('saveTheWorld from 2.js, name:', name)
}