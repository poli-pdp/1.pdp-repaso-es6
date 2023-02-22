class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  saludar() {
    return `Hola ${this.name}`;
  }
}

const persona = new Person("Ana", 10, "Teacher");
console.log(persona.name);
console.log(persona.saludar());
