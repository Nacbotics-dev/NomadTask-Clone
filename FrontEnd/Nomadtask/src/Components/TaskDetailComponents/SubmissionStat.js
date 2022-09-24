import React,{} from 'react';

function SubmissionStat({responseData}) {
    // const [seeReasons,setSeeReasons] = useState(false);

    return (
        <>
            <div className='mt-10'>

                <div className='text-white text-base md:text-lg'>Submission Stats</div>
                <div className='mt-[15px] flex flex-row items-center'>
                    <div style={{width:`${responseData?.working_participants_percentage}%`}} className='bg-[#8b9699] min-w-[2px] h-5'></div>
                    <div className='text-[#8b9699] ml-4 text-base md:text-lg'>{responseData?.working_participants} working</div>
                </div>

                <div className='mt-[15px] flex flex-row items-center'>
                    <div style={{width:`${responseData?.approved_participants_percentage}%`}} className='bg-[#00e283] min-w-[2px] h-5'></div>
                    <div className='text-[#00e283] ml-4 text-base md:text-lg'>{responseData?.approved_participants} approved</div>
                </div>

                <div className='mt-[15px] flex flex-row items-center'>
                    <div style={{width:`${responseData?.rejected_participants_percentage}%`}} className='bg-[#f5222d] min-w-[2px] h-5'></div>
                    <div className='text-[#f5222d] ml-4 text-base md:text-lg'>{responseData?.rejected_participants} rejected</div>
                </div>
            </div>


            {/* <div className='mt-[10px] w-full'>
                <div onClick={()=>{setSeeReasons(!seeReasons)}} className='text-[#73fdea] cursor-pointer flex flex-row items-center font-normal text-base'>
                    <span>See reject reasons</span>
                    <svg className=' ml-1 text-xs' viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
                </div>

                {
                    seeReasons?
               
                    <div className='bg-[#273345] p-[15px] mt-[10px] w-full'>
                        <ul className='text-[#8b9699] text-base md:text-lg pl-10 break-words list-outside list-disc'>
                            <li>Niaz! Didn't I approve before??</li>
                            <li>무관한 사진</li>
                            <li>Going over 300k was so good. But if possible, I think it would be better to mine it every day. Because this coin will go up almost to the value of Ethereum.</li>
                            <li>Not a new member. Inquiries via Telegram. https://t.me/mj143yoo</li>
                        </ul>
                    </div>

                    :<></>
                
                }

            </div> */}
        </>
    );
}

export default SubmissionStat;