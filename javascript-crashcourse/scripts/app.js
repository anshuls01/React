// it's default import from util and util name can be a any alias
// e.g import defaultutil from './until.js' is also valid
import util from './until.js';
console.log(util);

// named variable export function or variable can be accessed like below
import {aliasnamed as contentalias} from './until.js';
console.log(contentalias);

// import can be done using alias. e.g.
import * as utilimport from './until.js';
console.log('this is an example of import default and named varibales');
console.log(utilimport.default);
console.log(utilimport.apikey);
console.log(utilimport.apipassword);

//import can be done using multiple 
import {apikey, apipassword} from './until.js';
console.log(apikey);
console.log(apipassword);


