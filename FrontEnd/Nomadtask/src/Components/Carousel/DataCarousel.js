import React ,{useEffect, useRef, useState} from 'react';
import CarouselControls from './CarouselControls';
import "./Carousel.css"
import { FeaturedPropertyCard } from '../PropertyCard';

const DataCarousel = ({slides}) => {
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

    },);

    return (
        
        <div className="carousel max-w-[900px]">
            <div 
                className="carousel-inner"
                style={{transform:`translateX(${-currentSlide * 100}%)`}}
            >

                {slides.map((slide,index)=>(
                    <div key={index} className="carousel-item flex-row flex justify-left max-w-lg m-auto p-5  w-full md:max-w-6xl sm:mr-12">
                        <FeaturedPropertyCard property={slide}/>
                    </div>
                ))}
            </div>

            <CarouselControls prev={prev} next={next}/>
        </div>
    );
};

export default DataCarousel;

