import React from 'react';

function ReviewTask(props) {
    return (
        <>
            <div>
                <div className='mt-20 mb-[30px]'>
                    <img src="/Images/social-icon.svg" alt="" />
                </div>

                <div className='mb-1'>
                    <h3 className='text-white font-medium text-xl md:text-[1.75rem]'>Social / Blog Review</h3>
                </div>

                <div>
                    <p className='text-base text-[#8b9699] font-normal md:text-lg'>User-generated contents via social and blog channels about your product are highly important to acquire new users and improve your SEO. Create a task that builds review content about your product via Youtube, Instagram, Facebook, Twitter, Blogs, etc.</p>
                </div>

                <div className='mt-10'>
                    <h3 className='text-base text-white md:text-lg'>Check Examples</h3>
                </div>

                <div>
                    <div className='flex flex-row space-x-2'>
                        <img src="/Images/finger-teal.svg" alt="" />
                        <p className='text-[#73fdea] text-base md:text-lg'>Like and retweet the NFThub pinned tweet</p>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        <img src="/Images/finger-teal.svg" alt="" />
                        <p className='text-[#73fdea] text-base md:text-lg'>Receive rewards by liking and watching ads.</p>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        <img src="/Images/finger-teal.svg" alt="" />
                        <p className='text-[#73fdea] text-base md:text-lg'>Like on Twitter and Facebook</p>
                    </div>
                </div>

                <div className='mt-5'>
                    <p className='text-[#8b9699] text-sm'>I have read and agree to these <span className='text-[#73fdea]'>Guidelines</span>, and the <span className='text-[#73fdea]'>Refund Policy</span>.</p>
                </div>

            </div>
            
        </>
    );
}

export default ReviewTask;