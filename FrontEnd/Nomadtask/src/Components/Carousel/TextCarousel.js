import React ,{useState} from 'react';
import CarouselControls from './CarouselControls';
import "./Carousel.css"

function TextCarousel(props) {
    const [currentSlide, setCurrentSlide] = useState(0);

    // const slideInterval = useRef()

    const prev = ()=>{
        // startSliderTimer()
        const index = (currentSlide + 1 - 1) % 1;
        setCurrentSlide(index)

    }

    const next = ()=>{
        // startSliderTimer()
        const index = (currentSlide +1) % 1;
        setCurrentSlide(index)

    }

    // const startSliderTimer = ()=>{
    //     stopSliderTimer()

    //     slideInterval.current = setInterval(()=>{
    //         setCurrentSlide(currentSlide => (currentSlide +1) % 10)

    //     },3000)
    // }

    // const stopSliderTimer = ()=>{

    //     if (slideInterval.current) {

    //         clearInterval(slideInterval.current)
    //     }
    // }

    // useEffect(() => {
    //     startSliderTimer()
    //     return ()=> stopSliderTimer()

    // });
    return (
        <div className="carousel">
            <div 
                className="carousel-inner"
                style={{transform:`translateX(${-currentSlide * 100}%)`}}
            >

                <ul className='flex flex-row w-full border-b-[#334053] border-b py-3 gap-4 text-sm cursor-pointer outline-none items-center'>
                    <li className='text-[#8b9699] text-sm py-3 w-[350%] md:w-[200%]'>Korean (105,777)</li>
                    <li className='text-[#8b9699] text-sm py-3 w-[350%] md:w-[200%]'>Korean (105,777)</li>
                    <li className='text-[#8b9699] text-sm py-3 w-[350%] md:w-[200%]'>Korean (105,777)</li>
                    <li className='text-[#8b9699] text-sm py-3 w-[350%] md:w-[200%]'>Korean (105,777)</li>
                    <li className='text-[#8b9699] text-sm py-3 w-[350%] md:w-[200%]'>Spanish (16,876)</li>
                    <li className='text-[#8b9699] text-sm py-3 w-[350%] md:w-[200%]'>Korean (105,777)</li>
                    <li className='text-[#8b9699] text-sm py-3 w-[350%] md:w-[200%]'>Korean (105,777)</li>
                    <li className='text-[#8b9699] text-sm py-3 w-[350%] md:w-[200%]'>Korean (105,777)</li>
                    <li className='text-[#8b9699] text-sm py-3 w-[350%] md:w-[200%]'>Korean (105,777)</li>
                    <li className='text-[#8b9699] text-sm py-3 w-[350%] md:w-[200%]'>Korean (105,777)</li>
                </ul> 

            </div>

            <CarouselControls prev={prev} next={next}/>
        </div>
    );
}

export default TextCarousel;