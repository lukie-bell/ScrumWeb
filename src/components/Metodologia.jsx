
import {} from "../css/fondo.css";
import {} from "../css/Metodologia.css";

import scrum_esjemplo from "../assets/imagen_2025-10-20_132429446-removebg-preview.png";
import Siclo from "../assets/siclo_sprint.png";
import roles from "../assets/Roles-SCRUM.jpg"
import kambam from "../assets/kamban.png"
import EX from "../assets/EX_graf.png"
export const Metodologia = () =>{
        //const navigate = useNavigate();
    return(
        <main>
            <div class="marco">
                <h1> METODOLOGIAS </h1>
                <img src={scrum_esjemplo} alt=""  class="pc"/>
            </div>
            <div class="texto">
                <h2>SCRUM</h2>
                <p>Scrum es una metodología ágil que organiza el trabajo en ciclos cortos llamados SPRINTS, donde se entregan versiones funcionales del producto. 
                    Se basa en la colaboración, la mejora continua y la adaptación a los cambios. Su objetivo es entregar software de calidad de forma rápida y flexible.
                </p>

                <h3>•Ventajas de Scrum</h3>
                <p>
                    Scrum promueve un desarrollo ágil, flexible y centrado en el valor del cliente. Su estructura en sprints cortos permite entregar resultados funcionales de forma continua al cliente, lo que facilita la detección temprana de errores y la adaptación a cambios de requisitos. 
                    Fomenta la colaboración constante entre los miembros del equipo, mejorando la comunicación y la motivación interna.
                    La participación activa del cliente en cada etapa asegura que el producto final responda mejor a sus necesidades reales. Gracias a su enfoque iterativo, se incrementa la calidad del software, se reducen los riesgos y se consigue una mayor transparencia en el proceso de desarrollo.
                </p>

                <h3>•Desventajas de Scrum</h3>
                <p>
                    A pesar de sus beneficios, Scrum puede presentar dificultades si no se aplica correctamente. Requiere equipos comprometidos,
                    auto organizados y con buena comunicación; de lo contrario, el proceso pierde efectividad. La falta de experiencia en el uso de la metodología puede causar 
                    confusión en los roles y en la planificación de los sprints. La necesidad de reuniones frecuentes y revisiones constantes puede consumir tiempo si no se gestionan con eficiencia. En proyectos grandes o con equipos distribuidos, 
                    mantener la sincronización puede ser un desafío, y sin un liderazgo adecuado, el control del avance puede volverse difuso.
                </p>

                <h2>Siclo del Sprint</h2>
                <p>
                    Sprint: es un ciclo de trabajo con una duración fija (generalmente de una a cuatro semanas) donde el equipo desarrolla un incremento funcional del producto. Cada sprint debe tener un objetivo claro y detallado, al finalizar se presenta un resultado tangible que pueda ser evaluado.
                </p>
                <img src={Siclo} alt="" class="Siclo"/>

                <h3>Product Backlog (pila del producto)</h3>
                <p>
                    Es una lista priorizada de todas las funcionalidades, mejoras y correcciones que requiere el producto. Representa la fuente principal de trabajo para el equipo y está en constante actualización según las necesidades del cliente y los avances del proyecto.
                </p>

                <h3>Sprint Backlog (pila del Sprint)</h3>
                <p>
                    Es una lista priorizada de todas las funcionalidades, mejoras y correcciones que requiere el producto. Esta lista son todas las tareas que se llabaran a cabo en el sprint.
                </p>

                <h3>Daily Meeting (o Scrum diario)</h3>
                <p>
                    Son reuniones breves diarias, de no más de 15 minutos, en las que los miembros del equipo sincronizan su trabajo, mencionan lo que hicieron el día anterior, lo que harán hoy y los posibles impedimentos. Su objetivo es mejorar la comunicación y detectar problemas rápidamente.
                </p>

                <h3>Sprint Review(revisione)</h3>
                <p>
                    Es la reunión que se realiza al final de cada sprint para revisar el trabajo completado. El equipo presenta los resultados al Product Owner y a los interesados, se evalúan los logros del sprint y se decide qué ajustes son necesarios para el siguiente.
                </p>

                <h3>Sprint Retrospectiva</h3>
                <p>
                    Se hace después de la revisión y antes del inicio del próximo sprint. En ella, el equipo reflexiona sobre su forma de trabajo, analiza qué funcionó bien, qué debe mejorarse y acuerda acciones concretas para optimizar la eficiencia y colaboración en el futuro.
                </p>



                <h2>ROLES</h2>
                <img src={roles} alt=""  class="roles"/>
                
                <h3>SCRUM MASTER</h3>
                <p>
                    El Scrum Master es el facilitador del equipo. Su principal función es asegurar que el proceso Scrum se aplique correctamente, eliminando obstáculos y promoviendo la colaboración. Actúa como un guía, ayudando al equipo a mejorar continuamente y fomentando un ambiente de trabajo productivo y saludable.
                </p>
                
                <h3>PRODUCT OWNER</h3>
                <p>
                    El Product Owner representa la voz del cliente y se encarga de definir la visión del producto. Prioriza las tareas del backlog, comunica los objetivos al equipo de desarrollo y garantiza que cada entrega aporte valor al usuario final. Es el nexo entre el cliente y el equipo técnico.
                </p>

                <h3>EQUIPO DE DESAROLLO</h3>
                <p>
                    El Equipo de Desarrollo está compuesto por profesionales que transforman los requerimientos en un producto funcional. Son responsables de planificar, diseñar, construir y probar los incrementos del producto en cada sprint, colaborando de manera autónoma y autoorganizada para alcanzar los objetivos definidos.
                </p>

                <h2>KAMBAN</h2>
                <p>
                    Kanban es una técnica ágil de gestión visual que permite controlar el flujo de trabajo de manera continua, sin necesidad de dividirlo en sprints o etapas con tiempos fijos.
                    Su funcionamiento se basa en el uso de un tablero donde el equipo registra las tareas o historias de usuario, organizándolas según su estado: “pendiente”, “en curso” y “terminado”. Este tablero se adapta a las necesidades del proyecto e incluso puede incluir fases adicionales como “testeado” o “validado”. 
                    Kanban ofrece una visión clara y compartida del avance del trabajo, facilitando la comunicación dentro del equipo y permitiendo detectar cuellos de botella o retrasos.
                </p>

                <h3>CONCEPTO GENERALES</h3>
                <p>
                    Una de sus características clave es el WIP (Work In Process), que limita la cantidad de tareas que pueden estar en progreso simultáneamente, evitando la sobrecarga y ayudando a mantener la productividad. Además, al no tener fechas de entrega rígidas, el método promueve la mejora continua y la eficiencia, pero requiere disciplina para evitar retrasos por perfeccionismo o procrastinación. La información visual que proporciona el tablero ayuda a identificar problemas, ajustar prioridades y optimizar la distribución de tareas entre los miembros del equipo, logrando un flujo de trabajo más equilibrado y transparente.
                </p>

                <img src={kambam} alt=""  class="kamban"/>

                <h3>VENTAJAS</h3>
                <p>•Ofrece una visión visual y actualizada del proceso de trabajo, lo que facilita la organización y la detección de problemas.</p>
                <p>•Mejora la comunicación y la colaboración dentro del equipo, ya que todos pueden ver el estado de las tareas en tiempo real.</p>
                <p>•Permite adaptarse fácilmente a cambios de prioridades sin necesidad de re planificar todo el proyecto.</p>
                <p>•El uso del WIP ayuda a mantener el enfoque y evita la saturación del equipo.</p>
                <p>•Fomenta la mejora continua y la eficiencia operativa.</p>

                <h3>DESVENTAJAS</h3>
                <p>•Al no contar con plazos fijos, puede generar retrasos si el equipo no se gestiona con disciplina.</p>
                <p>•Si el tablero no se actualiza correctamente, puede perder su utilidad y generar confusión.</p>
                <p>•En equipos grandes, puede ser más difícil mantener la coordinación y el control del flujo.</p>
                <p>•Requiere compromiso constante para mantener la visibilidad y el equilibrio del trabajo.</p>

                <h2>ROLES</h2>
                <p>En Kanban no existen roles rígidos, pero sí funciones colaborativas que permiten un flujo de trabajo equilibrado.</p>

                <h3>ADMINISTRADOR DEL FLUJO</h3>
                <p>es quien supervisa la carga de trabajo y asegura que las tareas se muevan correctamente por las etapas del tablero. Se encarga de identificar bloqueos y coordinar soluciones.</p>

                <h3>EQUIPO DE DESARROLLO</h3>
                <p>compuesto por los miembros que realizan las tareas técnicas, de diseño o documentación. Su trabajo se centra en mantener el ritmo del flujo y cumplir los plazos sin comprometer la calidad.</p>

                <h3>SUPERVISADOR O LIDER</h3>
                <p>compuesto por los miembros que realizan las tareas técnicas, de diseño o documentación. Su trabajo se centra en mantener el ritmo del flujo y cumplir los plazos sin comprometer la calidad.</p>
                

                <h2>XP(Extreme Programming)</h2>
                <p>Extreme Programming (XP) es una metodología ágil centrada en la calidad del código y en la satisfacción del cliente. Promueve la entrega continua de versiones funcionales, el trabajo en equipo y la retroalimentación constante. Se enfoca especialmente en las buenas prácticas de programación.</p>
                <img src={EX} alt=""  class="kamban"/>
                <h3>VENTAJA</h3>
                <p>Permite detectar errores de forma temprana, garantizando un software más estable y confiable. Fomenta la colaboración constante, mejora la calidad del código y facilita la adaptación a los cambios del cliente. La práctica de trabajar en pareja reduce errores, aumenta el aprendizaje mutuo y eleva la productividad. Al realizar entregas frecuentes, el cliente puede ver avances reales en poco tiempo.</p>
                <h3>Desventajas</h3>
                <p>Requiere un alto nivel de disciplina y compromiso del equipo, además de experiencia técnica sólida para aplicar correctamente las prácticas de XP. Puede resultar difícil de implementar en proyectos grandes o con equipos distribuidos. La programación en pareja puede aumentar los costos iniciales y si no se gestiona bien, generar conflictos o pérdida de eficiencia.</p>
                
                <h2>ROLES</h2>
                <h3>Programadores</h3>
                <p> trabajan en pares para garantizar un código limpio, comprensible y libre de errores. Son responsables de aplicar buenas prácticas y mantener la calidad técnica del proyecto.</p>

                <h3>Cliente</h3>
                <p>participa activamente durante todo el proceso, aportando requisitos, validando las funciones y priorizando las necesidades del negocio. Su retroalimentación es clave para orientar el desarrollo.</p>
                
                <h3>Coach o facilitador</h3>
                <p>se encarga de guiar al equipo en la correcta aplicación de las prácticas de XP, fomentar la colaboración, resolver conflictos y promover la mejora continua dentro del grupo.</p>

            </div>
    </main>
    );
}

