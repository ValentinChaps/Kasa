import { useParams } from "react-router-dom";
import { data } from '../../data/data'
import Rating from "../../components/Rating/Rating";
import Host from "../../components/Host/Host";

function House() {
 
    let { id } = useParams();
    const house = data.find((house) => house.id === id);

    return (
        <>
            <section key={id}>
                <img src={house.cover} alt=""></img>
                <div>
                    <h3>{house.title}</h3>
                    <p>{house.description}</p>
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
