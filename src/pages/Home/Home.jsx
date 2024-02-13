import chezVous from '../../assets/photoChezVous.PNG'
import './Home.scss'
import Card from '../../components/Card/Card.jsx'
import { data } from '../../data/data'
import Banner from '../../components/Banner/Banner.jsx'


function Home() {
  return (
    <main>
      <div className="chezVous">
        <Banner img={chezVous} text="Chez vous, partout et ailleurs"/>
      </div>
      <div className="gallery">
            {data.map(({title, id, cover}) => (
            <Card
              id={id}
              cover={cover}
              title={title}
            />
            ))}
      </div>
    </main>
  )
}

export default Home
