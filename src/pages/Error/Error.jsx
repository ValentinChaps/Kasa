import css from './Error.module.scss'
import { Link } from 'react-router-dom'


function Error() {
  return (
    <div className={css.container}>
      <div className={css.error}>
        <h1>404</h1>
      </div>
      <div className={css.errorDescription}>
        <h2>Oups! La page que vous demandez n'existe pas</h2>
      </div>
      <div className={css.errorLink}>
        <Link to="/" className={css.link}>
          <h3>Retournez sur la page d'accueil</h3>
        </Link>
      </div>
    </div>
  )
}

export default Error
