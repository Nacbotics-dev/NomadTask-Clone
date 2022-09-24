import React from 'react';

function TextProof(props) {
    return (
        <>
            <div className='mt-[30px]'>
                <div className='mb-[6px]'>
                    <p className='text-[#8b9699] text-base md:text-lg'>Text Proof Submission</p>
                </div>

                <div className='text-white bg-[#273345] border border-[#334053] text-ellipsis whitespace-nowrap hover:border-[#73fdea] focus:border focus:border-[#73fdea] w-full text-base md:text-lg'>
                    <textarea required className='w-full h-full py-[10px] px-[15px] bg-transparent outline-none ' name="text_proof" id="text_proof"></textarea>
                </div>
            </div>
        </>
    );
}

export default TextProof;