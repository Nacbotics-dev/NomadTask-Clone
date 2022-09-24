import React ,{useEffect, useRef, useState} from 'react';
import CauroselItem from './CauroselItem';
import CarouselControls from './CarouselControls';
import "./Carousel.css"

const ImageCarousel = ({slides}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideInterval = useRef()

    const prev = ()=>{
        startSliderTimer()
        const index = (currentSlide + slides.length - 1) % slides.length;
        setCurrentSlide(index)

    }

    const next = ()=>{
        startSliderTimer()
        const index = (currentSlide +1) % slides.length;
        setCurrentSlide(index)

    }

    const startSliderTimer = ()=>{
        stopSliderTimer()

        slideInterval.current = setInterval(()=>{
            setCurrentSlide(currentSlide => (currentSlide +1) % slides.length)

        },3000)
    }

    const stopSliderTimer = ()=>{

        if (slideInterval.current) {

            clearInterval(slideInterval.current)
        }
    }

    useEffect(() => {
        startSliderTimer()
        return ()=> stopSliderTimer()

    });


    return (
        
        <div className="carousel">
            <div 
                className="carousel-inner"
                style={{transform:`translateX(${-currentSlide * 100}%)`}}
            >

                {slides.map((slide,index)=>(
                    <CauroselItem slide={slide} key={index} stopSlide={stopSliderTimer} startSlide={startSliderTimer} />
                ))}
            </div>

            <CarouselControls prev={prev} next={next}/>
        </div>
    );
};

export default ImageCarousel;