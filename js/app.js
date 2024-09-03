import { Estudiante } from "./Estudiante.js";

const btn = document.getElementById("btnAgregar");
const estudiante = document.getElementById("estudiante");
const email = document.getElementById("email");
const legajo = document.getElementById("legajo");
const materia = document.getElementById("materia");
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
  const mat = materia.value;

  if (validarCampos(leg, nombre, mail, mat)) {
    const est = new Estudiante(leg, nombre, mail);

    if (listado.has(leg)) {
      return alert("El legajo ya existe!!!");
    }
    est.add(mat);
    listado.set(est.legajo, est);

    limpiarCampos();

    pCantidad.textContent = `Total de estudiantes: ${listado.size} `;

    const li = document.createElement("li");
    li.setAttribute("id", leg);
    li.textContent = `Estudiante: ${est.nombre} - 
                      Materia: ${est.listadoMaterias.map((mat) => mat)}`;

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

const validarCampos = (leg, nombre, mail, mat) => {
  if (!leg || !nombre || !mail || !mat) {
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
  if (event.target.tagName === "LI") {
    event.target.remove();
    console.log(event.target.id);
    deleteEstudianteMap(event.target.id);
    pCantidad.textContent = `Total de estudiantes: ${listado.size} `;
  }
};

const deleteEstudianteMap = (legajo) => {
  if (listado.has(legajo)) {
    listado.delete(legajo);
  }
};

const limpiarCampos = () => {
  const inputTextAll = document.querySelectorAll(
    'input[type = "text"], input[type = "email"]'
  );
  inputTextAll.forEach((input) => (input.value = ""));
};

const filtrarMateria = (buscar) => {
  eliminarElement();
  return [...listado.values()].filter((e) =>
    e.listadoMaterias.includes(buscar)
  );
};

document.addEventListener("click", () => {
  const buscar = document.getElementById("buscar").value;
  const estudianteMaterias = filtrarMateria(buscar);
  if (estudianteMaterias.length > 0) {
    const h3 = document.createElement("h3");
    h3.textContent = "Estudiantes por materia";
    const ul = document.createElement("ul");

    const div = document.getElementById("estPorMat");
    div.appendChild(h3);
    estudianteMaterias.forEach((e) => {
      const li = document.createElement("li");
      li.textContent = `El estudiante: ${e.nombre}`;

      ul.appendChild(li);
    });

    div.appendChild(ul);
  }
});

function eliminarElement() {
  const div = document.getElementById("estPorMat");
  const todo = div.querySelectorAll("ul, h3");
  if (todo) {
    todo.forEach((element) => {
      div.removeChild(element);
    });
  }
}
