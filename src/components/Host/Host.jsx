import css from './Host.module.scss'

function Host({hostName, hostPicture, id}) {
    return (
            <div className={css.container} key={id}>
                <h2>{hostName}</h2>
                <img src={hostPicture} alt=''></img>
            </div>  
    )
}

export default Host