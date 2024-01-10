import css from './Host.module.scss'

function Host({hostName, hostPicture, id}) {
    return (
            <div className={css.card} key={id}>
                <img src={hostPicture} alt=''></img>
                <h2>{hostName}</h2>
            </div>  
    )
}

export default Host