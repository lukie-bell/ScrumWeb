import {} from "../css/fondo.css";
import {} from "../css/Nosotros.css";

import PC from "../assets/pc.png";
import nahuel from "../assets/nauel.jpg";
import agus from "../assets/yo.jpeg";
import blaze from "../assets/blaze.png";
export const Nosotros = () =>{
        //const navigate = useNavigate();
    return(
        <main>
            <div class="marco">
                <h1> ACERCA DEL EQUIPO </h1>
                <img src={PC} alt=""  class="pc"/>
            </div>
            <div class="texto">
                <h2>¿Quienes somos?</h2>
                <p>
                    Somos AAP, la UNICA asociacion anti-pala de todo neuquen, que nos dedicamos a crear paginas web usando la metodologia SCRUM, este equipo muy probablemente se vaya a disolver despues de su primer proyecto.
                </p>
                <div class="equipo">
                    <div class="miembro">
                        <img src="img/bauti.jpg" alt="Foto de perfil" class="avatar" />
                        <h3 class="nombre">bautista perez</h3>
                        <p class="rol">Scrum Master</p>
                    </div>

                <div class="miembro">
                <img src= {blaze} alt="Foto de perfil" class="avatar" />
                <h3 class="nombre">blaze esandi</h3>
                <p class="rol">diseñador/tester</p>
                </div>

                <div class="miembro">
                    <img src={nahuel} alt="Foto de perfil" class="avatar" />
                    <h3 class="nombre">Nahuel Barrientos</h3>
                    <p class="rol"> Documentador</p>
                </div>

                <div class="miembro">
                    <img src={agus} alt="Foto de perfil" class="avatar" />
                    <h3 class="nombre">Agustin Gonzalez</h3>
                    <p class="rol">programador</p>
                </div>

                </div>
            </div>
    </main>
    );
}
