import { Link } from 'react-router-dom'
import css from './Header.module.scss'
import logo from '../assets/logoKasaHeader.PNG'

function Header() {
  return (
    <nav>
      <img className={css.logo} src={logo} alt='Logo'></img>
      <div>
      <Link to="/"className={css.accueilApropos} >Accueil</Link>
      <Link to="/a-propos"className={css.accueilApropos} >A propos</Link>
      </div>
    </nav>
  )
}

export default Header


