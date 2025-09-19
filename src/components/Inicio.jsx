import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {} from "../css/Inicio.css";
import {} from "../css/fondo.css";
import laptop from "../assets/laptop.png";


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
            <h2>SGCS</h2>
            <img src={laptop} alt="Laptop" width={250} height={250}/>
            <p>Descubra fundamentos, técnicas y herramientas</p>
        </div>

        <div class="card" onClick={() => navigate("/Procesos")}>
            <h2>Procesos</h2>
            <img src={laptop} alt="Laptop" width={250} height={250}/>
            <p>Descubra todo acerca del ciclo de vida del desarrollo y modelos tradicionales</p>
        </div>

        <div class="card">
            <h2>Metodologías</h2>
            <img src={laptop} alt="Laptop" width={250} height={250}/>
            <p>Descubra metodologías ágiles como Scrum, Kanban, XP, y más</p>
        </div>

        <div class="card">
            <h2>recursos</h2>
            <img src={laptop} alt="Laptop" width={250} height={250}/>
            <p>Aqui encontrará información importante como: glosario, preguntas frecuentes, etc.</p>
        </div>

        <div class="card">
            <h2>nosotros</h2>
            <img src={laptop} alt="Laptop" width={250} height={250}/>
            <p>Información acerca del   equipo detrás de la página y su motivación</p>
        </div>

        </div>
        <h1>FUNCIONES INTERACTIVAS</h1>
        <div class="marcoOsc">
        
            <div class="card">
                <h2>Comparador</h2>
                <img src={laptop} alt="Laptop" width={250} height={250}/>
                <p>Genere interesantes cuadros comparativos a partir de dos o mas metodologías!</p>
            </div>

            <div class="card">
                <h2>Encuesta</h2>
                <img src={laptop} alt="Laptop" width={250} height={250}/>
                <p>Descubra la mejor metodología para su proyecto de software con nuestra encuesta interactiva!</p>
            </div>
        </div>
    </main>
    );
} 

export default Inicio;