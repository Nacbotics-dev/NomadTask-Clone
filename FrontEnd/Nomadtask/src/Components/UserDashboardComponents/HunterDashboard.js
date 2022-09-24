import React from 'react';
import { Link } from 'react-router-dom';
import TaskCard from '../Cards/TaskCard';
import SidebarNav from '../NavBarComponent/SidebarNav';
import GetApiMethod from '../../Authorizations/APICalls/GetApiMethod';

function HunterDashboard(props) {
    const responseData = GetApiMethod('my-worker-tasks/').data;

    return (
        <div className='mx-auto w-full px-7 py-10 md:py-[70px] md:px-[160px] lg:px-[392.5px]'>
            <div className='flex flex-col items-center w-full space-x-0 place-content-center lg:space-x-20 lg:items-start lg:flex-row'>
                <SidebarNav/>

                <div className='w-[860px] calc-width mb-[30px] p-0 md:p-[30px] md:border-[#334053] md:border'>
                        <div className='mb-[30px]'>
                            <h3 className='text-white uppercase text-[1.75rem]'>WORKER DASHBOARD</h3>
                        </div>

                        {
                            responseData?.length > 0?
                            <div className='grid grid-cols-1 gap-10 md:gap-6 md:grid-cols-3'>
                                {responseData?.map((task, key) => {  
                                    return (  
                                        <div key={key} className='mt-[22px] md:max-w-[252px] w-full'>
                                            <TaskCard task={task} trust_score={100}/>
                                        </div>
                                    );  
                                })} 
                            
                            </div>

                            :

                            <div className='flex flex-col items-center justify-center my-10'>
                                <div className='w-20 h-20'>
                                    <img src="/Images/no-quests-face.svg" alt="" className='w-full h-full'/>
                                </div>
                                <div className='mt-[15px]'>
                                    <p className='text-[#8b9699] text-base md:text-lg'>You have not participated in any tasks yet.</p>
                                </div>

                                <div className='flex flex-row items-center mt-[10px]'>
                                    <Link to={'/'} className='text-[#73fdea] text-sm'>Check tasks</Link>
                                    <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="#73fdea" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg>
                                </div>
                            </div>
                        }
                </div>
            </div>
        </div>
    );
}

export default HunterDashboard;