import React from 'react';

function ChannelBoostTask(props) {
    return (
        <>
            <div>

                    
                <div className='mt-20 mb-[30px]'>
                    <img src="/Images/boost-icon.svg" alt="" />
                </div>

                <div className='mb-1'>
                    <h3 className='text-white font-medium text-xl md:text-[1.75rem]'>Channel Boost</h3>
                </div>

                <div>
                    <p className='text-base text-[#8b9699] font-normal md:text-lg'>Do you need to boost your social media channels such as Youtube, Instagram, Facebook, Telegram, Reddit, etc.? Do you want to build comments or reactions to show your content in its best light? Create a quest that can boost the performance of any of your social/blog content.</p>
                </div>

                <div className='mt-10'>
                    <h3 className='text-base text-white md:text-lg'>Check Examples</h3>
                </div>

                <div>
                    <div className='flex flex-row space-x-2'>
                        <img src="/Images/finger-teal.svg" alt="" />
                        <p className='text-[#73fdea] text-base md:text-lg'>Like / Share the Facebook Post</p>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        <img src="/Images/finger-teal.svg" alt="" />
                        <p className='text-[#73fdea] text-base md:text-lg'>Subscribe/Like/Comment Youtube</p>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        <img src="/Images/finger-teal.svg" alt="" />
                        <p className='text-[#73fdea] text-base md:text-lg'>Follow/Retweet/Comment on our Twitter</p>
                    </div>
                </div>

                <div className='mt-5'>
                    <p className='text-[#8b9699] text-sm'>I have read and agree to these <span className='text-[#73fdea]'>Guidelines</span>, and the <span className='text-[#73fdea]'>Refund Policy</span>.</p>
                </div>

            </div>
        </>
    );
}

export default ChannelBoostTask;