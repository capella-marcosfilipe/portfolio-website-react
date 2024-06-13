import { Link } from "react-router-dom";
import "../styles/index.css";

export default function Navbar() {
  return (
    <header className="cabecalho">
      <nav className="cabecalho__menu">
        <Link className="cabecalho__menu__link" to="/">
          Home
        </Link>
        <Link className="cabecalho__menu__link" to="/about">
          About me
        </Link>
        <Link className="cabecalho__menu__link" to="/education">
          My Education
        </Link>
        <Link className="cabecalho__menu__link" to="/portfolio">
          My Portfolio
        </Link>
        {/* <a className="cabecalho__menu__link" href="/pt-br/index">
          Versão em português
        </a> */}
      </nav>
    </header>
  );
}
