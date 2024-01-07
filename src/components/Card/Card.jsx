import css from './Card.module.scss'

function Card({title, id, cover}) {
    return (
        <li className={css.card} key={id}>
            <div>{title}</div>
            <img src={cover} alt=''></img>
        </li>
    )
}

export default Card