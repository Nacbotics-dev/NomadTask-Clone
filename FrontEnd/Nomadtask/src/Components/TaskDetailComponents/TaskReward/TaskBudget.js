import React from 'react';

function TaskBudget({responseData}) {
    return (
        <>
            <div className='mt-[30px] w-full'>
                <div className='bg-[#334053] h-11 w-full mb-[10px] relative'>
                    <div style={{width:`${responseData?.percentage_left}%`}} className={`bg-[#73fdea] h-full absolute z-[2] left-0 top-0 transition transition-width ease-in-out delay-[1.5s]`}></div>
                    <div style={{width:`${responseData?.working_reward_percentage}%`}} className='bg-[#8b9699] z-[1] absolute left-0 top-0 h-full transition transition-width ease-in-out delay-[1.5s]'></div>
                </div>

                <div className='flex flex-row justify-between items-center text-base md:text-lg'>
                    <div>
                        <span className='text-white mr-1'>{responseData?.percentage_left}%</span>
                        <span className='text-[#8b9699]'>left</span>
                    </div>

                    <div>
                        <span className='text-[#8b9699]'>Total</span>
                        <span className='text-white mx-1'>${responseData?.task_budget}</span>
                        <span className='text-[#8b9699]'>Reward</span>
                    </div>

                </div>

            </div>
        </>
    );
}

export default TaskBudget;