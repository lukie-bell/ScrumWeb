
import {} from "../css/fondo.css";
import {} from "../css/Procesos.css";

import PC from "../assets/pc.png";
import mujer from "../assets/mujer.jpeg"
import cascada from "../assets/cascada.png"
import V from "../assets/V.png"
import iteraccion from "../assets/iteraccion.png"
import incrementacion from "../assets/incrementacion.png"
import kamba from "../assets/kamba_graf1.png";
import XP from "../assets/XP_graf.png";
export const Procesos = () =>{
        //const navigate = useNavigate();
    return(
        <main>
            <div class="marco">
                <h1> PROCESOS </h1>
                <img src={PC} alt=""  class="pc"/>
            </div>
            <div class="texto">
                <h2>El ciclo de vida del software (SDLC) </h2>
                <p>
                    El ciclo de vida del software (SDLC) es un proceso estructurado que define las etapas necesarias para crear un sistema de calidad.
                    Nos permite organizar desde la planificación inicial hasta el mantenimiento final, asegurando que el producto cumpla con los requisitos del cliente 
                    y los estándares de calidad establecidos. Cada etapa tiene un objetivo específico y contribuye a un desarrollo ordenado y eficiente.
                </p>

                <h3>•Etapa 1: Análisis de requisitos</h3>
                <p>
                    En esta fase se identifican y documentan las necesidades del cliente, así como las funcionalidades que debe cumplir el sistema. 
                    Es crucial porque de acá surgen las bases del proyecto y se definen los objetivos a alcanzar.
                </p>
                <img src={mujer} alt="" class="mujer" width={500} height={300}/>
                <h3>•Etapa 2: Diseño</h3>
                <p>
                    Consiste en transformar los requisitos en una arquitectura técnica que guíe el desarrollo.
                    Se definen diagramas, interfaces, estructuras de datos y modelos que servirán como plano para la programación.
                </p>
                
                <h3>•Etapa 3: Implementación</h3>
                <p>
                    En esta etapa los programadores convierten el diseño en código funcional. 
                    Se desarrollan los módulos del software, integrando las funciones planificadas y asegurando su correcto funcionamiento inicial.
                </p>

                <h3>•Etapa 4: Pruebas</h3>
                <p>Se realizan distintos tipos de pruebas para validar que el software cumple con los requisitos planteados y que no existan errores críticos. 
                    El objetivo es garantizar calidad, rendimiento y confiabilidad del sistema.
                </p>
                <h3>•Etapa 5: Mantenimiento</h3>
                <p>
                    El software, una vez entregado, requiere correcciones, actualizaciones y mejoras para adaptarse a cambios en los requerimientos o en el entorno tecnológico. 
                    Esta fase asegura la continuidad y vigencia del sistema.
                </p>

                <h2>modelo en cascada</h2>
                <p>
                    El modelo en cascada es uno de los enfoques más clásicos del desarrollo de software. 
                    Se basa en avanzar de manera secuencial a través de fases bien definidas: requisitos, diseño, implementación, verificación y mantenimiento. 
                    Cada etapa debe completarse antes de pasar a la siguiente, lo que facilita la planificación y el control del proyecto. 
                </p>
                <img src={cascada} alt="" class="cascada" width={700} height={300}/>
                <p>
                    Su principal fortaleza es la claridad y el orden, pero la rigidez es su mayor desventaja: 
                    si surge un error en fases tempranas o cambian los requisitos del cliente, resulta costoso y complicado volver atrás. 
                    Por eso, se recomienda en proyectos con requisitos muy bien definidos y estables.
                </p>

                <h2>modelo en V</h2>
                <p>
                    El modelo en V surge como una mejora al modelo en cascada, manteniendo su estructura secuencial, pero vinculando cada fase de desarrollo con una fase de prueba equivalente. 
                    Así, por ejemplo, el diseño de requisitos se relaciona con las pruebas de aceptación, el diseño técnico con las pruebas de integración y el desarrollo de componentes con las pruebas unitarias. 
                </p>
                <img src={V} alt="" class="V" width={700} height={300}/>
                <p>
                    De esta forma se asegura que cada etapa tenga un control de calidad inmediato, reduciendo el riesgo de errores críticos al final del proyecto. 
                    Sin embargo, al igual que el modelo en cascada, es poco flexible ante cambios inesperados, por lo que se adapta mejor a proyectos donde los requisitos están claros desde el inicio.
                </p>

                <h2>modelo iterativo e incremental</h2>
                <p>
                    Este modelo propone desarrollar el software en ciclos repetidos (iteraciones) y entregar versiones funcionales parciales (incrementos) en cada etapa. 
                    En lugar de esperar al final para ver el producto completo, los usuarios reciben versiones intermedias que pueden probar y validar, lo que permite detectar errores y ajustar los requisitos de manera temprana. 
                </p>
                <h3>iterativo</h3>
                <img src={iteraccion} alt="" class="iteraccion" height={200}/>
                <h3>incremental</h3>
                <img src={incrementacion} alt="" class="incrementacion" height={200}/>
                <p>
                    Su mayor ventaja es la flexibilidad y la retroalimentación constante entre desarrolladores y clientes, lo que mejora la calidad y satisfacción del producto final.
                    No obstante, requiere una gestión más compleja y mayor compromiso del cliente, ya que su participación es clave durante todo el proceso.
                </p>

                <h2>SCRUM</h2>
                <p>
                    Scrum es una metodología ágil que organiza el trabajo en ciclos cortos llamados SPRINTS, donde se entregan versiones funcionales del producto. 
                    Se basa en la colaboración, la mejora continua y la adaptación a los cambios. Su objetivo es entregar software de calidad de forma rápida y flexible.
                </p>
                //Grafico

                <h2>Kanban </h2>
                <img src={kamba} alt="" class="kamba"/>
                <p>
                    Kanban es una técnica ágil de gestión visual que permite controlar el flujo de trabajo de manera continua, sin necesidad de dividirlo en sprints o etapas con tiempos fijos. 
                    Su funcionamiento se basa en el uso de un tablero donde el equipo registra las tareas o historias de usuario, organizándolas según su estado: “pendiente”, “en curso” y “terminado”. 
                    Este tablero se adapta a las necesidades del proyecto e incluso puede incluir fases adicionales como “testeado” o “validado”. Kanban ofrece una visión clara y compartida del avance del trabajo, 
                    facilitando la comunicación dentro del equipo y permitiendo detectar cuellos de botella o retrasos.
                </p>



                <h2>XP</h2>
                <p>
                    Extreme Programming (XP) es una metodología ágil centrada en la calidad del código y en la satisfacción del cliente. 
                    Promueve la entrega continua de versiones funcionales, el trabajo en equipo y la retroalimentación constante. 
                    Se enfoca especialmente en las buenas prácticas de programación.
                </p>
                <img src={XP} alt="" class="XP"/>
            </div>
    </main>
    );
}