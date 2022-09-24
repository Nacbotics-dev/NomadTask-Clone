import React from 'react';
import { Link } from 'react-router-dom';

function LoginFirst({responseData}) {
    return (
        <div className='bg-[#273345] border border-[#334053] text-base md:text-lg flex flex-col items-start p-[30px] w-full'>
            <div className='w-[60px] h-[60px]'>
                <img className='w-full h-full' src="/Images/unlock-icon.svg" alt="unlock-icon.svg" />
            </div>

            <div className='mt-5'>
                <p className='text-[#8b9699] text-base md:text-lg'>Log in first to join this quest and potentially earn <span className='text-white'>${responseData?.user_reward}</span> quest reward</p>
            </div>

            <div className='w-[140px] min-h-[44px] h-8 md:w-[180px] mb-[30px]'>
                <Link to={'/login'}>
                    <button className='border-[#73fdea] border py-1 px-[15px] mt-[30px] font-normal bg-transparent w-full h-full text-[#73fdea] uppercase text-sm hover:text-white hover:bg-black hover:border-black'>Log in</button>
                </Link>
                
            </div>
        </div>
    );
}

export default LoginFirst;