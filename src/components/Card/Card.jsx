import css from './Card.module.scss'
import { Link } from 'react-router-dom'

function Card({title, id, cover}) {
    return (
        <Link to={`/${id}` } className={css.card}>
            <img src={cover} alt=''></img>
            <h2>{title}</h2>      
        </Link>
    )
}

export default Card