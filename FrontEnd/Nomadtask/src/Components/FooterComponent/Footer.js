import React from 'react';

function Footer(props) {
    return (
        <div className='bg-[#212121] w-full'>

            

            <div className='py-[60px] mx-auto w-full px-7 md:w-3/4 lg:w-full lg:px-[392.5px]'>
                <div>
                    <h3 className='text-[#8b9699] uppercase text-lg font-medium'>NOMADTASK</h3>
                </div>
                

                <div className='flex flex-row space-x-10 mt-[30px]'>

                    <div>
                        <ul className='flex flex-col space-y-1'>
                            <li className='text-[#8b9699] cursor-pointer font-normal outline-none text-sm'>HUNT Platform</li>
                            <li className='text-[#8b9699] cursor-pointer font-normal outline-none text-sm'>Github</li>
                            <li className='text-[#8b9699] cursor-pointer font-normal outline-none text-sm'>Blog</li>
                        </ul>

                        <ul className='flex flex-col mt-5 space-y-1'>
                            <li className='text-[#8b9699] cursor-pointer font-normal outline-none text-sm'>Discord 🇬🇧</li>
                            <li className='text-[#8b9699] cursor-pointer font-normal outline-none text-sm'>Telegram 🇬🇧</li>
                            <li className='text-[#8b9699] cursor-pointer font-normal outline-none text-sm'>Kakao Talk 🇰🇷</li>
                            <li className='text-[#8b9699] cursor-pointer font-normal outline-none text-sm'>Email</li>
                        </ul>
                    </div>


                    <div>
                        <ul className='flex flex-col space-y-1'>
                            <li className='text-[#8b9699] cursor-pointer font-normal outline-none text-sm'>Maker Guidelines</li>
                            <li className='text-[#8b9699] cursor-pointer font-normal outline-none text-sm'>Worker Guidelines</li>
                            <li className='text-[#8b9699] cursor-pointer font-normal outline-none text-sm'>FAQ</li>

                            <li className='text-[#8b9699] cursor-pointer font-normal outline-none text-sm'>Blacklist Policy</li>
                            <li className='text-[#8b9699] cursor-pointer font-normal outline-none text-sm'>Terms of Service</li>
                            <li className='text-[#8b9699] cursor-pointer font-normal outline-none text-sm'>Data Policy</li>

                            <li className='text-[#8b9699] cursor-pointer font-normal outline-none text-sm'>Refund Policy</li>
                            <li className='text-[#8b9699] cursor-pointer font-normal outline-none text-sm'><span className='text-[#73fdea]'>English</span>/한국어</li>
                            <li className='text-[#8b9699] cursor-pointer font-normal outline-none text-sm'>Blog</li>
                        </ul>


                    </div>

                </div>


                <div className='mt-[30px]'>
                    <p className='text-[#8b9699] cursor-pointer font-normal outline-none text-sm'>Copyright © 2021 BourbonShake Inc.</p>
                    <p className='text-[#8b9699] cursor-pointer font-normal outline-none text-sm'>All rights reserved.</p>
                </div>
            </div>
        
        </div>
    );
}

export default Footer;