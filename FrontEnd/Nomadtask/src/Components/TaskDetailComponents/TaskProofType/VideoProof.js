import React,{useState} from 'react';

function VideoProof(props) {
    const [file,setFile] = useState();

    const handleOnchange = (e)=>{
        setFile(e.target.files[0]);
    }

    return (
        <>
            <div className='mt-[30px]'>
                <div className='mb-[6px]'>
                    <p className='text-[#8b9699] text-base md:text-lg'>Video Proof Submission</p>
                </div>

                <div className='bg-[#273345] mb-2 cursor-pointer w-full h-[135px] relative border border-[#334053] border-dashed flex flex-col items-center place-content-center'>
                    <input required onChange={handleOnchange} type="file" accept="video/*" name="video_proof" id="video_proof" className='absolute w-full h-full opacity-0'/>

                    <div>
                        <svg className='w-6 h-6 mx-auto' viewBox="64 64 896 896" focusable="false" data-icon="video-camera" width="1em" height="1em" fill="#8b9699" aria-hidden="true"><path d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226zM208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path></svg>
                        <div className='mt-4 text-sm text-[#8b9699]'>
                            <p>Drag and drop file  here or <span className='text-[#73fdea]'>choose file</span> </p>
                        </div>
                    </div>
                </div>
                {
                    file?

                    <p className='mt-4 text-sm text-[#8b9699]'>Selected <span className='text-[#73fdea]'>{file.name}</span> </p>

                    :
                    <></>
                }
                
            </div>
        </>
    );
}

export default VideoProof;