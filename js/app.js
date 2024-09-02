import { Estudiante } from "./Estudiante.js";

const btn = document.getElementById("btnAgregar");
const estudiante = document.getElementById("estudiante");
const email = document.getElementById("email");
const legajo = document.getElementById("legajo");
const listaEstudiantes = document.getElementById("listaEstudiantes");
const pCantidad = document.getElementById("cantidad");

const listado = new Map();
/* btn.addEventListener("click", () => {
  const nombre = estudiante.value;
  const mail = email.value;
  const leg = legajo.value;
  const est = new Estudiante(leg, nombre, mail);

  console.log(est);
}); */

btn.addEventListener("click", () => {
  const nombre = estudiante.value;
  const mail = email.value;
  const leg = legajo.value;

  if (validarCampos(leg, nombre, mail)) {
    const est = new Estudiante(leg, nombre, mail);

    if (listado.has(leg)) {
      return alert("El legajo ya existe!!!");
    }

    listado.set(est.legajo, est);

    pCantidad.textContent = listado.size;

    const li = document.createElement("li");
    li.setAttribute("id", leg);
    li.textContent = nombre;
    li.style.cursor = "pointer";
    li.addEventListener("click", deleteLI);

    listaEstudiantes.appendChild(li);
  } else {
    /* const pError = document.createElement("p");
    pError.textContent = "Faltan cargar algunos datos";
    pError.style.backgroundColor = "red";
    pError.style.color = "white";
    listaEstudiantes.appendChild(pError);

    setTimeout(() => {
      listaEstudiantes.removeChild(pError);
    }, 3000); */
    alert("No puede haber campos vacios");
  }
});

const validarCampos = (leg, nombre, mail) => {
  if (!leg || !nombre || !mail) {
    return false;
  }
  return true;
};

const validarCampos2 = (estudiante) => {
  for (const key in estudiante) {
    if (estudiante[key] === undefined || estudiante[key] === null) {
      console.log(`El atributo '${key}' no está seteado.`);
      return false;
    }
  }

  return true;
};

const deleteLI = (event) => {
  console.log(event);
  if (event.target.tagName === "LI") {
    event.target.remove();
    console.log(event.target.id);
    deleteEstudianteMap(event.target.id);
    pCantidad.textContent = listado.size;
  }
};

const deleteEstudianteMap = (legajo) => {
  if (listado.has(legajo)) {
    listado.delete(legajo);
  }
};
