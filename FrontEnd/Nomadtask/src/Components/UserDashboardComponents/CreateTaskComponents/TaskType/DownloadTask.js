import React from 'react';

function DownloadTask(props) {
    return (
        <>
            <div>                    
                <div className='mt-20 mb-[30px]'>
                    <img src="/Images/download-icon.svg" alt="" />
                </div>

                <div className='mb-1'>
                    <h3 className='text-white font-medium text-xl md:text-[1.75rem]'>Download / Activities</h3>
                </div>

                <div>
                    <p className='text-base text-[#8b9699] font-normal md:text-lg'>The early number of downloads and app tractions are highly crucial for your app visibility as well as user feedback. Create a task that attracts users to download your app, join your service, or perform some activities that you want to promote.</p>
                </div>

                <div className='mt-10'>
                    <h3 className='text-base text-white md:text-lg'>Check Examples</h3>
                </div>

                <div>
                    <div className='flex flex-row space-x-2'>
                        <img src="/Images/finger-teal.svg" alt="" />
                        <p className='text-[#73fdea] text-base md:text-lg'>Add Reviewhunt to the Home Screen</p>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        <img src="/Images/finger-teal.svg" alt="" />
                        <p className='text-[#73fdea] text-base md:text-lg'>Download ROR GAME and sign-up via Google Login</p>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        <img src="/Images/finger-teal.svg" alt="" />
                        <p className='text-[#73fdea] text-base md:text-lg'>Download D'CENT Android Mobile App</p>
                    </div>
                </div>

                <div className='mt-5'>
                    <p className='text-[#8b9699] text-sm'>I have read and agree to these <span className='text-[#73fdea]'>Guidelines</span>, and the <span className='text-[#73fdea]'>Refund Policy</span>.</p>
                </div>

            </div>
            
        </>
    );
}

export default DownloadTask;