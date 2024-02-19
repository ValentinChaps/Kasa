import './Header.scss'
import logo from '../../assets/logoKasaHeader.PNG'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <img className="logo" src={logo} alt='Logo'></img>
      <div>
        <NavLink to="/"className="accueilApropos" >Accueil</NavLink>
        <NavLink to="/a-propos" className="accueilApropos">A propos</NavLink>
      </div>
    </nav>
  )
}

export default Header


