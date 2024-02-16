import css from './Footer.module.scss'
import logo from '../../assets/logoKasaFooter.PNG'

function Footer() {
  return (
    <footer>
      <div>
        <img src={logo} className={css.logo} alt='Logo'></img>
      </div>
      <div className={css.copyright}>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer