import React,{useState} from 'react';

function TaskInstructions({DefaultInstructions}) {
    const [wordcount,setWordCount] = useState(0);

    const handleOnchange = () =>{
        const inputText = document.getElementById('task_instruction').value.length
        setWordCount(inputText)
    }
    return (
        <>
            <div className='flex flex-row text-[#8b9699] justify-between items-center mb-[6px]'>
                <label htmlFor="task_instruction" className='text-base md:text-lg'>Task instruction</label>
                <p className='text-sm'>{wordcount} / 1000</p>
            </div>

            <div>
                <textarea defaultValue={DefaultInstructions} onChange={handleOnchange} name="task_instruction" id="task_instruction" maxLength={1000} className='appearance-none py-1 px-[11px] bg-transparent outline-none text-ellipsis min-h-[32px] w-full text-base md:text-lg text-white border border-[#334053] h-[240px]' placeholder="Include the following information:
1. Steps to complete the task mission
2. Requirements for the proof submission
[Warning]
Do not copy someone else's task instructions.
Your task may be suspended if your instructions are plagiarised."></textarea>
            </div>
        </>
    );
}

export default TaskInstructions;