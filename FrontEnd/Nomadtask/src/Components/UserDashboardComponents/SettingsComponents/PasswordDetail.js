import React from 'react';
import { Link } from 'react-router-dom';

function PasswordDetail({setCurrentView}) {
    return (
        <div className='w-[860px] calc-width mb-[30px] p-0 md:p-[30px] md:border-[#334053] md:border'>
            <div className='mb-[30px]'>
                <h3 className='text-lg text-white'>Password</h3>
            </div>

            <div>

                <div className='border-b border-b-[#334053] py-[15px] h-16 items-center flex flex-row'>
                    <div className='min-w-[150px] md:min-w-[240px]'>
                        <p className='text-[#8b9699] text-base md:text-lg'>Password</p>
                    </div>

                    <div>
                        <p className='text-[#8b9699] text-base md:text-lg'>********</p>
                    </div>
                </div>

            </div>


            <div className='w-[140px] min-h-[44px] h-8 md:w-[180px] mb-[30px]'>
                <Link to={'#edit-password'}>
                    <button onClick={()=>{setCurrentView('edit-password')}} className='border-[#73fdea] border py-1 px-[15px] mt-[30px] font-normal bg-transparent w-full h-full text-[#73fdea] uppercase hover:text-white hover:bg-black hover:border-black'>Change</button>
                </Link>
            </div>

        </div>
    );
}

export default PasswordDetail;