import React from 'react';


function TaskProofType({responseData}) {

    const ProofType = (proof_type) =>{
        if (proof_type === 'screenshot_proof') {
            return(
                <div className='flex flex-row flex-wrap items-center rounded-[22px] w-fit text-sm py-3 px-5 text-[#8b9699] bg-[#273345] border border-[#334053]'>
                    <img className='mr-3' src="/Images/selectable-image.svg" alt="" />
                    <div>Screenshot</div>
                </div>
            )
        } else if (proof_type === 'url_proof') {
            return(
                <div className='flex flex-row flex-wrap items-center rounded-[22px] w-fit text-sm py-3 px-5 text-[#8b9699] bg-[#273345] border border-[#334053]'>
                    <svg className='mr-3' height="20" viewBox="0 0 26 26" width="26" xmlns="http://www.w3.org/2000/svg"><path d="m16.515 13.759a4.953 4.953 0 0 0 -8.428-2.876l-5.631 5.632a4.97 4.97 0 0 0 7.03 7.03l5.63-5.632a4.953 4.953 0 0 0 1.12-1.678m-2.437.32-.08.08-5.552 5.471a3.035 3.035 0 0 1 -4.273-4.273l5.511-5.552a3.035 3.035 0 0 1 5.193 2.317m-5.113-2.358a4.953 4.953 0 0 0 8.428 2.876l5.631-5.632a4.97 4.97 0 1 0 -7.03-7.03l-5.63 5.632a4.953 4.953 0 0 0 -1.12 1.678m2.437-.32.08-.08 5.552-5.471a3.035 3.035 0 0 1 4.273 4.273l-5.511 5.552a3.035 3.035 0 0 1 -5.193-2.317" fill="none" stroke="#8b9699" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"/></svg>
                    <div>Link (URL)</div>
                </div>
            )
        }else if (proof_type === 'text_proof') {
            return(
                <div className='flex flex-row flex-wrap items-center rounded-[22px] w-fit text-sm py-3 px-5 text-[#8b9699] bg-[#273345] border border-[#334053]'>
                    <img className='mr-3' src="/Images/selectable-text.svg" alt="" />
                    <div>Words (text)</div>
                </div>
            )
        }   else{
            return(
                <div className='flex flex-row flex-wrap items-center rounded-[22px] w-fit text-sm py-3 px-5 text-[#8b9699] bg-[#273345] border border-[#334053]'>
                    <svg className='mr-3' viewBox="64 64 896 896" focusable="false" data-icon="video-camera" width="1em" height="1em" fill="#8b9699" aria-hidden="true"><path d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226zM208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path></svg>
                    <div>Video</div>
                </div>
            )
        }
    }
    return (
        <div className='mt-10 w-full'>
            <div className='text-white text-base mb-[10px] md:text-lg'>Product or subject link</div>

            {ProofType(responseData?.proof_type)}
            
        </div>
    );
}

export default TaskProofType;