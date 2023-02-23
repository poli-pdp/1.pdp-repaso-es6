let teams = ["Real Madrid", "Liverpool"];
for (let i = 0; i < teams.length; i++) {
  console.log(teams[i]);
}
teams.forEach((team) => {
  console.log(team);
});
console.log(teams);

/** push-pop-shift son mutables */
teams.push("Milan");
console.log(teams);
let primerItem = teams.shift();
console.log(primerItem);
console.log(teams);
let ultimoItem = teams.pop();
console.log(ultimoItem);
console.log(teams);

/**Inmutables Map-Filter-Reduce-Every-Some-Find*/

//Map -> Recorre-Iterar extraer informacion (transformar)
let estudiantes = ["Ana", "Luis", "Miguel"];
let nombres = estudiantes.map((estudiante) => `${estudiante} - `);
console.log(nombres);
console.log(estudiantes);

let productos = [
  { name: "PDF", cost: 20 },
  { name: "Libro", cost: 30 },
  { name: "Agenda", cost: 40 },
];

let nombresPdtos = productos.map((p) => p.name);
console.log(nombresPdtos);
console.log(productos);

let taxProducts = productos.map((p) => {
  return { ...p, tax: p.cost * 0.19 };
});

console.log(taxProducts);
console.log(productos);

const programas = [
  {
    nombre: "Ing Informatica",
    ciudad: "Medellin",
    graduados: 100,
    desertaron: 30,
  },
  {
    nombre: "Ing Electronica",
    ciudad: "Rionegro",
    graduados: 60,
    desertaron: 20,
  },
  {
    nombre: "Tecnologia Sistemas",
    ciudad: "Uraba",
    graduados: 30,
    desertaron: 10,
  },
  { nombre: "Ing Civil", ciudad: "Cali", graduados: 100, desertaron: 0 },
  { nombre: "Ing Alimentos", ciudad: "Bogota", graduados: 60, desertaron: 0 },
  { nombre: "Ing Deporte", ciudad: "Pereira", graduados: 30, desertaron: 10 },
];

//ES6

//Map
const ciudades = programas.map((p) => p.ciudad);
console.log(ciudades);

/*
= Asignar
== Comparar valores
=== Comparar valor y tipo del valor
*/

//Every
const sinDesercion = programas.every((p) => p.desertaron === 0);
console.log(sinDesercion);
//Some
const conDesercion = programas.some((p) => p.desertaron > 0);
console.log(conDesercion);

//Filter filtrar
const programasSinDesercion = programas
  .filter((p) => p.desertaron === 0)
  .map((p) => p.nombre);
console.log(programasSinDesercion);

const programasCiudad = programas.filter((p) => p.ciudad === "Bogota");
console.log(programasCiudad);

//Reduce contador-acumulador
const totalGraduados = programas.reduce(
  (contador, p) => (contador += p.graduados),
  0
);
console.log(totalGraduados);

const totalGraduadosSinDesercion = programas
  .filter((p) => p.desertaron === 0)
  .reduce((contador, p) => (contador += p.graduados), 0);
console.log(totalGraduadosSinDesercion);

const programaConMasDesercion = programas.reduce((prev, act) => {
  return prev.desertaron > act.desertaron ? prev : act;
});
console.log(programaConMasDesercion.nombre);

const palabras = ["Aplica", "ciertas", "acciones", "sobre", "cada"];
const frase = palabras.reduce((frase, p) => `${(frase += p)} `, "");
console.log(frase);

const total = programas.reduce(
  (contador, act) => {
    return {
      graduados: contador.graduados + act.graduados,
      desertaron: contador.desertaron + act.desertaron,
    };
  },
  { graduados: 0, desertaron: 0 }
);
console.log(total);
//{graduados: x, desertaron: y}
