import React from 'react';
import { Link } from 'react-router-dom';

function ProfileDetails({setCurrentView,MyProfile}) {
    return (
        <div className='w-[860px] calc-width mb-[30px] p-0 md:p-[30px] md:border-[#334053] md:border'>
            <div className='mb-[30px]'>
                <h3 className='text-lg text-white'>User Information</h3>
            </div>

            <div>

                <div className='border-b border-b-[#334053] py-[15px] h-16 items-center flex flex-row'>
                    <div className='min-w-[150px] md:min-w-[240px]'>
                        <p className='text-[#8b9699] text-base md:text-lg'>Email Address</p>
                    </div>

                    <div>
                        <p className='text-[#8b9699] text-base md:text-lg'>{MyProfile?.email}</p>
                    </div>
                </div>


                <div className='border-b border-b-[#334053] py-[15px] h-16 items-center flex flex-row'>
                    <div className='min-w-[150px] md:min-w-[240px]'>
                        <p className='text-[#8b9699] text-base md:text-lg'>Full Name</p>
                    </div>

                    <div>
                        <p className='text-[#8b9699] text-base md:text-lg'>{MyProfile?.full_name}</p>
                    </div>
                </div>

                <div className='border-b border-b-[#334053] py-[15px] h-16 items-center flex flex-row'>
                    <div className='min-w-[150px] md:min-w-[240px]'>
                        <p className='text-[#8b9699] text-base md:text-lg'>Gender</p>
                    </div>

                    <div>
                        <p className='text-[#8b9699] text-base md:text-lg'>{MyProfile?.gender}</p>
                    </div>
                </div>

                <div className='border-b border-b-[#334053] py-[15px] h-16 items-center flex flex-row'>
                    <div className='min-w-[150px] md:min-w-[240px]'>
                        <p className='text-[#8b9699] text-base md:text-lg'>Year of Birth</p>
                    </div>

                    <div>
                        <p className='text-[#8b9699] text-base md:text-lg'>{MyProfile?.year_of_birth}</p>
                    </div>
                </div>


                <div className='border-b border-b-[#334053] py-[15px] h-16 items-center flex flex-row'>
                    <div className='min-w-[150px] md:min-w-[240px]'>
                        <p className='text-[#8b9699] text-base md:text-lg'>Country</p>
                    </div>

                    <div>
                        <p className='text-[#8b9699] text-base md:text-lg'>{MyProfile?.country}</p>
                    </div>
                </div>


                <div className='border-b border-b-[#334053] py-[15px] h-16 items-center flex flex-row'>
                    <div className='min-w-[150px] md:min-w-[240px]'>
                        <p className='text-[#8b9699] text-base md:text-lg'>News Letter</p>
                    </div>

                    <div>
                        <p className='text-[#8b9699] text-base md:text-lg'> {MyProfile?.newsletter?'Subscribed':'UnSubscribed'}</p>
                    </div>
                </div>
            </div>


            <div className='w-[140px] min-h-[44px] h-8 md:w-[180px] mb-[30px]'>
                <Link to={'#edit'}>
                    <button onClick={()=>{setCurrentView('edit')}} className='border-[#73fdea] border py-1 px-[15px] mt-[30px] font-normal bg-transparent w-full h-full text-[#73fdea] uppercase hover:text-white hover:bg-black hover:border-black'>Edit</button>
                </Link>
                
            </div>

        </div>
    );
}

export default ProfileDetails;