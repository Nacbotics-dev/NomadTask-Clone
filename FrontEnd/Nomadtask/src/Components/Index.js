import React from 'react';
import TaskType from './TaskComponents/TaskComponent';
import OurServices from './FooterComponent/OurServices';

function Index(props) {
    // const [available,setAvailable] = useState(false);
    // let isAuth = localStorage.getItem('isAuthenticated');

    // const searchBar = document.getElementById('search_field')
    
    return (
        <>

            <div className='mx-auto w-full pb-[100px] px-7 md:w-3/4 lg:w-full lg:px-[392.5px]'>
                <div className='flex flex-col gap-0 pt-[70px] md:pt-[80px] md:gap-5'>
                    <h1 className='text-[#73fdea] font-medium text-[2rem] md:text-6xl'>NOMADTASK</h1>

                    <p className='text-base font-normal text-white'>Online Tasks for Digital Nomads</p>
                </div>

                {/* {
                    isAuth?
                    <div className='flex flex-row items-center justify-end mt-6 space-x-2 flex-nowrap'>
                        <div className={`ant-checkbox-wrapper ${available? 'ant-checkbox-checked':''}`}>
                            <span className={`ant-checkbox ${available? 'ant-checkbox-checked':''}`}>
                                <input onChange={()=>{setAvailable(!available)}} value={available} type="checkbox" name="available_for_me" id="" className=' checked:bg-[#73fdea] ant-checkbox-input checked:border-[#73fdea]'/>
                                <span className={`ant-checkbox-inner ${available? '':'!bg-transparent'} border !border-[#73fdea]`}></span>
                            </span>
                        </div>

                        <div>
                            <p className='text-sm text-white'>Available for me</p>
                        </div>
                    </div>
                    :
                    <></>
                } */}

                <TaskType task_category={'$1.0+ Rewards'}/>

                {/* <TaskType task_category={'$0.5+ Rewards'}/>

                <TaskType task_category={'$0.2+ Rewards'}/> */}

            </div>

            <OurServices/>
            
        </>
    );
}

export default Index;