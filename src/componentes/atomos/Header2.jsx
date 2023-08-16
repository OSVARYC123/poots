import LogoPoots from "../../assets/img/logo.png";
import "../../assets/styles/Header2.css";

function Header2() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={LogoPoots} />
      </div>

      <ul className="nav-links">
        <li>
          <a
            href="#"
            className="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-red"
          >
            inicio
          </a>
        </li>
        <li>
          <a
            href="#"
            className="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-red"
          >
            acerca de
          </a>
        </li>
        <li>
          <a
            href="#"
            className="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-red"
          >
            menú
          </a>
        </li>
        <li>
          <a
            href="#"
            className="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-red"
          >
            contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Header2;
