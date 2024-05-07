import "../styles/index.css";

export default function Navbar() {
  return (
    <header className="cabecalho">
      <nav className="cabecalho__menu">
        <a className="cabecalho__menu__link" href="/">
          Home
        </a>
        <a className="cabecalho__menu__link" href="about">
          About me
        </a>
        <a className="cabecalho__menu__link" href="education">
          My Education
        </a>
        <a className="cabecalho__menu__link" href="portfolio">
          My Portfolio
        </a>
        {/* <a className="cabecalho__menu__link" href="/pt-br/index">
          Versão em português
        </a> */}
      </nav>
    </header>
  );
}
