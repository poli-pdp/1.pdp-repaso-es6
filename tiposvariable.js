function explicarVar() {
  var edad = 10;
  edad = 20;
  if (true) {
    var edad = 50;
    console.log(edad);
  }
  console.log(edad);
}

explicarVar();

function explicarLet() {
  let edad = 10;
  edad = 20;
  if (true) {
    let edad = 50;
    console.log(edad);
  }
  console.log(edad);
}

explicarLet();

function explicarConst() {
  const edad = 10;
  const jugador = { nombre: "Luis" };
  if (true) {
    const edad = 50;
    console.log(edad);
  }
  console.log(edad);
  console.log(jugador);
  jugador.edad = 30;
  console.log(jugador);
}

explicarConst();
