
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
                Aquí ira la información. at efficitur elit interdum non. Maecenas mauris dui, pulvinar id
                accumsan at, scelerisque non nibh. Maecenas sem nibh, eleifend quis blandit eget, facilisis
                ut felis. Vestibulum finibus hendrerit magna. Suspendisse suscipit viverra elit ac commodo.
                Donec dignissim sem lacus, a maximus neque vestibulum sit amet. Curabitur efficitur ex in
                est mollis sollicitudin iaculis eu metus. Nam facilisis nibh est, nec placerat leo luctus at.
            </p>

            <h2>ISO 9126/25000</h2> 
            <p>
                Nam pretium luctus ante, at efficitur elit
                interdum non. Maecenas mauris dui, pulvinar id
                accumsan at, scelerisque non nibh. Maecenas
                sem nibh, eleifend quis blandit eget, facilisis ut
                felis. Vestibulum finibus hendrerit magna.
            </p>
            <img src={codigo} width={300} height={300} alt="" class="codigo" />

            <h2>Técnicas de aseguramiento desoftware</h2>
                <p>
                Nam pretium luctus ante, at efficitur elit
                interdum non. Maecenas mauris dui, pulvinar id
                accumsan at, scelerisque non nibh. Maecenas
                sem nibh, eleifend quis blandit eget, facilisis ut
                felis. Vestibulum finibus hendrerit magna.
            </p>
            <h2>PRUEBAS DE SOFTWARE</h2>
            <p>            
            Aquí ira la información. At efficitur elit interdum non. Maecenas mauris dui, pulvinar id
            accumsan at, scelerisque non nibh. Maecenas sem nibh, eleifend quis blandit eget, facilisis
            ut felis. Vestibulum finibus hendrerit magna.
            </p>
    </main>
    );
}