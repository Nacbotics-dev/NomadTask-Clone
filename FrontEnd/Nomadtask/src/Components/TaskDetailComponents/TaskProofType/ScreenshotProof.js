import React,{useState} from 'react';

function ScreenshotProof(props) {
    const [file,setFile] = useState();

    const handleOnchange = (e)=>{
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <>
            <div className='mt-[30px]'>
                <div className='mb-[6px]'>
                    <p className='text-[#8b9699] text-base md:text-lg'>Screenshot Proof Submission</p>
                </div>

                <div className='bg-[#273345] mb-2 cursor-pointer w-full h-[135px] relative border border-[#334053] border-dashed flex flex-col items-center place-content-center'>
                    <input required onChange={handleOnchange} type="file" accept="image/*" name="screenshot_proof" id="screenshot_proof" className='absolute w-full h-full opacity-0'/>

                    <div>
                        <img className='w-6 h-6 mx-auto' src="/Images/selectable-image.svg" alt="" />
                        <div className='mt-4 text-sm text-[#8b9699]'>
                            <p>Drag and drop file  here or <span className='text-[#73fdea]'>choose file</span> </p>
                        </div>
                    </div>
                </div>
                {
                    file?
                    <div className=' rounded-lg border border-[#334053] h-[317px] w-full max-w-[280px]'>
                        <img src={file} alt="" className='rounded-lg object-scale-down w-full h-full' />
                    </div>

                    :
                    <></>
                }
                
            </div>
        </>
    );
}

export default ScreenshotProof;