import css from './Banner.module.scss'

function Banner({img, text}) {
  return (
    <section className={css.slogan}>
      <div className={css.contentSlogan}>
        <img src={img} alt="" />
        <div className={css.sloganText}>
          <h1>{text}</h1>
        </div>
      </div>
    </section>
  )
}

export default Banner