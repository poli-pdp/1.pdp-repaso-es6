/**
 * Function Declarative
 */

function calcularSaldo(valor) {
  return valor * 100;
}
console.log(calcularSaldo(100));

/**
 * Function Expression
 */

const resultado = function (valor = 100) {
  return valor * 100;
};
console.log(resultado(100));

// Paso por valor
let x = 10;
function cambioPorValor(a) {
  a = 20;
}
cambioPorValor(x);
console.log(x);

// Paso por referencia
const persona = {
  nombre: "Luis",
  saludar: function () {},
};
function cambioPorReferencia(obj) {
  (obj.nombre = "Maria"), (obj.edad = 10);
}
cambioPorReferencia(persona);
console.log(persona);
