import React,{useState,useContext,useEffect} from 'react';
import ReviewTask from '../TaskType/ReviewTask';
import SurveyTask from '../TaskType/SurveyTask';
import CustomTask from '../TaskType/CustomTask';
import DownloadTask from '../TaskType/DownloadTask';
import ChannelBoostTask from '../TaskType/ChannelBoostTask';
import { NewTaskContext } from '../../../ContextProviders/NewTaskContext';

function SelectTaskType(props) {
    const [taskType,setTaskType] = useState('download');
    const {userData,setUserData} = useContext(NewTaskContext);

    useEffect(()=>{
        setUserData({...userData,task_type:taskType});
    },[taskType,])

    const showTaskDetail = (taskType) =>{
        if (taskType === 'download') {
            return(<DownloadTask/>)
        } else if (taskType === 'channel_boost') {
            return(<ChannelBoostTask/>)
        }else if (taskType === 'review') {
            return(<ReviewTask/>)
        }else if (taskType === 'survey') {
            return(<SurveyTask/>)
        }else if (taskType === 'custom') {
            return(<CustomTask/>)
        }else{
            return(<></>)
        }
    }

    return (
        <>

            <div className='mb-[30px]'>
                <h3 className='text-white uppercase text-[1.75rem]'>CREATE TASK</h3>
            </div>

            <div className='mt-[42px] grid grid-cols-2 gap-4 md:gap-1 md:grid-cols-5 '>
                <div onClick={()=>{setTaskType('download')}} className={`${taskType==='download'?'active-border':''} w-full flex flex-col items-start justify-between min-w-[120px] min-h-[120px] border border-[#334053] bg-[#273345] cursor-pointer p-[15px]`}>
                    <div className='w-6 h-6'>
                        <img className='w-full h-full' src="/Images/download-teal.svg" alt="" />
                    </div>

                    <div>
                        <h3 className='text-[#73fdea] text-sm break-keep-all'>Download / Activities</h3>
                    </div>
                </div>

                <div onClick={()=>{setTaskType('channel_boost')}} className={`${taskType==='channel_boost'?'active-border':''} w-full flex flex-col items-start justify-between min-w-[120px] min-h-[120px] border border-[#334053] bg-[#273345] cursor-pointer p-[15px]`}>
                    <div className='w-6 h-6'>
                        <img className='w-full h-full' src="/Images/boost-teal.svg" alt="" />
                    </div>

                    <div>
                        <h3 className='text-[#73fdea] text-sm break-keep-all'>Channel Boost</h3>
                    </div>
                </div>

                <div onClick={()=>{setTaskType('review')}} className={`${taskType==='review'?'active-border':''} w-full flex flex-col items-start justify-between min-w-[120px] min-h-[120px] border border-[#334053] bg-[#273345] cursor-pointer p-[15px]`}>
                    <div className='w-6 h-6'>
                        <img className='w-full h-full' src="/Images/social-teal.svg" alt="" />
                    </div>

                    <div>
                        <h3 className='text-[#73fdea] text-sm break-keep-all'>Social / Blog Review</h3>
                    </div>
                </div>

                <div onClick={()=>{setTaskType('survey')}} className={`${taskType==='survey'?'active-border':''} w-full flex flex-col items-start justify-between min-w-[120px] min-h-[120px] border border-[#334053] bg-[#273345] cursor-pointer p-[15px]`}>
                    <div className='w-6 h-6'>
                        <img className='w-full h-full' src="/Images/survey-teal.svg" alt="" />
                    </div>

                    <div>
                        <h3 className='text-[#73fdea] text-sm break-keep-all'>Survey</h3>
                    </div>
                </div>

                <div onClick={()=>{setTaskType('custom')}} className={`${taskType==='custom'?'active-border':''} w-full flex flex-col items-start justify-between min-w-[120px] min-h-[120px] border border-[#334053] bg-[#273345] cursor-pointer p-[15px]`}>
                    <div className='w-6 h-6'>
                        <img className='w-full h-full' src="/Images/custom-teal.svg" alt="" />
                    </div>

                    <div>
                        <h3 className='text-[#73fdea] text-sm break-keep-all'>Custom Task</h3>
                    </div>
                </div>

            </div>

            {showTaskDetail(taskType)}
            
        </>
    );
}

export default SelectTaskType;