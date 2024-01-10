import css from './Card.module.scss'
import { Link } from 'react-router-dom'

function Card({title, id, cover}) {
    return (
            <li className={css.card} key={id}>
                <Link to={`/${id}`}>
                    <div>{title}</div>
                    <img src={cover} alt=''></img>
                </Link>
            </li>  
    )
}

export default Card