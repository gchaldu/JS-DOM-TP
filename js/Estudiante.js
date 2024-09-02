export class Estudiante {
  constructor(legajo, nombre, email) {
    this.legajo = legajo;
    this.nombre = nombre;
    this.email = email;
  }

  mostrarEstudiante() {
    return `El estudiante ${this.nombre} con legajo: 
            ${this.legajo}, Email: ${this.email}`;
  }
}
