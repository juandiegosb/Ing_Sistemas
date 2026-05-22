function mostrarPerfil(opcion) {
      const resultado = document.getElementById('resultado');
      let texto = '';

      const perfiles = {
        apps: {
          titulo: 'Perfil: Desarrollador móvil',
          descripcion: 'Si te interesa crear aplicaciones móviles, Ingeniería de Sistemas te permite aprender sobre diseño de interfaces, lógica de programación, consumo de APIs, bases de datos y experiencia de usuario.',
          recomendacion: 'Ruta recomendada: programación, desarrollo móvil, bases de datos e ingeniería de software.'
        },
        web: {
          titulo: 'Perfil: Desarrollador web',
          descripcion: 'Si te gustan las páginas web, puedes enfocarte en frontend, backend, bases de datos, despliegue de aplicaciones y construcción de plataformas completas.',
          recomendacion: 'Ruta recomendada: HTML, CSS, JavaScript, frameworks web, backend y bases de datos.'
        },
        ia: {
          titulo: 'Perfil: Innovador en inteligencia artificial',
          descripcion: 'Si te llama la atención la IA, puedes aprender a trabajar con datos, modelos predictivos, automatización, aprendizaje automático y herramientas inteligentes.',
          recomendacion: 'Ruta recomendada: matemáticas, Python, análisis de datos, machine learning e inteligencia artificial.'
        },
        datos: {
          titulo: 'Perfil: Analista de datos',
          descripcion: 'Si te interesa organizar e interpretar información, puedes trabajar con bases de datos, reportes, visualización de datos e indicadores para la toma de decisiones.',
          recomendacion: 'Ruta recomendada: SQL, bases de datos, estadística, dashboards y analítica de datos.'
        },
        seguridad: {
          titulo: 'Perfil: Especialista en ciberseguridad',
          descripcion: 'Si te interesa proteger sistemas, puedes estudiar redes, seguridad informática, análisis de vulnerabilidades, gestión de riesgos y buenas prácticas de protección digital.',
          recomendacion: 'Ruta recomendada: redes, sistemas operativos, seguridad informática, pruebas de vulnerabilidad y gestión de riesgos.'
        }
      };

      texto = `
        <strong>${perfiles[opcion].titulo}</strong><br><br>
        ${perfiles[opcion].descripcion}<br><br>
        <em>${perfiles[opcion].recomendacion}</em>
      `;

      resultado.innerHTML = texto;
      resultado.style.display = 'block';
    }

    function calcularQuiz() {
  const totalPreguntas = 8;

  const perfiles = {
    dev: {
      nombre: "Desarrollo de software",
      titulo: "Perfil orientado al desarrollo de software",
      descripcion:
        "Te interesa crear aplicaciones, páginas web, sistemas y soluciones funcionales para usuarios reales.",
      ruta:
        "Ruta recomendada: programación, desarrollo web, aplicaciones móviles, bases de datos e ingeniería de software.",
      roles: ["Desarrollador web", "Desarrollador móvil", "Ingeniero de software", "Programador backend"]
    },
    data: {
      nombre: "Datos e inteligencia artificial",
      titulo: "Perfil orientado a datos e inteligencia artificial",
      descripcion:
        "Te interesa analizar información, encontrar patrones, crear reportes y apoyar decisiones usando datos.",
      ruta:
        "Ruta recomendada: bases de datos, SQL, estadística, visualización de datos, Python e inteligencia artificial.",
      roles: ["Analista de datos", "Ingeniero de datos", "Analista BI", "Desarrollador de IA"]
    },
    sec: {
      nombre: "Ciberseguridad",
      titulo: "Perfil orientado a ciberseguridad",
      descripcion:
        "Te interesa proteger sistemas, prevenir ataques, analizar riesgos y cuidar la información de usuarios y empresas.",
      ruta:
        "Ruta recomendada: redes, sistemas operativos, seguridad informática, análisis de vulnerabilidades y gestión de riesgos.",
      roles: ["Analista de seguridad", "Especialista en ciberseguridad", "Auditor TI", "Administrador de seguridad"]
    },
    redes: {
      nombre: "Redes e infraestructura",
      titulo: "Perfil orientado a redes e infraestructura",
      descripcion:
        "Te interesa entender cómo se conectan los sistemas, cómo funcionan los servidores, las redes y los servicios tecnológicos.",
      ruta:
        "Ruta recomendada: redes, sistemas operativos, cloud computing, servidores, infraestructura y servicios distribuidos.",
      roles: ["Administrador de redes", "Soporte de infraestructura", "Administrador de servidores", "Ingeniero cloud"]
    },
    gestion: {
      nombre: "Gestión de proyectos tecnológicos",
      titulo: "Perfil orientado a gestión de proyectos TI",
      descripcion:
        "Te interesa organizar equipos, levantar requerimientos, planear entregas y convertir necesidades en soluciones tecnológicas.",
      ruta:
        "Ruta recomendada: ingeniería de software, metodologías ágiles, gestión de proyectos, análisis de requerimientos y liderazgo TI.",
      roles: ["Líder de proyectos TI", "Scrum Master", "Analista funcional", "Product Owner"]
    }
  };

  const puntaje = {
    dev: 0,
    data: 0,
    sec: 0,
    redes: 0,
    gestion: 0
  };

  const respuestas = [];

  for (let i = 1; i <= totalPreguntas; i++) {
    const respuesta = document.querySelector(`input[name="q${i}"]:checked`);

    if (!respuesta) {
      const resultadoQuiz = document.getElementById("resultadoQuiz");
      resultadoQuiz.innerHTML = `
        <strong>Faltan respuestas.</strong><br>
        Por favor responde la pregunta ${i} para calcular tu perfil.
      `;
      resultadoQuiz.style.display = "block";
      return;
    }

    puntaje[respuesta.value]++;

    respuestas.push({
      pregunta: i,
      perfil: respuesta.value,
      texto: respuesta.parentElement.textContent.trim()
    });
  }

  const perfilesOrdenados = Object.entries(puntaje).sort((a, b) => b[1] - a[1]);
  const perfilGanador = perfilesOrdenados[0][0];
  const puntosGanador = perfilesOrdenados[0][1];
  const porcentajeGanador = Math.round((puntosGanador / totalPreguntas) * 100);

  const empate = perfilesOrdenados.filter(item => item[1] === puntosGanador);

  let mensajeEmpate = "";
  if (empate.length > 1) {
    mensajeEmpate = `
      <p>
        <strong>Nota:</strong> hubo un empate entre varios perfiles. 
        Se muestra como principal <strong>${perfiles[perfilGanador].nombre}</strong>, 
        pero también tienes afinidad con:
        ${empate.map(item => perfiles[item[0]].nombre).join(", ")}.
      </p>
    `;
  }

  const barras = Object.entries(puntaje)
    .map(([clave, valor]) => {
      const porcentaje = Math.round((valor / totalPreguntas) * 100);

      return `
        <div class="barra-item">
          <div class="barra-header">
            <span>${perfiles[clave].nombre}</span>
            <span>${valor}/${totalPreguntas} respuestas - ${porcentaje}%</span>
          </div>
          <div class="barra-fondo">
            <div class="barra-progreso" style="width: ${porcentaje}%"></div>
          </div>
        </div>
      `;
    })
    .join("");

  const razones = respuestas
    .filter(respuesta => respuesta.perfil === perfilGanador)
    .map(respuesta => `<li>Pregunta ${respuesta.pregunta}: ${respuesta.texto}</li>`)
    .join("");

  const roles = perfiles[perfilGanador].roles
    .map(rol => `<span class="tag">${rol}</span>`)
    .join(" ");

  const contenido = `
    <h2>Resultado del test vocacional</h2>

    <div class="resultado-principal">
      <h3>${perfiles[perfilGanador].titulo}</h3>
      <p>${perfiles[perfilGanador].descripcion}</p>
      <br>
      <p><strong>Coincidencia principal:</strong> ${porcentajeGanador}%</p>
      <p><strong>${perfiles[perfilGanador].ruta}</strong></p>
    </div>

    ${mensajeEmpate}

    <h3>¿Por qué se calculó así?</h3>
    <div class="explicacion-calculo">
      <p>
        El sistema revisó tus ${totalPreguntas} respuestas. Cada respuesta suma 1 punto al perfil relacionado.
        El perfil con más puntos fue <strong>${perfiles[perfilGanador].nombre}</strong>, 
        con <strong>${puntosGanador}</strong> de <strong>${totalPreguntas}</strong> respuestas.
      </p>

      <ul>
        ${razones}
      </ul>
    </div>

    <h3 style="margin-top: 22px;">Distribución de tus respuestas</h3>
    <div class="barras-perfil">
      ${barras}
    </div>

    <h3 style="margin-top: 22px;">Roles relacionados</h3>
    <div class="buttons" style="justify-content: flex-start; margin-top: 12px;">
      ${roles}
    </div>
  `;

  document.getElementById("contenidoModalResultado").innerHTML = contenido;
  document.getElementById("modalResultado").classList.add("active");

  const resultadoQuiz = document.getElementById("resultadoQuiz");
  resultadoQuiz.innerHTML = `
    <strong>Resultado generado:</strong> ${perfiles[perfilGanador].nombre}. 
    Se abrió una ventana emergente con la explicación completa.
  `;
  resultadoQuiz.style.display = "block";
}

function cerrarModalResultado() {
  document.getElementById("modalResultado").classList.remove("active");
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    cerrarModalResultado();
  }
});
