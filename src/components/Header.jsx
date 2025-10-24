import { NavLink, useNavigate } from "react-router-dom";
import "../css/logo.css";
import logoEquipo from "../assets/logo.png";

export const HeaderUNI = () => {
    const navigate = useNavigate();

    return (
        <header>
            <div className="logo">
                <img src={logoEquipo} alt="logo" width={190} height={190} />
                ASOCIACION ANTI-PALA
            </div>

            <nav>
                <ul>
                    <li><NavLink to="/" end>INICIO</NavLink></li>
                    <li><NavLink to="/SGCS">SISTEMAS DE GESTION DE CALIDAD DE SOFTWARE</NavLink></li>
                    <li><NavLink to="/Procesos">PROCESOS</NavLink></li>
                    <li><NavLink to="/Metodologia">METODOLOGIAS</NavLink></li>
                    <li><NavLink to="/Recursos">RECURSOS</NavLink></li>
                    <li><NavLink to="/Nosostros">NOSOTROS</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};
