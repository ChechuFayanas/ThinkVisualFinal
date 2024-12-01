/* ---------------------------
   MODIFICADO Se "capturan" los elementos
   del DOM a seleccionar 
   --------------------------- */

// navegación
const navMenu = document.querySelector("header nav");
// botón que llama al menu
const menuBtn = document.querySelector(".menu-btn");
// el menú
const menu = document.querySelector(".menu");
// vínculos de los items
const menuLink = document.querySelectorAll(".nav-item a");

/* ------------------------------------
   Se determinan qué eventos
   desencadenarán las acciones del menú
   ------------------------------------ */

// Al cliquear en el botón
menuBtn.addEventListener("click", toggleMenu);

// Para cada vínculo del menú
menuLink.forEach((el) => {
  // cuando se cliquea en un vínculo
  el.addEventListener("click", toggleMenu);
});

/* --------------------------
   En una función, se definen
   las acciones para el menú
   -------------------------- */

function toggleMenu(e) {
  // Si el botón de menú es clickeado
  if (menuBtn.contains(e.target)) {
    // Prevenir la acción predeterminada solo si es un botón de menú o enlace del menú
    e.preventDefault();

    // Si el ancho de la ventana del navegador mide menos de 640px
    if (window.innerWidth < 640) {
      // Agrega o quita la clase "menuVisible"
      navMenu.classList.toggle("menuVisible");
    }
  }

  // Si se clickea en un vínculo del menú y el vínculo tiene un href
  if (this.hasAttribute("href") && this.getAttribute("href") !== "#") {
    // redirigir a destino del vínculo
    let adondeVoy = this.getAttribute("href");
    window.location = adondeVoy;
  }
}




document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section'); // Todas las secciones
  const navLinks = document.querySelectorAll('.nav-link'); // Todos los enlaces del menú

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              // Remueve la clase 'active' de todos los enlaces
              navLinks.forEach(link => link.classList.remove('active'));

              // Agrega la clase 'active' al enlace correspondiente
              const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
              if (activeLink) {
                  activeLink.classList.add('active');
              }
          }
      });
  }, {
      threshold: 0.6 // Detecta cuando el 60% de la sección es visible
  });

  // Observa cada sección
  sections.forEach(section => observer.observe(section));
});










let usuariosRegistrados = []; // Array para almacenar usuarios

function validarRegistro() {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;

  // Validar si las contraseñas coinciden
  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden.");
    return false; // Previene el envío del formulario
  }

  // Si todo es correcto, crear objeto usuario y agregarlo al array
  const nuevoUsuario = {
    nombre: nombre,
    correo: correo,
    password: password,
  };

  usuariosRegistrados.push(nuevoUsuario);

  alert("¡Registro exitoso! Pronto recibirás un correo con tu eBook.");
  console.log("Usuarios registrados:", usuariosRegistrados);

  // Retorna true para que el formulario se envíe
  return true;
}

// Array de trabajos
const trabajos = [
  {
    titulo: "El árbol del bienestar",
    descripcion:
      "Registro gráfico que realicé para el cierre de un taller de experiencia bienestar en una empresa.",
    imagen: "imagenes/html5_arbol.png",
    alt: "El árbol del bienestar",
  },
  {
    titulo: "Sentido sustentable",
    descripcion:
      "Resumen visual del mensaje de una empresa comprometida con el planeta.",
    imagen: "imagenes/html5_sentido_sustentable.png",
    alt: "Sentido sustentable",
  },
  {
    titulo: "Agilidad",
    descripcion: "Pensando en la solución a través de la agilidad.",
    imagen: "imagenes/html5_agilidad.png",
    alt: "Agilidad",
  },
  {
    titulo: "Gestión del error",
    descripcion: "Facilitación gráfica de un taller.",
    imagen: "imagenes/html5_gestion_del_error.png",
    alt: "Gestión del error",
  },

  {
  
    titulo: "Proyecto 1",
    subtitulo: "Visual Thinking Básico",
    descripcion:
      "Taller introductorio de Visual Thinking para equipos de trabajo.",
    boton: "Ver Más",
    imagen: "imagenes/trabajo10.jpg",
  },
  {
    imagen: "imagenes/trabajo11.jpg",
    titulo: "Proyecto 2",
    subtitulo: "Pensamiento Creativo",
    descripcion:
      "Desarrollo de habilidades creativas a través de la visualización.",
    boton: "Ver Más",
  },
  {
    imagen: "imagenes/trabajo12.jpg",
    titulo: "Proyecto 3",
    subtitulo: "Dinámicas Grupales",
    descripcion: "Facilitación gráfica en talleres grupales de integración.",
    boton: "Ver Más",
  },
  {
    imagen: "imagenes/trabajo5.jpg",
    titulo: "Proyecto 4",
    subtitulo: "Mapa Mental",
    descripcion:
      "Creación de mapas mentales para mejorar la organización de ideas.",
    boton: "Ver Más",
  },
  {
    imagen: "imagenes/trabajo6.jpg",
    titulo: "Proyecto 5",
    subtitulo: "Organización Visual",
    descripcion: "Técnicas visuales para mejorar la organización personal.",
    boton: "Ver Más",
  },
  {
    imagen: "imagenes/trabajo7.jpg",
    titulo: "Proyecto 6",
    subtitulo: "Resumen Visual",
    descripcion: "Resúmenes visuales de temas complejos.",
    boton: "Ver Más",
  },
  {
    imagen: "imagenes/trabajo8.jpg",
    titulo: "Proyecto 7",
    subtitulo: "Storytelling Visual",
    descripcion: "Contar historias a través de imágenes.",
    boton: "Ver Más",
  },
  {
    imagen: "imagenes/trabajo9.jpg",
    titulo: "Proyecto 8",
    subtitulo: "Pensamiento Sistémico",
    descripcion: "Análisis y mapeo de sistemas complejos.",
    boton: "Ver Más",
  },
  {
    imagen: "imagenes/trabajo10.jpg",
    titulo: "Proyecto 9",
    subtitulo: "Agilidad Visual",
    descripcion: "Mejorando procesos ágiles con visualización.",
    boton: "Ver Más",
  },
  {
    imagen: "imagenes/trabajo6.jpg",
    titulo: "Proyecto 10",
    subtitulo: "Diseño Visual",
    descripcion: "Creación de materiales visuales de apoyo.",
    boton: "Ver Más",
  },
  {
    imagen: "imagenes/trabajo11.jpg",
    titulo: "Proyecto 11",
    subtitulo: "Visual Thinking para Niños",
    descripcion: "Talleres de pensamiento visual para niños.",
    boton: "Ver Más",
  },
  {
    imagen: "imagenes/trabajo12.jpg",
    titulo: "Proyecto 12",
    subtitulo: "Comunicación Efectiva",
    descripcion: "Uso del pensamiento visual para mejorar la comunicación.",
    boton: "Ver Más",
  },
];

