
import {} from "../css/fondo.css";
import {} from "../css/Recursos.css"

import Libro from "../assets/libro.png";
import links from "../assets/links.png";
import libro_text from "../assets/librotexto.png";

export const Recursos = () =>{
        //const navigate = useNavigate();
    return(
        <main>
            <div class="marco">
                <h1>RECURSOS</h1>
                <img src={Libro} alt="" class="pc" />
            </div>

            <h2>Glosario</h2>
            <img src={libro_text} alt=""  class="libro_text"/>
            <h3>Software</h3>
            <p>conjunto de programas y datos que permiten a una computadora realizar tareas específicas. Es el “cerebro” que da instrucciones al hardware.</p>
            
            <h3>Calidad del software</h3>
            <p>grado en que un software cumple con los requisitos, necesidades y expectativas del usuario</p>

            <h3>Métrica</h3>
            <p>medida que se utiliza para evaluar la eficiencia, rendimiento o calidad de un proceso o producto.</p>

            <h3>Estándar</h3>
            <p>conjunto de normas que definen criterios de calidad y buenas prácticas, como la ISO 9126 o la ISO 25000.</p>

            <h3>Pruebas de software</h3>
            <p>proceso que busca detectar errores o fallos en un programa antes de su entrega.</p>

            <h3>Caja blanca</h3>
            <p>tipo de prueba que analiza la estructura interna del código para verificar su correcto funcionamiento.</p>

            <h3>Caja negra</h3>
            <p>tipo de prueba que evalúa las funciones del software sin revisar el código, usando solo entradas y salidas.</p>

            <h3>Ciclo de vida del software (SDLC)</h3>
            <p>conjunto de etapas que guían la creación de un software, desde la planificación hasta el mantenimiento.</p>

            <h3>Modelo en cascada</h3>
            <p>método tradicional de desarrollo que avanza paso a paso, sin volver atrás en las fases anteriores.</p>

            <h3>Modelo iterativo e incremental</h3>
            <p>enfoque que divide el desarrollo en ciclos pequeños para entregar versiones funcionales del producto.</p>

            <h3>Metodologías ágiles</h3>
            <p>formas de trabajo flexibles que buscan entregar software de calidad adaptándose rápidamente a los cambios</p>

            <h3>Scrum</h3>
            <p>metodología ágil que organiza el trabajo en sprints cortos con roles definidos y revisiones constantes.</p>

            <h3>Kanban</h3>
            <p>sistema visual de gestión del flujo de trabajo que usa tableros con columnas para controlar el avance de las tareas.</p>

            <h3>XP (Extreme Programming)</h3>
            <p>metodología ágil centrada en la calidad del código y en la colaboración constante con el cliente.</p>

            <h3>Sprint</h3>
            <p>ciclo de trabajo breve en Scrum donde se desarrolla una parte funcional del producto.</p>

            <h3>Backlog</h3>
            <p>lista priorizada de tareas o funcionalidades que el equipo debe completar durante el desarrollo.</p>

            <h3>Daily meeting</h3>
            <p>reunión diaria y breve donde el equipo coordina avances, próximos pasos y posibles obstáculos.</p>

            <h3>Sprint review</h3>
            <p>reunión al final de un sprint donde se revisan los resultados y se obtiene retroalimentación del cliente.</p>

            <h3>Sprint retrospective</h3>
            <p>sesión posterior a la revisión del sprint para analizar qué mejorar en el siguiente ciclo.</p>

            <h3>WIP (Work In Process)</h3>
            <p>límite máximo de tareas que pueden estar en curso al mismo tiempo, para evitar la sobrecarga del equipo</p>

            <h2>Preguntas frecuentes:</h2>

            <h3>¿Cómo elijo si mi proyecto debe usar Scrum, Kanban o una metodología tradicional?</h3>
            <p>Elegí Scrum si necesitás entregas frecuentes y mucha interacción con el cliente; Kanban si tu flujo es continuo y priorizás visualizar tareas; un enfoque tradicional cuando los requisitos son muy estables y están regulados. Si dudás, empezá con un enfoque híbrido y adaptalo según lo que funcione en la práctica.</p>

            <h3>¿Cómo sé si el software que uso o desarrollo es “suficientemente” seguro?</h3>
            <p>No existe seguridad absoluta: priorizá prácticas básicas (análisis estático, pruebas de seguridad, revisión de código y actualizaciones periódicas). Si manejás datos sensibles, aplicá auditorías externas y controles normativos específicos.</p>

            <h3>¿Cuánto tiempo tarda en ver resultados reales aplicando metodologías ágiles?</h3>
            <p>En equipos pequeños y con buenas prácticas, se suelen ver mejoras en comunicación y entregas útiles en 1–3 sprints (2–8 semanas). La madurez del equipo y el compromiso del cliente aceleran estos resultados.</p>

            <h3>¿Cómo puedo medir si mi equipo está mejorando?</h3>
            <p>Usá indicadores simples: velocidad (puntos completados por sprint), tiempo medio de ciclo (lead time), cantidad de defectos en producción y satisfacción del cliente. Revisa estas métricas periódicamente y actúa sobre los problemas detectados.</p>

            <h3>¿Qué errores comunes debo evitar al implementar Scrum o Kanban por primera vez?</h3>
            <p>Evitar imponer roles sin formación, convertir reuniones en reportes largos, y no actualizar tableros. También evitar medir sólo horas trabajadas en vez de valor entregado; la clave es la disciplina y la retroalimentación real.</p>

            <h2>enlaces de interes</h2> 
            <img src={links} alt=""  class="links"/>
            <h3><a href="https://www.iso.org/standard/35733.html">norma ISO 9126/25000</a></h3>
            <p>Sitio oficial de la norma ISO 9126/25000, donde se detallan los estándares internacionales de calidad del software.</p>

            <h3><a href="https://www.agilealliance.org/agile101">Agile Alliance </a></h3>
            <p>Página de la Agile Alliance con información introductoria, principios y guías sobre las metodologías ágiles.</p>

            <h3><a href="https://www.scrum.org/resources/what-is-scrum">Scrum.org</a></h3>
            <p>Recurso oficial de Scrum.org con una explicación clara de los roles, artefactos y eventos del marco de trabajo Scrum.</p>
    </main>
    );
}