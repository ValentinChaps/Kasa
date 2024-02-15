import css from "../../components/Tags/Tags.module.scss"

function Tags({tags}){
    return (
        <div className={css.tags}>        
          {tags.map((item, id) => {
            return (
              <div className={css.tag} key={id}>
                {item}
              </div>
            );
          })} 
        </div>
      );

}
export default Tags
