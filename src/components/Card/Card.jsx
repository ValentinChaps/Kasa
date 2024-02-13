import css from './Card.module.scss'
import { Link } from 'react-router-dom'

function Card({title, id, cover}) {
    return (
        <div className={css.cards}>
            <Link to={`/${id}`}>
                <div className={css.card} key={id}>
                    <img src={cover} alt=''></img>
                    <div className={css.overlay}></div>
                    <h3>{title}</h3>    
                </div>  
            </Link>
        </div>
    )
}

export default Card