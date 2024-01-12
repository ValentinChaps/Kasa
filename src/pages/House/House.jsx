import { useParams } from "react-router-dom";
import { data } from '../../data/data'
import Rating from "../../components/Rating/Rating";
import Host from "../../components/Host/Host";
import Carousel from "../../components/Carousel/Carousel";
import css from "./House.module.scss"
import Tags from "../../components/Tags/Tags"


function House() {
 
    let { id } = useParams();
    const house = data.find((house) => house.id === id);

    return (
        <>
            <section className={css.container} key={id}>
                <Carousel 
                pictures= {house.pictures}
                />
                
                <div>
                    <h3>{house.title}</h3>
                    <p className={css.description}>{house.location}</p>
                    <div className= {css.tags}><Tags
                        tag={house.tags}
                    /></div>
                    <Rating 
                    star={house.rating}/>
              <Host
                id={id}
                hostName={house.host.name}
                hostPicture={house.host.picture}
              />
                </div>
            </section>
       </>
    )
}

export default House;
