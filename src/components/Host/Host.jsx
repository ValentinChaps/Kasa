import css from './Host.module.scss'

function Host({hostName, hostPicture, id}) {
    return (
            <div className={css.container} key={id}>
                <div className={css.hostName}><h2>{hostName}</h2></div>
                <div> <img src={hostPicture} alt=''></img></div>
            </div>  
    )
}

export default Host