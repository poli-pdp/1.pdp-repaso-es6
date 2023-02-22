/**
 * Rest
 */

function calcular(...deudas) {
  let total = 0;
  deudas.forEach((deuda) => (total += deuda));
  return total;
}

console.log(calcular(100, 200, 300, 400));

/**
 * Spread
 * */

const saldo = 10000;
const deudas = [100, 200, 300, 400];
const totalDeudas = [saldo, ...deudas];
console.log(totalDeudas);

console.log(calcular(...totalDeudas));
