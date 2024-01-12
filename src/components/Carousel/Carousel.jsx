import React, { useState } from "react";
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import css from "./Carousel.module.scss"

const Carousel = ({ pictures }) => {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === pictures.length - 1 ? 0 : slide + 1)
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? pictures.length - 1 : slide - 1)
  };

  return (
    <div className={css.carousel}>
      <img src={leftArrow} alt="" onClick={prevSlide} className={`${css.arrow} ${css.arrowLeft}` }></img>
      {pictures.map((item, idx) => {
        return (
          <img
            src={item}
            alt=''
            key={idx}
            className={slide === idx ? `${css.slide}` : `${css.slide} ${css.slideHidden}`}
          ></img>
        )
      })}
      <img src={rightArrow} alt=""
        onClick={nextSlide}
        className={`${css.arrow} ${css.arrowRight}` }
      ></img>
      <p>{slide +1}/{pictures.length}</p> 
    </div>
  )
}

export default Carousel