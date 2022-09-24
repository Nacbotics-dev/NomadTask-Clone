import React,{useState} from 'react';

function ScreenshotProof(props) {
    const [useScreenShot,setUseScreenshot] = useState(false);


    return (
        <>
            <div className='mb-[6px]'>
                <p className='text-[#8b9699] text-base md:text-lg'>Do you have an example of the screenshot proof?</p>
            </div>

            <div className='flex flex-row items-center'>
                <div className='text-white text-base flex flex-row items-center cursor-pointer md:text-lg'>
                    <input onClick={(e)=>{setUseScreenshot(true)}} type="radio" name="use_proof_example" id="use_proof_example" value={true} />
                    <p className='px-2'>Yes</p>
                </div>

                <div className='text-white text-base flex flex-row items-center cursor-pointer md:text-lg'>
                    <input defaultChecked onClick={(e)=>{setUseScreenshot(false)}} type="radio" name="use_proof_example" id="use_proof_example" value={false}/>
                    <p className='px-2'>No</p>
                </div>
            </div>
            {
                useScreenShot?
                
                <div className='mt-[30px]'>
                    <div className='mb-[6px]'>
                        <p className='text-[#8b9699] text-base md:text-lg'>Screenshot Submission Example</p>
                    </div>

                    <div className='bg-[#273345] cursor-pointer w-full h-[135px] relative border border-[#334053] border-dashed flex flex-col items-center place-content-center'>
                        <input type="file" accept="image/*" name="screenshot_proof_example" id="screenshot_proof_example" className='absolute w-full h-full opacity-0'/>

                        <div>
                            <img className='w-6 h-6 mx-auto' src="/Images/selectable-image.svg" alt="" />
                            <div className='mt-4 text-sm text-[#8b9699]'>
                                <p>Drag and drop file  here or <span className='text-[#73fdea]'>choose file</span> </p>
                            </div>
                        </div>
                    </div>
                    
                </div>

                :
                <></>
            }
        </>
    );
}

export default ScreenshotProof;