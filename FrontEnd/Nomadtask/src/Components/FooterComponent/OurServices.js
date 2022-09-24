import React from 'react';
import Typewriter from 'typewriter-effect';

function OurServices(props) {
    const ourOffer = ['post reactions?','early users?','subscribers?','user traction?','app reviews?','review content?','survey participants ?']

    return (
        <div className='bg-[#73fdea]'>

            <div className='py-[60px] mx-auto w-full px-7 md:w-3/4 lg:w-full lg:px-[392.5px]'>

                <div className='w-[60px] h-[60px] md:h-20 md:w-20'>
                    <img className='w-full h-full' src="/Images/logo-round.svg" alt="" />
                </div>

                <div className='grid items-center my-[15px] grid-cols-1 md:grid-cols-2'>

                    <div className='maxh-w-[210px] w-full'>
                        <h2 className='font-medium text-[2rem] md:text-[2.75rem]'>Do you need <Typewriter options={{strings: ourOffer,autoStart: true,loop: true,cursor:''}}/></h2>
                    </div>

                    <div className='mt-5 w-auto md:mt-0 md:max-w-[560px] md:w-full'>
                        <p className='font-normal text-base leading-[1.5715] md:text-[1.375rem]'>
                        Nomad Task is a on-demand task marketplace that can help you create marketing missions for your products, social channels, marketing content, app reviews, surveys, and much more. 250,000+ professional digital nomads from 150+ countries will complete your task, and help you achieve your marketing goal.
                        </p>
                    </div>
                </div>


                <div className='grid max-w-[380px] w-full grid-cols-1 gap-3 md:gap-5 mt-[15px] md:grid-cols-2'>
                    <button className='bg-black min-w-[180px] w-[180px]  min-h-[44px] uppercase outline-0 font-normal px-[15px] pt-1 text-sm text-white'>Join Now</button>
                    <button className='bg-transparent min-w-[180px] w-[180px] border-black border  min-h-[44px] uppercase outline-0 font-normal px-[15px] pt-1 text-sm text-gray-500'>Read Pitch Deck</button>
                </div>

            </div>

        </div>
    );
}

export default OurServices;