import React,{useState} from 'react';
import RangeSliderWithInput from '../RangeSliderComponent/RangeSliderWithInput';

function PricingPopUp({setShowPopUp}) {
    const [maxBudget,setMaxBudget] = useState(2500);

    return (
        <div>
            <div onClick={()=>{setShowPopUp(false)}} className='bg-[#080c13] shadow z-50'></div>

            <div className='bg-[#212d3f] max-w-[760px] w-full mx-auto absolute top-[100px] left-0 right-0 z-50'>
                <div onClick={()=>{setShowPopUp(false)}} className='h-14 w-14 float-right grid place-content-center cursor-pointer'>
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="#8b9699" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                </div>

                <div className='pt-[60px] px-[60px] pb-[60px] mt-[30px]'>

                    <div>
                        <h2 className='text-white text-[1.75rem] uppercase'>Budget & Estimation</h2>
                    </div>

                    <div className='mt-[30px]'>
                        <p className='text-[#8b9699] text-lg'>You can calculate the projection of your task by entering the minimum reward amount, total budget, and duration below.</p>
                    </div>

                    <div className='w-full'>
                        <div className='mt-[60px] mb-[10px]'>
                            <p className='text-[#8b9699] text-lg'>Task reward per approved submission</p>
                        </div>

                        <RangeSliderWithInput name={'task_reward'} min={0.2} max={maxBudget} defaultValue={0.58} />

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

                </div>

            </div>
            
        </div>
    );
}

export default PricingPopUp;