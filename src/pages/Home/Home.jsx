import chezVous from '../../assets/photoChezVous.PNG'
import css from './Home.module.scss'
import Card from '../../components/Card/Card.jsx'
import { data } from '../../data/data'

function Home() {
  return (
    <main>
      <div className={css.chezVous}>
        <img className={css.chezVousImage} src={chezVous} alt=''></img>
        <p className={css.chezVousTexte}>Chez vous, partout et ailleurs</p>
      </div>
      <div className={css.gallery}>
        <ul>
              {data.map(({title, id, cover}) => (
              <Card
                id={id}
                cover={cover}
                title={title}
              />
              ))}
        </ul>
      </div>
    </main>
  )
}

export default Home
