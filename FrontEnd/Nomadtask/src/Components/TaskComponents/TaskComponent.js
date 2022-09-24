import React,{useState} from 'react';
import TaskCard from '../Cards/TaskCard';
import CustomSelect from '../SelectFieldComponents/CustomSelect';

import GetApiMethod from '../../Authorizations/APICalls/GetApiMethod';


function TaskType({task_category}) {
    const [selected,setSelected] = useState('Rating')
    const selectFields = ['Rating','Total Rewards','Reward Per Worker','Newest','Popular']

    const responseData = GetApiMethod('available-tasks/');

    return (
        <>
            <div className='flex flex-row items-end justify-between mt-20 mb-6'>

                <div>
                    <h3 className='text-white text-[1.375rem]'>{task_category}</h3>
                </div>

                <CustomSelect name={'filter_rewards'} dataField={selectFields} selected={selected} setSelected={setSelected}/>
            </div>


            <div className='grid grid-cols-1 gap-10 md:gap-6 md:grid-cols-2 lg:grid-cols-4'>
                

                {responseData.data?.tasks?.map((task, key) => {  
                    return (  
                        <div key={key}>
                            <TaskCard task={task} trust_score={responseData.data?.trust_score}/>
                        </div>
                    );  
                })} 
            </div>
            
        </>
    );
}

export default TaskType;