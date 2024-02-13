import Collapse from "../../components/Collapse/Collapse"
import Banner from "../../components/Banner/Banner"
import photoAbout from "../../assets/photoAbout.png"
import css from "./About.module.scss"

function About() {
  return (
    <>
      <section className={css.about}>
        <div className={css.banner}>
            <Banner img={photoAbout}/>
        </div>

        <div className={css.collapses}>
        <Collapse
              size="large"
              title="Fiabilité"
              content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logement, et toutes les informations sont régulièrement vérifiées par nos équipes."
            />
          <Collapse
              size="large"
              title="Respect"
              content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Collapse
              size="large"
              title="Service"
              content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Collapse
              size="large"
              title="Sécurité"
              content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            />
        </div>
      </section>
    </>
  )
}

export default About
