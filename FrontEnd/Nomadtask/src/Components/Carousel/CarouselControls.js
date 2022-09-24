import React from 'react';

function CarouselControls(props) {
    return (
        <div>
            <button className="carousel-control left hover:bg-[#fdae5c] bg-[#dddbd0] rounded-full text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300" onClick={props.prev}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-20 -ml-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
                <span className="sr-only">Prev</span>
            </button>
            <button className="carousel-control right hover:bg-[#fdae5c] bg-[#dddbd0] rounded-full text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300" onClick={props.next}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-20 -ml-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                <span className="sr-only">Next</span>
            </button>
            
        </div>
    );
}

export default CarouselControls;