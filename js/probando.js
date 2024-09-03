import { Estudiante } from "./Estudiante.js";

const estudiante1 = new Estudiante("1", "gaby", "gaby@hotmail.com");
const estudiante2 = new Estudiante("2", "pepe", "pep@hotmail.com");
const estudiante3 = new Estudiante("3", "ana", "ana@hotmail.com");

estudiante1.add("Prog 1");
estudiante2.add("Prog 1");
estudiante3.add("Prog 2");

const mapa = new Map();

mapa.set(estudiante1.legajo, estudiante1);
mapa.set(estudiante2.legajo, estudiante2);
mapa.set(estudiante3.legajo, estudiante3);

let buscar = "Prog 1";

const estudianteMateria = [...mapa.values()].filter((e) => {
  return e.listadoMaterias.includes(buscar);
});

console.log(estudianteMateria);
