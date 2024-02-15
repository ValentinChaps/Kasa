import { useParams } from "react-router-dom";
import { data } from '../../data/data'
import Rating from "../../components/Rating/Rating";
import Host from "../../components/Host/Host";
import Carousel from "../../components/Carousel/Carousel";
import Collapse from '../../components/Collapse/Collapse.jsx'
import css from "./House.module.scss"
import Tags from "../../components/Tags/Tags"
import { Navigate } from "react-router-dom";


function House() {
 
    let { id } = useParams();
    const house = data.find((house) => house.id === id)

    if (!house) {
        return <Navigate to="/error"/>
    } else {
      
    return (
        <section className={css.container} key={id}>
            <Carousel 
            pictures= {house.pictures}
            />
          <div className={css.titleDescriptionTags}> 
            <div className={css.titleTags}>
              <h3>{house.title}</h3>
              <p className={css.description}>{house.location}</p>
              <div className= {css.tags}>
                <Tags
                  tags={house.tags}/>
              </div>
            </div>
            <div className={css.hostAndRating}>
              <div className={css.host}>
                <Host 
                  id={id}
                  hostName={house.host.name}
                  hostPicture={house.host.picture}/>
              </div>
              <div className={css.rating}>
                <Rating 
                star={house.rating}/>
              </div>
            </div>
          </div> 
          <div className={css.collapse}>
            <div>
              <Collapse
              size="small"
              title="Description"
              content={house.description}
              />
            </div>
            <div>
            <Collapse
              size="small"
              title="Équipements"
              content={house.equipments}
            />
            </div>
          </div>
        </section>
    
    )}
}

export default House;
