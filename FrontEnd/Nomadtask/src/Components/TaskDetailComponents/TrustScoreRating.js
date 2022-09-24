import React from 'react';

function TrustScoreRating({responseData}) {
    return (
        <>
            <div className='bg-[#334053] py-[9px] px-5 flex flex-row flex-nowrap justify-between w-full border border-[#334053]'>
                <h3 className='text-[#8b9699] text-sm font-normal'>Trust Score</h3>
                <h3 className='text-[#8b9699] text-sm font-normal'>Reward Ratio</h3>
            </div>

            <div>
                <div className='py-[9px] px-5 flex flex-row flex-nowrap justify-between w-full border-b border-b-[#334053]'>
                    <h3 className='text-[#8b9699] text-sm font-normal'>80% or more</h3>
                    {
                        responseData?.reward_ratio === 1.0?

                        <h3 className='text-[#8b9699] active flex items-center space-x-4 text-sm font-normal'>
                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path></svg>
                            1.0
                        </h3>

                        : <h3 className='text-[#8b9699] text-sm font-normal'>1.0</h3>
                    }
                </div>

                <div className='py-[9px] px-5 flex flex-row flex-nowrap justify-between w-full border-b border-b-[#334053]'>
                    <h3 className='text-[#8b9699] text-sm font-normal'>60% - 79%</h3>
                    {
                        responseData?.reward_ratio === 0.8?

                        <h3 className='text-[#8b9699] active flex items-center space-x-4 text-sm font-normal'>
                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path></svg>
                            0.8
                        </h3>

                        : <h3 className='text-[#8b9699] text-sm font-normal'>0.8</h3>
                    }
                </div>

                <div className='py-[9px] px-5 flex flex-row flex-nowrap justify-between w-full border-b border-b-[#334053]'>
                    <h3 className='text-[#8b9699] text-sm font-normal'>40% - 59%</h3>
                    {
                        responseData?.reward_ratio === 0.6?

                        <h3 className='text-[#8b9699] active flex items-center space-x-4 text-sm font-normal'>
                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path></svg>
                            0.6
                        </h3>

                        : <h3 className='text-[#8b9699] text-sm font-normal'>0.6</h3>
                    }
                    
                </div>

                <div className='py-[9px] px-5 flex flex-row flex-nowrap justify-between w-full border-b border-b-[#334053]'>
                    <h3 className='text-[#8b9699] text-sm font-normal'>20% - 39%</h3>
                    {
                        responseData?.reward_ratio === 0.4?

                        <h3 className='text-[#8b9699] active flex items-center space-x-4 text-sm font-normal'>
                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path></svg>
                            0.4
                        </h3>

                        : <h3 className='text-[#8b9699] text-sm font-normal'>0.4</h3>
                    }
                </div>

                <div className='py-[9px] px-5 flex flex-row flex-nowrap justify-between w-full border-b border-b-[#334053]'>
                    <h3 className='text-[#8b9699] text-sm font-normal'>1% - 19%</h3>
                    {
                        responseData?.reward_ratio === 0.2?

                        <h3 className='text-[#8b9699] active flex items-center space-x-4 text-sm font-normal'>
                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path></svg>
                            0.2
                        </h3>

                        : <h3 className='text-[#8b9699] text-sm font-normal'>0.2</h3>
                    }
                </div>
            </div>
        </>
    );
}

export default TrustScoreRating;