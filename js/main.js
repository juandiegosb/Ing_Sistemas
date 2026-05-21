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
      const respuestas = [
        document.querySelector('input[name="q1"]:checked'),
        document.querySelector('input[name="q2"]:checked'),
        document.querySelector('input[name="q3"]:checked')
      ];

      const resultadoQuiz = document.getElementById('resultadoQuiz');

      if (respuestas.includes(null)) {
        resultadoQuiz.innerHTML = '<strong>Faltan respuestas.</strong><br>Por favor responde las tres preguntas para calcular tu perfil.';
        resultadoQuiz.style.display = 'block';
        return;
      }

      const puntaje = {
        dev: 0,
        data: 0,
        sec: 0
      };

      respuestas.forEach(respuesta => {
        puntaje[respuesta.value]++;
      });

      let perfil = '';

      if (puntaje.dev >= puntaje.data && puntaje.dev >= puntaje.sec) {
        perfil = `
          <strong>Resultado: perfil orientado al desarrollo de software.</strong><br>
          Te interesan la construcción de aplicaciones, la programación y el diseño de soluciones funcionales.
          En Ingeniería de Sistemas podrías enfocarte en desarrollo web, móvil o ingeniería de software.
        `;
      } else if (puntaje.data >= puntaje.dev && puntaje.data >= puntaje.sec) {
        perfil = `
          <strong>Resultado: perfil orientado a datos e inteligencia artificial.</strong><br>
          Te interesa analizar información, encontrar patrones y generar conocimiento a partir de datos.
          Podrías enfocarte en bases de datos, analítica, machine learning o inteligencia artificial.
        `;
      } else {
        perfil = `
          <strong>Resultado: perfil orientado a ciberseguridad.</strong><br>
          Te interesa proteger sistemas, prevenir amenazas y analizar riesgos tecnológicos.
          Podrías enfocarte en redes, seguridad informática, auditoría o gestión de riesgos digitales.
        `;
      }

      resultadoQuiz.innerHTML = perfil;
      resultadoQuiz.style.display = 'block';
    }
