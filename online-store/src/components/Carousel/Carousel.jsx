import React from 'react'
import style from './Carousel.module.scss'
import { useState, useEffect } from 'react'

const Carousel = (props) => {
const [currentIndex, setCurrentIndex] = useState(0)
const [length, setLength] = useState(props.children.length)

// Set the length to match current children from props
useEffect(() => {
    setLength(props.children.length)
}, [props.children])

const next = () => {
    if (currentIndex < (length - 1)) {
        setCurrentIndex(prevState => prevState + 1)
    }
}

const prev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
    }
}

  return (
    <div className={style.carousel_container}>

            <div className={style.carousel_wrapper}>

                {currentIndex > 0 &&
                <button onClick={prev} className={style.left_arrow}>&lt;</button>}

                <div className={style.carousel_content_wrapper}>

                    <div 
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        className={style.carousel_content}>
                        {props.children}
                    </div>

                </div>

                {currentIndex < (length - 1) &&
                <button onClick={next} className={style.right_arrow}>&gt;</button>}

            </div>
        </div>
  )
}

export default Carousel