import React from 'react';

function DeleteAccount(props) {
    return (
        <div className='w-[860px] calc-width mb-[30px] p-0 md:p-[30px] md:border-[#334053] md:border'>
            <div className='mb-[30px]'>
                <h3 className='text-white text-lg'>Account Settings</h3>
            </div>

            <div className='min-h-[44px] h-8 w-[180px]'>
                <button className='border-[#f5222d] border py-1 px-[15px] font-normal text-sm bg-transparent w-full h-full text-[#f5222d] uppercase hover:text-white hover:bg-black hover:border-black'>Delete Account</button>
            </div>

        </div>
        
    );
}

export default DeleteAccount;