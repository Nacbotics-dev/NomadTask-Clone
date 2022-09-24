import React from 'react';

function TaskInstructions({responseData}) {
    return (
        <div className='mt-10'>
            <div className='text-white text-base mb-[10px] md:text-lg'>Task instruction</div>
            <div className='text-[#8b9699] break-words text-base md:text-lg'>
            <pre className='whitespace-pre-wrap'>{responseData?.task_instruction}</pre>
            </div>

        </div>
    );
}

export default TaskInstructions;