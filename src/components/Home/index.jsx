import chezVous from '../assets/photoChezVous.PNG'
import css from './Home.module.scss'

function Home() {
  return (
    <main>
      <div className={css.chezVous}>
        <img className={css.chezVousImage} src={chezVous} alt=''></img>
        <p className={css.chezVousTexte}>Chez vous, partout et ailleurs</p>
      </div>
      <h1>Contenu</h1>
    </main>
  )
}

export default Home
