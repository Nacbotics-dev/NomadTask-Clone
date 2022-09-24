import React from 'react';

const CauroselItem = ({slide,stopSlide,startSlide}) => {
    return (
        <div className="carousel-item" onMouseEnter={stopSlide} onMouseOut={startSlide}>
            <img className='w-full' src={slide} alt="" />
        </div>
    );
}

export default CauroselItem;
