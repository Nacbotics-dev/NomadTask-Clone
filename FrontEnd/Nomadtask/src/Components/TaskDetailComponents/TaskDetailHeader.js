import React from 'react';
import QuestNavBar from '../NavBarComponent/QuestNavBar';
import { taskTypeColors,taskTypeImages,taskType } from '../Misc';

function TaskDetailHeader({responseData}) {
    return (
        <>
             <QuestNavBar background={taskTypeColors(responseData?.task_type)}/>
            <div style={{backgroundColor:taskTypeColors(responseData?.task_type)}} className={`pt-[140px] pb-[70px] px-7 md:min-h-[285px] flex flex-col items-start justify-center md:items-center md:px-[160px] md:pt-[110px] md:pb-[40px]`}>
                <div className='w-[70px] h-[70px] md:w-[120px] md:h-[120px] border-[3px] corder-white rounded-3xl'>
                    <img className='w-full h-full' src={`/Images/${taskTypeImages(responseData?.task_type)}`} alt="" />
                </div>

                <div className='mt-5'>
                    <h3 className='text-white text-2xl font-medium uppercase md:text-4xl'>{taskType(responseData?.task_type)}</h3>
                </div>
                <div className='mt-[10px] text-white text-base text-left md:text-center'>
                    <div>
                        <p className=''>Listed {responseData?.date_created}</p>
                    </div>
                    <div>
                        <p> <b>{responseData?.participants}</b> workers joined, <b>{responseData?.percentage_left}% budget left</b></p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default TaskDetailHeader;