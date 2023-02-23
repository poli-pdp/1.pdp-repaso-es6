import Animal from "./Animal.js";
import ValidToken, { API_KEY, roles } from "./helpers.js";
//import ValidToken, * as HELPER from "./helpers.js";

const animal = new Animal("Perro");
console.log(animal.print());
console.log(ValidToken());
console.log(API_KEY);
console.log(roles[0]);
