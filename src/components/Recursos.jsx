
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

            <h3>Ciclo de vida del software</h3>
            <p>
                conjunto de etapas que guían la creación de un software, desde la idea inicial hasta su mantenimiento una vez entregado.
            </p>

            <h3>Prototipo</h3>
            <p>versión inicial o de prueba de un software que sirve para evaluar ideas, detectar errores y mejorar antes del producto final.</p>

            <h3>Metodología ágil</h3>
            <p>forma flexible de desarrollar software enfocada en la colaboración del equipo, la adaptación al cambio y la entrega continua de resultados funcionales.</p>

            <h3>Scrum</h3>
            <p>marco de trabajo ágil basado en roles, reuniones y ciclos cortos de trabajo llamados SPRINT, cuyo objetivo es mejorar continuamente el producto y el proceso.</p>

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