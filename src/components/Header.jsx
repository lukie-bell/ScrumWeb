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
            <li><a onClick={() => navigate("/")}>INICIO</a></li>
            <li><a onClick={() => navigate("/SGCS")}>SISTEMAS DE GESTION DE CALIDAD DE SOFTWARE</a></li>
            <li><a onClick={() => navigate("/Procesos")}>PROCESOS</a></li>
            <li><a onClick={() => navigate("/Metodologia")}>METODOLOGIAS</a></li>
            <li><a onClick={() => navigate("/Recursos")}>RECURSOS</a></li>
            <li><a onClick={() => navigate("/Nosostros")}>NOSOTROS</a></li>
        </ul>
        </nav>
    </header>
    );
};

