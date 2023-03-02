// Callback = es una funcion que se pasa como parametro a otra funcion.

function respuesta(res) {
  console.log(res);
}

function calcular(op1, op2, funcionCallback) {
  let resp = op1 + op2;
  funcionCallback(resp);
}

//calcular(10, 20, respuesta);

//Promises: es un objeto, por naturaleza son asincronas.

let promesa = new Promise((res, rej) => {
  let estado = false;
  if (estado) {
    res("Resolvio la promesa");
  } else {
    rej("Se rechazo la promesa");
  }
});
/*
//Opcion 1
promesa.then(
  (valor) => console.log(valor),
  (error) => console.log(error)
);
//Opcion 2
promesa
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error));
*/

//Promesa con setTimeout para evidnciar lo asincrono
let promesa2 = new Promise((res) => {
  console.log("Inicio Promesa2");
  setTimeout(() => res("Promesa Resuelta en 3seg"), 3000);
  console.log("Fin Promesa2");
});
promesa2.then((valor) => console.log(valor));

//async indicar que una funcion regresa una promesa
//await esperar el resultado de una promesa

async function funcionConAsync() {
  return "Ejemplo con async";
}

funcionConAsync().then((valor) => console.log(valor));
