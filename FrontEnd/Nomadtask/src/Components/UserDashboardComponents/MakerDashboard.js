import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import MyTaskCard from '../Cards/MyTaskCard';
import SidebarNav from '../NavBarComponent/SidebarNav';
import CustomSelect from '../SelectFieldComponents/CustomSelect';
import GetApiMethod from '../../Authorizations/APICalls/GetApiMethod';

function MakerDashboard(props) {
    const dataField = ['All','Running'];
    const [selected,setSelected] = useState('Running');

    const responseData = GetApiMethod('my-tasks/');
    
    return (
        <div className='mx-auto w-full px-7 py-10 md:py-[70px] md:px-[160px] lg:px-[392.5px]'>
            <div className='flex flex-col items-center w-full space-x-0 place-content-center lg:space-x-20 lg:items-start lg:flex-row'>
                <SidebarNav/>

                <div className='w-[860px] calc-width mb-[30px] p-0 md:p-[30px] md:border-[#334053] md:border'>
                        <div className='mb-[30px]'>
                            <h3 className='text-white uppercase text-[1.75rem]'>MAKER DASHBOARD</h3>
                        </div>

                        <div className='mt-[50px] mb-[30px]'>
                            <CustomSelect dataField={dataField} selected={selected} setSelected={setSelected}/>
                        </div>

                        <div className='grid grid-cols-1 gap-10 md:gap-6 md:grid-cols-3'>

                            <div className='mt-[22px] md:max-w-[252px] w-full'>
                                <Link to={'/profile/maker/new-task'}>
                                    <div className='min-h-[297px] h-full flex items-center justify-center w-full border border-[#334053] bg-[#273345] cursor-pointer'>
                                        <div>
                                            <div className='h-16 w-16 mb-[10px] mx-auto'>
                                                <img src="/Images/add-circle-teal.svg" alt="" className='w-full h-full'/>
                                            </div>
                                            <div>
                                                <p className='text-sm text-[#73fdea]'>Launch a new task</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {responseData.data?.map((task, key) => {  
                                return (  
                                    <div key={key} className='mt-[22px] md:max-w-[252px] w-full'>
                                        <MyTaskCard task={task}/>
                                    </div>
                                );  
                            })} 
                        
                        </div>
                </div>
            </div>
        </div>
    );
}

export default MakerDashboard;