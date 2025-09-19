import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {} from "../css/Inicio.css";
import {} from "../css/fondo.css";
import laptop from "../assets/laptop.png";
import SGDC from "../assets/Texto (1).png"
import Procesos from "../assets/Texto (2).png"
import Metodologías from "../assets/Texto (3).png"
import recursos from "../assets/Texto (4).png"
import nosotros from "../assets/Texto (5).png"
import Comparador from "../assets/Texto (6).png"
import Encuesta from "../assets/Texto (7).png"

export const Inicio = () =>{
        const navigate = useNavigate();
    return(
<main>

    <h1>SISTEMAS DE GESTIÓN DE CALIDAD DE SOFTWARE</h1>
    <p>
        ¡Bienvenido! En esta página encontrará información acerca de los Sistemas de Gestión de Calidad de Software (SGCS). 
        Los SGCS son enfoques estructurados que aseguran que el software desarrollado
        cumpla con ciertos estándares de calidad; descubra cuáles son, como se definieron y
        mucho más explorando nuestra página web!

    </p>

    <div class="cards">
        <div class="card" onClick={() => navigate("/SGCS")}>
            <img src={SGDC} alt="Laptop" width={250} height={250}/>
            <p>Descubra fundamentos, técnicas y herramientas</p>
        </div>

        <div class="card" onClick={() => navigate("/Procesos")}>
            <img src={Procesos} alt="Laptop" width={250} height={250}/>
            <p>Descubra todo acerca del ciclo de vida del desarrollo y modelos tradicionales</p>
        </div>

        <div class="card" onClick={() => navigate("/Metodologia")}>
            <img src={Metodologías} alt="Laptop" width={250} height={250} />
            <p>Descubra metodologías ágiles como Scrum, Kanban, XP, y más</p>
        </div>

        <div class="card" onClick={() => navigate("/Recursos")}>
            <img src={recursos} alt="Laptop" width={250} height={250}/>
            <p>Aqui encontrará información importante como: glosario, preguntas frecuentes, etc.</p>
        </div>

        <div class="card"  onClick={() => navigate("/Nosostros")}>
            <img src={nosotros} alt="Laptop" width={250} height={250}/>
            <p>Información acerca del   equipo detrás de la página y su motivación</p>
        </div>

        </div>
        <h1>FUNCIONES INTERACTIVAS</h1>
        <div class="marcoOsc">
        
            <div class="card">
                <img src={Comparador} alt="Laptop" width={250} height={250}/>
                <p>Genere interesantes cuadros comparativos a partir de dos o mas metodologías!</p>
            </div>

            <div class="card">
                <img src={Encuesta} alt="Laptop" width={250} height={250}/>
                <p>Descubra la mejor metodología para su proyecto de software con nuestra encuesta interactiva!</p>
            </div>
        </div>
    </main>
    );
} 

export default Inicio;