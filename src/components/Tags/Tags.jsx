import css from "../../components/Tags/Tags.module.scss"

function Tags({tag}){
    return (
        <div className={css.tags}>        
          {tag.map((item) => {
            return (
              <span className={css.tag}>
                {item}
              </span>
            );
          })} 
        </div>
      );

}
export default Tags
