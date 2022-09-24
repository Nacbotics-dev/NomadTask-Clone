import React,{useState,useEffect} from 'react';
import { Loader } from '../Loaders/Loader';
import TrustScoreRating from './TrustScoreRating';
import PostApiMethod from '../../Authorizations/APICalls/PostApiMethod';


function RewardEligibility({responseData}) {
    const [hideJoinTask,setHideJoinTask] = useState(false);
    const [agreePolicy,setAgreePolicy] = useState(false);
    const [agreeTaskRule,setAgreeTaskRule] = useState(false);
    const [dataResponse,setDataResponse] = useState({loading:false,data:null,error:false})

    const JoinTask = (taskID) =>{
        PostApiMethod('join-task/',setDataResponse,{'taskID':taskID});
    }


    useEffect(()=>{
        if (dataResponse.data?.status === 'success') {
            setHideJoinTask(!hideJoinTask);
            window.location.reload(false);
        }
    },[dataResponse])

    
    return (
        <>
            {
                !(responseData?.joined_task || hideJoinTask)?
            
                <div className='bg-[#273345] border border-[#334053] text-base md:text-lg flex flex-col items-start p-[30px] w-full'>
                    <div className='w-[60px] h-[60px]'>
                        <img className='w-full h-full' src="/Images/join-icon.svg" alt="" />
                    </div>

                    <div className='my-5 text-[#8b9699]'>
                        <p>You’re eligible to earn <span className='text-white'>${responseData?.user_reward}</span> task reward.</p>
                    </div>

                    <div className='w-full mb-10'>
                        <div className='flex flex-row items-center justify-between text-[#8b9699] w-full'>
                            <h5>Max Reward</h5>
                            <h5>${responseData?.task_reward}</h5>
                        </div>

                        <div className='flex flex-row items-center justify-between text-[#8b9699] w-full'>
                            <h5>Your Reward Ratio</h5>
                            <h5>{responseData?.reward_ratio}</h5>
                        </div>

                        <hr  className='w-full border border-[#334053]'/>

                        <div className='flex flex-row items-center justify-between text-[#8b9699] w-full'>
                            <h5>Your Reward</h5>
                            <h5>${responseData?.user_reward}</h5>
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className='mb-5 w-full'>
                        <TrustScoreRating responseData={responseData}/>
                        </div>
                    </div>

                    <div className='mb-[30px]'>
                        <div onClick={()=>{setAgreePolicy(!agreePolicy)}} className='flex flex-row items-center cursor-pointer'>
                            <div className='mr-[10px]'>
                                <svg viewBox="64 64 896 896" className={`text-2xl ${agreePolicy === false ? 'block':'hidden'}`} focusable="false" data-icon="check-circle" width="1em" height="1em" fill="#8b9699" aria-hidden="true"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
                                <svg viewBox="64 64 896 896" className={`text-2xl ${agreePolicy === true? 'block':'hidden'}`} focusable="false" data-icon="check-circle" width="1em" height="1em" fill="#73fdea" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                            </div>
                            <div>
                                <p className='text-[#8b9699] text-sm'>I have read and agree to these <span className='text-[#73fdea]'>guidelines</span> and <span className='text-[#73fdea]'>blacklist policy</span></p>
                            </div>
                        </div>

                        <div onClick={()=>{setAgreeTaskRule(!agreeTaskRule)}} className='flex flex-row mt-[15px] items-center cursor-pointer'>
                            <div className='mr-[10px]'>
                                <svg viewBox="64 64 896 896" className={`text-2xl ${agreeTaskRule === false? 'block':'hidden'}`} focusable="false" data-icon="check-circle" width="1em" height="1em" fill="#8b9699" aria-hidden="true"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
                                <svg viewBox="64 64 896 896" className={`text-2xl ${agreeTaskRule === true? 'block':'hidden'}`} focusable="false" data-icon="check-circle" width="1em" height="1em" fill="#73fdea" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                            </div>
                            <div>
                                <p className='text-[#8b9699] text-sm'>I am aware that <span className='text-[#f5222d]'>I MUST submit this task within {responseData?.task_deadline}.</span> If not, I will get penalty points that may limit my Nomadtask activities.</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-[140px] min-h-[44px] h-8 md:w-[180px] mb-[30px]'>
                    
                        <button onClick={()=>{JoinTask(responseData?.taskId)}} disabled={!agreePolicy||!agreeTaskRule} className='border-[#73fdea] border py-1 px-[15px] mt-[30px] font-normal bg-transparent w-full h-full text-[#73fdea] uppercase text-sm hover:text-white hover:bg-black hover:border-black'>
                        {
                            dataResponse.loading?
                            <Loader/>
                            :
                            'Join Task'
                        }
                        </button>
                        
                    </div>
                </div> 
            :
            <></>
            }
        </>
    );
}

export default RewardEligibility;