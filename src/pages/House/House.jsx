import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { data } from '../../data/data'
import Rating from "../../components/Rating/Rating";
import Host from "../../components/Host/Host";
import Carousel from "../../components/Carousel/Carousel";
import Collapse from '../../components/Collapse/Collapse.jsx'
import css from "./House.module.scss"
import Tags from "../../components/Tags/Tags"


function House() {
 
    let { id } = useParams();
    const house = data.find((house) => house.id === id)

    useEffect(() => {
        if (!house) {
            window.location.href = '/error'
        }
    }, [house])

    if (!house) {
        return null
    }

    return (
        <section className={css.container} key={id}>
            <Carousel 
            pictures= {house.pictures}
            />
          <div className={css.titleDescriptionTags}> 
            <div>
              <h3>{house.title}</h3>
              <p className={css.description}>{house.location}</p>
              <div className= {css.tags}><Tags
                  tag={house.tags}
              />
              </div>
            </div>
              <div>
                <Host
                  id={id}
                  hostName={house.host.name}
                  hostPicture={house.host.picture}
                />
                <Rating 
                star={house.rating}/>
              </div>
          </div> 
          <div className={css.collapse}>
            <span>
              <Collapse
              size="small"
              title="Description"
              content={house.description}
              />
            </span>
            <span>
            <Collapse
              size="small"
              title="Équipements"
              content={house.equipments}
            />
            </span>
          </div>
        </section>
    
    )
}

export default House;
