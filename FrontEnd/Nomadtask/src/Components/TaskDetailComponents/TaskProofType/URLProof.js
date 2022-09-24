import React from 'react';

function URLProof(props) {
    return (
        <>
            <div className='mt-[30px]'>
                <div className='mb-[6px]'>
                    <p className='text-[#8b9699] text-base md:text-lg'>URL Proof Submission</p>
                </div>

                <div className='text-white bg-[#273345] border border-[#334053] text-ellipsis whitespace-nowrap hover:border-[#73fdea] focus:border focus:border-[#73fdea] w-full text-base md:text-lg'>
                    <input required type="url" className='w-full h-full py-[10px] px-[15px] bg-transparent outline-none ' name="url_proof" id="url_proof" />
                </div>
            </div>
        </>
    );
}

export default URLProof;