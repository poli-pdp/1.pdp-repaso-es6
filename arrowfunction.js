const saludar = function (nombre) {
  return `Hola ${nombre} donde estas?`;
};

console.log(saludar("Maria"));

const saludar2 = (nombre) => {
  return `Hola ${nombre} donde estas?`;
};
console.log(saludar2("Maria"));

const saludar3 = (nombre) => `Hola ${nombre} donde estas?`;
console.log(saludar3("Maria"));

const saludar4 = () => `Hola Maria donde estas?`;
console.log(saludar4());