// Referencia al contenedor en HTML donde se mostrarán los trabajos
const contenedor = document.getElementById("contenedor-trabajos");

// Bucle para recorrer los trabajos y agregarlos al HTML
for (let i = 0; i < trabajos.length; i++) {
  // Crear un div para cada trabajo
  let trabajoDiv = document.createElement("div");
  trabajoDiv.classList.add("trabajo"); // Crear el elemento <figure> con la imagen
  let figura = document.createElement("figure");
  let img = document.createElement("img");
  img.src = trabajos[i].imagen;
  img.alt = trabajos[i].alt;
  figura.appendChild(img);

  // Crear el título del trabajo
  let titulo = document.createElement("figcaption");
  titulo.textContent = trabajos[i].titulo;

  // Crear el párrafo con la descripción del trabajo
  let descripcion = document.createElement("p");
  descripcion.textContent = trabajos[i].descripcion;

  // Añadir todo al div del trabajo
  trabajoDiv.appendChild(figura);
  trabajoDiv.appendChild(titulo);
  trabajoDiv.appendChild(descripcion);

  // Añadir el div al contenedor principal
  contenedor.appendChild(trabajoDiv);
}

// Seleccionar todos los botones del acordeón -- La función del acordeón en JavaScript es hacer que el contenido se muestre o se oculte cuando el usuario hace clic en un elemento. Esto permite ahorrar espacio en una página, ya que solo se muestra el contenido que el usuario desea ver, y el resto permanece oculto-->


// Seleccionar todos los botones del acordeón
const accordionButtons = document.querySelectorAll(".accordion-btn");

// Añadir evento de clic para cada botón
accordionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;

    // Alternar clase "active" para el contenido
    content.classList.toggle("active");

    // Alternar clase "active" para el botón
    this.classList.toggle("active");
  });
});



















// Carrusel - Seleccionamos los elementos necesarios
const carruselContainer = document.getElementById("carrusel-container");
const slides = carruselContainer.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Establecemos la posición actual del carrusel
let currentPosition = 0;

// Función para mostrar la imagen actual
function showSlide(position) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[position].style.display = "block";
}

// Función para avanzar al siguiente slide
function nextSlide() {
  currentPosition++;
  if (currentPosition >= slides.length) {
    currentPosition = 0;
  }
  showSlide(currentPosition);
}

// Función para retroceder al slide anterior
function prevSlide() {
  currentPosition--;
  if (currentPosition < 0) {
    currentPosition = slides.length - 1;
  }
  showSlide(currentPosition);
}

// Agregamos los eventos de clic a los botones de navegación
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Mostramos la primera imagen al cargar la página
showSlide(0);


















// Pop up Seleccionar los elementos necesarios
const abrirPopUp = document.getElementById("abrirPopUp");
const cerrarPopUp = document.getElementById("cerrarPopUp");
const popUp = document.getElementById("popUp");

// Mostrar el pop-up cuando se hace clic en el botón "Ver oferta"
abrirPopUp.addEventListener("click", () => {
  popUp.style.display = "flex"; // Cambia el 'display' para mostrar el pop-up
});

// Cerrar el pop-up cuando se hace clic en la "X"
cerrarPopUp.addEventListener("click", () => {
  popUp.style.display = "none";
});

// Cerrar el pop-up si se hace clic fuera del contenido del pop-up
window.addEventListener("click", (event) => {
  if (event.target == popUp) {
    popUp.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("mistrabajos.json")
    .then((response) => response.json())
    .then((data) => {
      const contenedorTrabajos = document.getElementById("contenedor-trabajos");

      data.forEach((trabajo) => {
        const trabajoDiv = document.createElement("div");
        trabajoDiv.classList.add("trabajo");

        trabajoDiv.innerHTML = `
                    <figure>
                        <img src="${trabajo.imagen}" alt="${trabajo.titulo}">
                    </figure>
                    <figcaption>${trabajo.titulo}</figcaption>
                    <h3>${trabajo.subtitulo}</h3>
                    <p>${trabajo.descripcion}</p>
                    <button>${trabajo.boton}</button>
                `;

        contenedorTrabajos.appendChild(trabajoDiv);
      });
    })
    .catch((error) => console.error("Error al cargar en mistrabajos:", error));
});
