/**
 * Objectos extraemos propiedades
 */

const jugador = {
  nombre: "Luis",
  apellido: "Perez",
  edad: 10,
  estado: true,
};

//ES5
//const nombre = jugador.nombre;
//const edad = jugador.edad;

//ES6
const { nombre, edad } = jugador;
console.log(nombre);
console.log(edad);

/**
 * Array extraemos elementos
 */

const jugadores = ["Messi", "Ronaldo", "Neymar"];
//ES5
//const x = jugadores[0];
//const y = jugadores[1];

//Es6
const [, x, y] = jugadores;
console.log(x);
console.log(y);

let a = 10;
let b = 20;
[b, a] = [a, b];

console.log(a);
console.log(b);
