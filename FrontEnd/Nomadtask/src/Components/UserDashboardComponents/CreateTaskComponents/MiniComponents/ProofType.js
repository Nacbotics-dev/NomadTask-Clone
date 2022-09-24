import React from 'react';



function ProofType({proofType,setProofType}) {

    const ProofType = (proof_type) =>{
        setProofType(proof_type)
    }

    return (
        <>
            <div className='text-[#8b9699] mb-[6px] text-base md:text-lg'>What types of proof should workers to submit?</div>
            <input key={proofType} type="text" hidden defaultValue={proofType} name='proof_type' />
            <div className='flex flex-row  items-center justify-start flex-wrap md:space-x-[10px]'>
                <div onClick={()=>{ProofType('screenshot_proof')}} className={`${proofType.includes('screenshot_proof')?'active-border':''} bg-[#273345] border border-[#334053] flex flex-col items-start justify-between cursor-pointer p-[15px] mb-[14px] md:mb-5 min-w-[100px] min-h-[100px] max-w-[120px] w-full h-[120px]`}>
                    <div className='w-6 h-6'>
                        <img className='w-full h-full' src="/Images/image-teal.svg" alt="" />
                    </div>

                    <div>
                        <p className='text-[#73fdea] text-sm'>Screenshot</p>
                    </div>
                </div>

                <div onClick={()=>{ProofType('video_proof')}} className={`${proofType.includes('video_proof')?'active-border':''} bg-[#273345] border border-[#334053] flex flex-col items-start justify-between cursor-pointer p-[15px] mb-[14px] md:mb-5 min-w-[100px] min-h-[100px] max-w-[120px] w-full h-[120px]`}>
                    <div className='w-6 h-6'>
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="video-camera" width="1em" height="1em" fill="#73fdea" aria-hidden="true"><path d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226zM208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path></svg>
                    </div>

                    <div>
                        <p className='text-[#73fdea] text-sm'>Video</p>
                    </div>
                </div>

                <div onClick={()=>{ProofType('url_proof')}} className={`${proofType.includes('url_proof')?'active-border':''} bg-[#273345] border border-[#334053] flex flex-col items-start justify-between cursor-pointer p-[15px] mb-[14px] md:mb-5 min-w-[100px] min-h-[100px] max-w-[120px] w-full h-[120px]`}>
                    <div className='w-6 h-6'>
                        <img className='w-full h-full' src="/Images/url-teal.svg" alt="" />
                    </div>

                    <div>
                        <p className='text-[#73fdea] text-sm'>Link (URL)</p>
                    </div>
                </div>

                <div onClick={()=>{ProofType('text_proof')}} className={`${proofType.includes('text_proof')?'active-border':''} bg-[#273345] border border-[#334053] flex flex-col items-start justify-between cursor-pointer p-[15px] mb-[14px] md:mb-5 min-w-[100px] min-h-[100px] max-w-[120px] w-full h-[120px]`}>
                    <div className='w-6 h-6'>
                        <img className='w-full h-full' src="/Images/text-teal.svg" alt="" />
                    </div>

                    <div>
                        <p className='text-[#73fdea] text-sm'>Words (text)</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProofType;