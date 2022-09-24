import React from 'react';

function BillingHistory(props) {
    return (
        <div className='w-[860px] calc-width mb-[30px] p-0 md:p-[30px] md:border-[#334053] md:border'>
            <div className='mb-[30px]'>
                <h3 className='text-lg text-white'>Billing History</h3>
            </div>


            <div className='bg-[#273345] grid grid-cols-3 md:grid-cols-4'>
                <div className='text-[#8b9699] font-medium p-2 text-base'>Date</div>
                <div className='text-[#8b9699] font-medium p-2 text-base hidden md:block'>Task</div>
                <div className='text-[#8b9699] font-medium p-2 text-base'>Amount</div>
                <div className='text-[#8b9699] font-medium p-2 text-base'>Status</div>
            </div>

            <div className='border-b border-b-[#334053] flex p-2 min-h-[150px] h-full w-full items-center hover:bg-white'>

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

    );
}

export default BillingHistory;