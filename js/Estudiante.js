export class Estudiante {
  constructor(legajo, nombre, email) {
    this.legajo = legajo;
    this.nombre = nombre;
    this.email = email;
    this.listadoMaterias = [];
  }

  mostrarEstudiante() {
    return `El estudiante ${this.nombre} con legajo: 
            ${this.legajo}, Email: ${this.email}`;
  }

  add(materia) {
    this.listadoMaterias.push(materia);
  }
}
