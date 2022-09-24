import React,{useState} from 'react';
import RangeSliderWithInput from '../../../RangeSliderComponent/RangeSliderWithInput';


function BudgetEstimation(props) {

    const [maxBudget,setMaxBudget] = useState(2500);
   
    return (
        <>
            <div>
                <h2 className='text-white text-2xl uppercase'>Budget & Estimation</h2>
            </div>

            <div className='w-full'>
                <div className='mt-[60px] mb-[10px]'>
                    <p className='text-[#8b9699] text-lg'>Task reward per approved submission</p>
                </div>

                <RangeSliderWithInput name={'task_reward'} min={0.2} max={maxBudget} defaultValue={0.58} />


                <div className='mt-[10px]'>
                    <p className='text-[#8b9699] text-sm'>Recommended reward: <span className='text-white'>$0.58</span></p>
                    <p className='text-[#8b9699] text-sm'>Workers may not participate in your task if the task reward is too low.</p>
                </div>


            </div>


            <div className='w-full'>
                <div className='mt-[30px] mb-[10px]'>
                    <p className='text-[#8b9699] text-lg'>Total task budget</p>
                </div>

                <RangeSliderWithInput name={'task_budget'} min={5} max={25000} defaultValue={1000} maxBudget={maxBudget} setMaxBudget={setMaxBudget}/>
            </div>

            <div className='w-full'>
                <div className='mt-[30px] mb-[10px]'>
                    <p className='text-[#8b9699] text-lg'>How soon would you like the entire task to be completed?</p>
                </div>

                <div className='flex flex-col space-y-2'>
                    <div className='flex flex-row space-x-2 cursor-pointer items-center'>
                        <input defaultChecked type="radio" name="task_duration" id="task_duration" value={'3days'} />
                        <p className='text-white text-lg'>Within 3 days</p>
                    </div>

                    <div className='flex flex-row space-x-2 cursor-pointer items-center'>
                        <input type="radio" name="task_duration" id="task_duration" value={'7days'} />
                        <p className='text-white text-lg'>Within 7 days</p>
                    </div>

                    <div className='flex flex-row space-x-2 cursor-pointer items-center'>
                        <input type="radio" name="task_duration" id="task_duration" value={'15days'} />
                        <p className='text-white text-lg'>Within 15 days</p>
                    </div>


                    <div className='flex flex-row space-x-2 cursor-pointer items-center'>
                        <input type="radio" name="task_duration" id="task_duration" value={'30days'} />
                        <p className='text-white text-lg'>Within 30 days</p>
                    </div>

                    <div className='flex flex-row space-x-2 cursor-pointer items-center'>
                        <input type="radio" name="task_duration" id="task_duration" value={'infinity'} />
                        <p className='text-white text-lg'>I don't care (static reward)</p>
                    </div>

                </div>

                <div className='mt-3'>
                    <p className='text-[#8b9699] text-sm'>⚠️ If you change this option, task reward may automatically increase in order to complete the task within the given timeframe.</p>
                </div>

            </div>

            

            <div className='w-full'>

                <div className='mt-[30px]'>
                    <h5 className='text-white text-lg'>Estimation</h5>
                </div>

                <div className='grid grid-cols-2 mt-[10px] mb-5 w-full h-full gap-5'>

                    <div className='bg-[#273345] p-5 border border-[#334053] flex flex-col items-center justify-center'>

                        <div className='h-10 w-10'>
                            <img className='w-full h-full' src="/Images/task_reward.svg" alt="" />
                        </div>

                        <div className='mt-[5px]'>
                            <p className='text-[#8b9699] text-lg'>Task reward per worker</p>
                        </div>

                        <div className='mt-[10px] text-2xl text-white flex flex-row space-x-1'>
                            <p>$0.5</p>
                            <p>-</p>
                            <p>$100</p>
                        </div>
                    </div>


                    <div className='bg-[#273345] p-5 border border-[#334053] flex flex-col items-center justify-center'>

                        <div className='h-10 w-10'>
                            <img className='w-full h-full' src="/Images/participants-grey.svg" alt="" />
                        </div>

                        <div className='mt-[5px]'>
                            <p className='text-[#8b9699] text-lg'>Total number of participants</p>
                        </div>

                        <div className='mt-[10px] text-2xl text-white flex flex-row space-x-1'>
                            <p>1,000</p>
                            <p>-</p>
                            <p>2,000</p>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}

export default BudgetEstimation;