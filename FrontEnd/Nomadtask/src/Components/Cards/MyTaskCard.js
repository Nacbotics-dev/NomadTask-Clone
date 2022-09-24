import React from 'react';
import { Link } from 'react-router-dom';
import { taskType,taskTypeImages } from '../Misc';

function MyTaskCard({task}) {
    return (
        <Link to={`/profile/maker/new-task/${task.taskId}`}>
            <div className='bg-[#273345] border border-[#334053] cursor-pointer w-full h-full min-h-[317px]'>
                <div className='bg-[#8b9699] h-[6px]'>
                    <div style={{width:`${task?.percentage_left}%`}} className='bg-[#73fdea] h-full'></div>
                </div>

                <div className='pt-[30px] px-[30px] pb-6'>

                    <div>
                        <div>
                            <img src={`/Images/${taskTypeImages(task.task_type)}`} alt="" />
                        </div>

                        <h5 className='text-[#73fdea] text-xs mt-[0.625rem] md:text-sm'>{taskType(task.task_type)}</h5>

                    </div>

                    <div className='mt-5 mb-5 '>
                        <h3 className='text-lg font-medium text-white break-words wrap-word text-ellipsis'>{task.task_title}</h3>

                        {
                            task.task_active?
                            <h5 className='text-[#8b9699] text-sm mt-[0.625rem]'>Listed {task.date_created}</h5>
                            :
                            <h5 className='text-[#f5a623] text-sm mt-[0.625rem]'>Payment Pending</h5>
                        }
                        

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

export default MyTaskCard;