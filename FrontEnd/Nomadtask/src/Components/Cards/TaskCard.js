import React from 'react';
import { Link } from 'react-router-dom';
import { taskType,taskTypeImages } from '../Misc';

function TaskCard({task,trust_score}) {

    const returnImage = (user_trust_score,task_status) =>{
        if (!(parseInt(trust_score) >= parseInt(user_trust_score))) {
            return(
                <svg className='w-5 h-5 absolute top-[-10px] right-[-10px]' viewBox="0 0 62 62" width="62" xmlns="http://www.w3.org/2000/svg">
                <path d="m31 1c-16.569 0-30 13.431-30 30s13.431 30 30 30 30-13.431 30-30c-.019-16.56-13.44-29.981-30-30zm0 7.059c4.864-.004 9.603 1.546 13.524 4.425l-32.04 32.04c-5.101-6.97-5.852-16.217-1.94-23.919 3.909-7.701 11.817-12.551 20.456-12.545zm0 45.883c-4.864.004-9.602-1.547-13.523-4.426l32.039-32.04c5.102 6.97 5.852 16.217 1.941 23.92-3.91 7.702-11.819 12.552-20.457 12.546z"
                 fill="#8b9699" stroke="#8b9699" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/></svg>
            )
        } else if (task_status === "Working") {
            return(
                <svg className='w-[22px] h-[22px] absolute top-[-10px] right-[-10px]' fill="none" stroke="#f5a623" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        } else if (task_status === "Approved") {
            return(
                <svg className='w-6 h-6 absolute top-[-10px] right-[-10px]' fill="none" stroke="#73fdea" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        }else if (task_status === "Rejected") {
            return(
                <svg className='w-5 h-5 absolute top-[-10px] right-[-10px]' viewBox="0 0 62 62" width="62" xmlns="http://www.w3.org/2000/svg">
                <path d="m31 1c-16.569 0-30 13.431-30 30s13.431 30 30 30 30-13.431 30-30c-.019-16.56-13.44-29.981-30-30zm0 7.059c4.864-.004 9.603 1.546 13.524 4.425l-32.04 32.04c-5.101-6.97-5.852-16.217-1.94-23.919 3.909-7.701 11.817-12.551 20.456-12.545zm0 45.883c-4.864.004-9.602-1.547-13.523-4.426l32.039-32.04c5.102 6.97 5.852 16.217 1.941 23.92-3.91 7.702-11.819 12.552-20.457 12.546z"
                 fill="red" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/></svg>
            )
        }else{
            return(<></>)
        } 
    }
    return (
        <Link to={`/quests/${task.taskId}`}>
            <div className='bg-[#273345] border border-[#334053] cursor-pointer w-full h-full min-h-[317px]'>
                <div className='bg-[#8b9699] h-[6px]'>
                    <div style={{width:`${task?.percentage_left}%`}} className='bg-[#73fdea] h-full'></div>
                </div>

                <div className='pt-[30px] px-[30px] pb-6'>

                    <div>
                        <div className='relative min-h-[60px] max-w-[60px] w-full'>
                            <img src={`/Images/${taskTypeImages(task.task_type)}`} alt="" />
                            {returnImage(task?.worker_score,task?.task_status)}
                        </div>

                        <h5 className='text-[#73fdea] text-xs mt-[0.625rem] md:text-sm'>{taskType(task.task_type)}</h5>

                    </div>

                    <div className='mt-5 mb-5 '>
                        <h3 className='text-lg font-medium text-white break-words wrap-word text-ellipsis'>{task.task_title}</h3>

                        <h5 className='text-[#8b9699] text-sm mt-[0.625rem]'>Listed {task.date_created}</h5>

                    </div>



                    <div className='mt-5 mb-5 border-t-2 border-t-[#334053]'></div>
                    <div>
                        <div className='flex flex-row items-center mb-2 flex-nowrap'>
                            <img src="/Images/money-logo.svg" alt="" />
                            <h5 className='text-[#73fdea] ml-2 mr-[6px] text-sm font-normal'>${task.task_reward}</h5>
                            <p className='text-[#8b9699] text-xs lowercase'>Max Reward</p>
                        </div>

                        <div className='flex flex-row items-center flex-nowrap'>
                            <img src="/Images/hunter-logo.svg" alt="" />
                            <h5 className='text-[#73fdea] ml-2 mr-[6px] text-sm font-normal'>{task.participants}</h5>
                            <p className='text-[#8b9699] text-xs lowercase'>workers joined</p>
                        </div>
                    
                    </div>
                    
                </div>

                
            </div>
        </Link>
    );
}

export default TaskCard;