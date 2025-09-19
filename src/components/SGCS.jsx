
import {} from "../css/fondo.css";
import {} from "../css/SGCS.css";

import PC from "../assets/pc.png";
import codigo from "../assets/libro.png";

export const SGCS = () =>{
        //const navigate = useNavigate();
    return(
        <main>
            <div class="marco">
                <h1>GESTION DE LA CALIDAD DEL SOFTWARE  </h1>
                <img src={PC} alt=""  class="pc" width={300} height={300}/>
            </div>

            <h2>Fundamentación</h2>
            <p>
                La gestión de la calidad del software busca asegurar que un producto cumpla con las necesidades de los usuarios, que sea confiable y fácil de mantener. Su objetivo es garantizar que el software funciones de manera eficiente en distintos entornos y cumpla con los estándares reconocidos. Para ello se usan métricas de calidad que permuten evaluar aspectos como la funcionalidad, la seguridad, la eficiencia, la portabilidad y la usabilidad. Gracias a estas prácticas, se minimizan errores y se le ofrece al cliente un producto de confianza y buena calidad.
            </p>

            <h2>ISO 9126/25000</h2> 
            <p>
                La norma ISO 9126 fue de las primeras en definir características esenciales de la calidad del software, dividiéndola en atributos como la funcionabilidad, confiabilidad, usabilidad, eficiencia, mantenibilidad y portabilidad. Más adelante la remplazaron por la ISO/IEC 25000, conocida como SQauRE (Software Product Quality Requirements and Evaluation), que amplia y actualiza estas métricas. Estas normas sirven como guía internacional para medir y evaluar la calidad de un software, permitiendo que los proyectos tengan un marco de referencia común y confiable.
            </p>
            <img src={codigo} width={300} height={300} alt="" class="codigo" />

            <h2>Técnicas de aseguramiento desoftware</h2>
                <p>
                Son el conjunto de prácticas y actividades aplicadas a lo largo del ciclo de vida para garantizar la calidad del producto y del proceso: previenen y detectan defectos, verifican que se cumplan los requisitos y validan que el software funcione en condiciones reales.
            </p>

            <h2>PRUEBAS DE SOFTWARE</h2>
            <p>            
                Son el corazón del aseguramiento de calidad. Nos permite detectar errores, validad requerimientos y garantizar que el sistema funcione antes de ser entregado al usuario. Se realizan en diferentes etapas y niveles, adaptándose a la complejidad del proyecto
            </p>

            <h2>PRUEBA UNITARIA</h2>
            <p>
                Evalúa módulos o componentes individuales del software. El objetivo es asegurar que cada parte aislada funcione de acuerdo con lo esperado. Son pruebas rápidas y suelen automatizarse para mayor eficacia.
            </p>

            <h2> PRUEBA DE INTEGRACION </h2>
            <p>Verifica cómo interactúan los distintos módulos entre sí. Su meta es encontrar errores en la comunicación y compatibilidad de componentes. Permite descubrir problemas que no se ven en pruebas unitarias.
            </p>

            <h2>Prueba de sistema:</h2>
            <p>Examina el software completo como un todo. Acá se valida que el sistema cumpla con los requerimientos funcionales y no funcionales establecidos en la especificación.</p>
    
            <h2>Prueba de aceptación: </h2>
            <p>
                Se realizan junto al cliente o usuario final, con el fin de comprobar que el software satisface sus necesidades reales. Es la última etapa antes de la entrega del producto
            </p>

            <h2></h2>
            <p>
                Son aplicaciones que automatizan y organizan las actividades de aseguramiento
            </p>

            <h2>Herramientas de gestión de pruebas</h2>
            <p>
                Permiten organizar casos de pruebas, registrar resultados y llevar u control de que funcionalidades fueron evaluadas. Ayudan a planificar y ejecutar pruebas de forma sistemática, reduciendo olvidos o repeticiones innecesarias.
            </p>

            <h2>Seguimiento de defectos:</h2>
            <p>
                Registran errores detectados durante las pruebas, asignan prioridades y los distribuyen entre los desarrolladores para su corrección. Fundamentales para mantener trazabilidad y garantizar que no queden problemas sin resolver.
            </p>

            <h2>Análisis de calidad:</h2>
            <p>
                Examinan el código fuente para detectar malas prácticas, vulnerables o posibles fallos antes de ejecutar el software. Ejemplos son SonarQube para análisis estático y Selenium 
            </p>

            <h2></h2>
            <p>
                para automatizar pruebas funcionales. Con su uso, se mejora la seguridad y se aumenta la confianza en el producto final.
            </p>
    </main>
    );
}