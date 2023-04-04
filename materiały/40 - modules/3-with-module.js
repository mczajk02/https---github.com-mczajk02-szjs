// żeby tutaj móc zrobić import z innego js - a trzeba dać w <script> type = "module"

// import { saveTheWorld } from './module.js'; // import selected elements
// import {saveTheWorld as nothingImportant} from './module.js'; // import with name alias
// import mod from './module.js'; // import default element from module 
import * as mod from './module.js';

// readonly import! const alike
// mod.name = 'ups'

console.log('From 3-with-module, mod.name:', mod.name)
console.log(mod)
mod.saveTheWorld();