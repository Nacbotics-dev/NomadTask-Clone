import React from 'react';

function CustomTask(props) {
    return (
        <>
            <div>
                <div className='mt-20 mb-[30px]'>
                    <img src="/Images/custom-icon.svg" alt="" />
                </div>

                <div className='mb-1'>
                    <h3 className='text-white font-medium text-xl md:text-[1.75rem]'>Custom Task</h3>
                </div>

                <div>
                    <p className='text-base text-[#8b9699] font-normal md:text-lg'>You can create any type of custom task. Once the participation in your task can be verified either through a screenshot, link (URL), or text word submission, there’s no limit to the type of task you run.</p>
                </div>

                <div className='mt-10'>
                    <h3 className='text-base text-white md:text-lg'>Check Examples</h3>
                </div>

                <div>
                    <div className='flex flex-row space-x-2'>
                        <img src="/Images/finger-teal.svg" alt="" />
                        <p className='text-[#73fdea] text-base md:text-lg'>AI Match Analyser - App Review (Android)</p>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        <img src="/Images/finger-teal.svg" alt="" />
                        <p className='text-[#73fdea] text-base md:text-lg'>Tips Alliance - App Review (Android)</p>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        <img src="/Images/finger-teal.svg" alt="" />
                        <p className='text-[#73fdea] text-base md:text-lg'>Android App testenig : install , Review</p>
                    </div>
                </div>

                <div className='mt-5'>
                    <p className='text-[#8b9699] text-sm'>I have read and agree to these <span className='text-[#73fdea]'>Guidelines</span>, and the <span className='text-[#73fdea]'>Refund Policy</span>.</p>
                </div>
            
            </div>
        </>
    );
}

export default CustomTask;