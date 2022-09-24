import React,{useState,useContext,useEffect} from 'react';
import ProofType from '../MiniComponents/ProofType';
import AdvancedOptions from '../MiniComponents/AdvancedOptions';
import ScreenshotProof from '../MiniComponents/ScreenshotProof';
import TargetCountries from '../MiniComponents/TargetCountries';
import TaskInstructions from '../MiniComponents/TaskInstructions';
import BudgetEstimation from '../MiniComponents/BudgetEstimation';
import { NewTaskContext } from '../../../ContextProviders/NewTaskContext';

function TaskDescription({DataResponse}) {
    const [wordcount,setWordCount] = useState(0);
    const {userData,setUserData} = useContext(NewTaskContext);
    const [proofType,setProofType] = useState('screenshot_proof');
    
    const handleOnchange = () =>{
        const inputText = document.getElementById('task_title').value.length
        setWordCount(inputText)
    }

    useEffect(()=>{
        if (DataResponse) {
            setProofType(DataResponse?.proof_type)
        }
    },[DataResponse])
   
    return (
        <>
            <div className='mb-[30px]'>
                <h3 className='text-white uppercase text-[1.75rem]'>TASK DESCRIPTION</h3>
            </div>

            <div>

                <form>
                    <div className='flex flex-col space-y-1 mt-[30px] mb-[6px]'>
                        <div className='flex flex-row justify-between text-[#8b9699]'>
                            <label htmlFor="task_title" className='text-lg'>Task title</label>
                            <p className='text-sm'>{wordcount} / 60</p>
                        </div>
                        <div>
                            <input onChange={handleOnchange} defaultValue={DataResponse?.task_title} maxLength={60} name='task_title' id='task_title' type="text" placeholder='Download XXXX app and complete a sign up' className='h-11 w-full py-1 px-[11px] text-white bg-transparent outline-none border border-[#334053] text-base md:text-lg focus:border-2 focus:border-[#334053]'/>
                        </div>
                    </div>

                    <div className='flex flex-col space-y-1 mt-[30px] mb-[6px]'>
                        <div className='flex flex-row justify-between text-[#8b9699]'>
                            <label htmlFor="product_link" className='text-lg'>Product or subject link</label>
                        </div>

                        <div>
                            <input defaultValue={DataResponse?.product_link} name='product_link' type="url" placeholder='e.g. http://nomadtask.com/' className='h-11 w-full py-1 px-[11px] text-white bg-transparent outline-none border border-[#334053] text-base md:text-lg focus:border-2 focus:border-[#334053]'/>
                        </div>
                    </div>


                    <div className='mt-[30px] mb-[6px]'>
                        <ProofType proofType={proofType} setProofType={setProofType}/>
                    </div>  

                    <div>
                        <div className='mt-[30px]'>
                           <TargetCountries DefaultCountries={DataResponse?.allowed_countries} userData={userData} setUserData={setUserData}/>
                        </div>

                        <div className='mt-[30px]'>
                            <TaskInstructions DefaultInstructions={DataResponse?.task_instruction}/>
                        </div>
                        {
                            proofType === 'screenshot_proof'?
                                <div className='mt-[30px]'>
                                    <ScreenshotProof/>
                                </div>
                            :<></>
                        }

                        <div className='mt-[30px]'>
                            <AdvancedOptions/>
                        </div>

                        <div className=' mt-[30px]'>
                            <BudgetEstimation/>
                        </div>
                    </div>
                                            
                </form>
            </div>
    
        </>
    );
}

export default TaskDescription;