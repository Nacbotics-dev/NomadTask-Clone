import React from 'react';
import { Link } from 'react-router-dom';

function UnqualifiedParticipant({responseData}) {
    return (
        <div className='bg-[#273345] border border-[#334053] text-base md:text-lg flex flex-col items-start p-[30px] w-full'>
            <div className='w-[60px] h-[60px]'>
                <img className='w-full h-full' src="/Images/minimum-ts-grey.svg" alt="unlock-icon.svg" />
            </div>

            <div className='mt-5'>
                <p className='text-[#8b9699] text-base md:text-lg'>You’re not eligible to join this task because your trust score is lower than the required minimum trust score.</p>
            </div>

            <div className='mt-5'>
                <p className='text-[#8b9699] text-base md:text-lg'>Your Trust Score: <span className='text-white'>{responseData?.my_trust_score}%</span></p>
                <p className='text-[#8b9699] text-base md:text-lg'>Minimum Trust Score: <span className='text-white'>{responseData?.worker_score}%</span></p>
            </div>

            <div className='w-[140px] min-h-[44px] h-8 md:w-[180px] mb-[30px]'>
                <Link to={'#'}>
                    <button disabled className='border-[#73fdea] opacity-50 border py-1 px-[15px] mt-[30px] font-normal bg-transparent w-full h-full text-[#73fdea] uppercase text-sm hover:text-white hover:bg-black hover:border-black'>Join Task</button>
                </Link>
                
            </div>
        </div>
    );
}

export default UnqualifiedParticipant;