import { useNavigate } from "react-router-dom";
import "../css/logo.css";
import logoEquipo from "../assets/logo.png";
export const HeaderUNI = () => {
    //const navigate = useNavigate();
    const navigate = useNavigate();
    return (
    <header>

    <div className="logo">
    <img src={logoEquipo} alt="logo" width={190} height={190}/>ASOCIACION ANTI-PALA
    </div>
    <nav>
        <ul>
            <li><a onClick={() => navigate("/")}>inicio</a></li>
            <li><a onClick={() => navigate("/SGCS")}>SGCS</a></li>
            <li><a onClick={() => navigate("/Procesos")}>procesos</a></li>
            <li><a onClick={() => navigate("/Metodologías")}>metodologías</a></li>
            <li><a onClick={() => navigate("Recursos")}>recursos</a></li>
            <li><a onClick={() => navigate("Nosotros")}>nosotros</a></li>
        </ul>
        </nav>
    </header>
    );
};

