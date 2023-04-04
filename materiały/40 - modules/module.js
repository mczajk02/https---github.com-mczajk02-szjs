let name = 'module.js';
function saveTheWorld() {
    document.querySelector('#btn').addEventListener('click', () => console.log(name))
}
const a = 1
// export default name;
// import name from ...

// export default {saveTheWorld, name};
// import mod from .., next mod.saveTheWorld
// export default { saveTheWorld as stw } // export with aliases
// // import mod from .., next mod.stw
export { name, saveTheWorld } // yet another way to export 
// import * as mod from './modules/module.js';