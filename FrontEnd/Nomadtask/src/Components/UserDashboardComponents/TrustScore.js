import React from 'react';
import SidebarNav from '../NavBarComponent/SidebarNav';
import RewardRatio from '../MiscComponents/RewardRatio';
import { TrustColors,TrustColorsPercentage,TrustEmoji } from '../Misc';
import GetApiMethod from '../../Authorizations/APICalls/GetApiMethod';


function TrustScore(props) {

    const responseData = GetApiMethod('trust-score/').data

    return (
        <div className='mx-auto w-full px-7 py-10 md:py-[70px] md:px-[160px] lg:px-[392.5px]'>
            <div className='flex flex-col items-center w-full space-x-0 place-content-center lg:space-x-20 lg:items-start lg:flex-row'>
                <SidebarNav/>
                <div className='w-[860px] calc-width mb-[30px] p-0 md:p-[30px] md:border-[#334053] md:border'>
                    <div className='mb-[30px]'>
                        <h3 className='text-white uppercase text-[1.75rem]'>Trust Score</h3>
                    </div>

                    <div className='flex flex-col justify-between w-full md:flex-row'>
                        <RewardRatio responseData={responseData}/>


                        <div className='bg-[#273345] flex flex-row items-center space-x-5 justify-center p-5 mb-5 max-w-[390px] w-full md:p-[30px] border border-[#334053]'>
                            <div className='trust-score'>
                                <div className='w-[38px] h-[38px] score'>
                                    {TrustEmoji(responseData?.reward_ratio)}
                                </div>
                                <svg style={{stroke:TrustColors(responseData?.reward_ratio),strokeDashoffset:TrustColorsPercentage(responseData?.trust_score)}} className='circle' height={'150px'} width={'150px'}>
                                    <circle cx={95} cy={55} r={50}  strokeWidth={10} fill={'none'}/>
                                </svg>
                            </div>
                            

                            <div>
                                <h4 className='text-[#8b9699] text-2xl'>Trust Score</h4>
                                <h3 style={{color:TrustColors(responseData?.reward_ratio)}} className='font-medium text-[3.125rem] leading-[3.125rem]'>{responseData?.trust_score}%</h3>
                            </div>
                        </div>


                    </div>

                    <div>
                        <h4 className='text-[#8b9699] text-lg'>You’re eligible to earn <span className='text-white'> {parseFloat(responseData?.reward_ratio)*100}%</span> of the maximum payout.</h4>
                    </div>

                    <div className='mt-[60px] text-lg'>
                        <div>
                            <h4 className='text-white'>What is Trust Score?</h4>
                        </div>

                        <div className='mt-[10px]'>
                            <p className='text-[#8b9699]'>Trust score is a measurable index that demonstrates how trustworthy a worker is in relation to Nomadtask activities. It is calculated based on email verification, alt account operation, approval rate of submissions, and more. This score updates on a daily basis.</p>
                        </div>

                        <div className='inline-flex items-center space-x-2 text-[#73fdea] cursor-pointer mt-[10px]'>
                            <h5>Learn More</h5>
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="#73fdea" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg>
                        </div>

                    </div>

                    <div className='mt-[60px] text-lg'>
                        <div>
                            <h4 className='text-white'>History</h4>
                        </div>

                        <div className='mt-5'>
                            <p className='text-[#8b9699]'>No history logs to display</p>
                        </div>
                        
                    </div>

                        

                </div>
            </div>
            
        </div>
    );
}

export default TrustScore;