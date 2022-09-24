import React from 'react';
import SidebarNav from '../NavBarComponent/SidebarNav';

function Referral(props) {
    return (
        <div className='mx-auto w-full px-7 py-10 md:py-[70px] md:px-[160px] lg:px-[392.5px]'>
            <div className='flex flex-col items-center w-full space-x-0 place-content-center lg:space-x-20 lg:items-start lg:flex-row'>
                <SidebarNav/>
                <div className='flex flex-col'>
                    <div className='w-[860px] calc-width mb-[30px] p-0 md:p-[30px] md:border-[#334053] md:border'>
                        <div className='mb-[30px]'>
                            <h3 className='text-white uppercase text-[1.75rem]'>EARN MONEY WHILE YOU SLEEP</h3>
                            <h4 className='text-[#8b9699] text-lg'>When you attract new workers from your referral link, you will constantly get 5% of the earned rewards that your referred friend has earned from his/her task submissions.</h4>
                        </div>

                        <div>
                            <div>
                                <h3 className='text-lg text-white'>Share the referral link below</h3>
                            </div>

                            <div className='bg-[#273345] p-5 flex flex-row justify-between items-center mt-5 border border-[#334053] '>
                                <div className='flex flex-row'>
                                    <h3 className='text-[#8b9699] text-lg hidden mr-5 md:block'>Referral Link</h3>

                                    <a href="https://nomadtask.com/r/268487" className='text-[#73fdea] text-lg'>https://nomadtask.com/r/268487</a>

                                </div>

                                <div className='border-[#73fdea] text-[#73fdea] cursor-pointer border md:flex items-center place-content-center hidden h-11 w-full max-w-[140px] hover:border-none hover:bg-black hover:text-white md:max-w-[180px]'>
                                    <h3 className='text-center'>Copy</h3>
                                </div>
                                <div className='block md:hidden'>
                                    <img src="/Images/copy-teal.svg" alt="copy" />
                                </div>

                            </div>

                        </div>

                        <div className='mt-[10px]'>
                            <p className='text-[#8b9699] text-base font-normal'>Or, add this text to any URL from Nomadtask pages - <span className='text-[#73fdea]'>?referrer_id=268487</span></p>
                            <p className='text-[#8b9699] text-base font-normal'>(e.g. https://nomadtask.com/quests/1?referrer_id=268487)</p>
                        </div>

                        <div className='my-10'>
                            <div>
                                <h3 className='text-lg text-white'>Your Referral Activities</h3>
                            </div>
                            
                            <div className='flex flex-col mt-5 md:flex-row md:space-x-[100px]'>
                                <div className='mt-5 mb-[10px] md:mt-0'>
                                    <p className='text-[#8b9699] text-sm'>Total Referral Bonus</p>
                                    <h4 className='text-[#73fdea] text-2xl font-medium'>$0.00 <span className='text-base font-normal'>USD POINT</span></h4>
                                </div>

                                <div className='mt-5 mb-[10px] md:mt-0'>
                                    <p className='text-[#8b9699] text-sm'>Referred Workers</p>
                                    <h4 className='text-[#73fdea] text-2xl font-medium'>0 <span className='text-base font-normal'>WORKERS</span></h4>
                                </div>


                            </div>
                        </div>

                        <div>
                            <div className='bg-[#273345] grid grid-cols-2 md:grid-cols-3'>
                                <div className='text-[#8b9699] font-medium p-2 text-base hidden md:block'>Signup Date</div>
                                <div className='text-[#8b9699] font-medium p-2 text-base'>	Total Reward</div>
                                <div className='text-[#8b9699] font-medium p-2 text-base'>Email</div>
                            </div>

                            <div className='hidden border-b border-b-[#334053] md:flex p-2 min-h-[150px] h-full w-full items-center hover:bg-white'>

                                <div className='items-center w-full text-center'>
                                    <div className='w-16 h-10 mx-auto mb-2'>
                                        <svg className="w-full h-full stroke-[#8b9699]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                                    </div>

                                    <div >
                                        <p className='text-[#8b9699] text-sm'>No Data</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div>
                                <h4 className='text-lg text-white'>Please Note</h4>
                            </div>

                            <ol type='1' className='mt-[14px] text-[#8b9699] pl-5 text-sm list-decimal list-outside'>
                                <li>Your referral rewards will be distributed when your referred worker also receives his/her task reward.</li>
                                <li>Nomadtask reserves the right to change the rules, reward percentages, payout period, and any operational matters.</li>
                                <li>Nomadtask reserves the right to close the referral program. In this case, the workers who have referred new workers/makers will no longer receive the referral rewards.</li>
                            </ol>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Referral;