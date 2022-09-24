import React from 'react';

function SurveyTask(props) {
    return (
        <>
            <div>

                    
                <div className='mt-20 mb-[30px]'>
                    <img src="/Images/survey-icon.svg" alt="" />
                </div>

                <div className='mb-1'>
                    <h3 className='text-white font-medium text-xl md:text-[1.75rem]'>Survey</h3>
                </div>

                <div>
                    <p className='text-base text-[#8b9699] font-normal md:text-lg'>Do you have an on-going survey but struggle to find people to participate? Create a task that can invite more people to join your survey.</p>
                </div>

                <div className='mt-10'>
                    <h3 className='text-base text-white md:text-lg'>Check Examples</h3>
                </div>

                <div>
                    <div className='flex flex-row space-x-2'>
                        <img src="/Images/finger-teal.svg" alt="" />
                        <p className='text-[#73fdea] text-base md:text-lg'>Sing up paycam coin and earn 50$ per a month(within 1 min!!)</p>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        <img src="/Images/finger-teal.svg" alt="" />
                        <p className='text-[#73fdea] text-base md:text-lg'>Give feedback for the new Reviewhunt</p>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        <img src="/Images/finger-teal.svg" alt="" />
                        <p className='text-[#73fdea] text-base md:text-lg'>● Mining 4 free coins Coins that hit the jackpot</p>
                    </div>
                </div>

                <div className='mt-5'>
                    <p className='text-[#8b9699] text-sm'>I have read and agree to these <span className='text-[#73fdea]'>Guidelines</span>, and the <span className='text-[#73fdea]'>Refund Policy</span>.</p>
                </div>

            </div>
        </>
    );
}

export default SurveyTask;