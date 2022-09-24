import React from 'react';

function MessageBoard(props) {
    return (
        <div className='bg-[#273345] border border-[#334053] mt-[30px] text-base md:text-lg flex flex-col items-start p-[30px] w-full'>
                        
            <div>
                <h3 className='text-[#8b9699] text-base md:text-lg'>Message Board</h3>
            </div>

            <div className='w-full'>

                <div className='text-[#8b9699] text-sm mt-[15px]'>
                    <div className='flex flex-row space-x-2'>
                        <span className='text-white'>#269310</span>
                        <span>Al Berto</span>
                        <span className='bg-[#f5a623] text-white whitespace-nowrap text-[0.825rem] px-[0.5em] rounded-full'>Not Participating</span>
                    </div>
                    
                    <div className='mt-[0.2em] break-words'>
                        <p>Please increase the task rewards</p>
                    </div>

                    <div className='mt-[0.2em] break-words'>
                        <span className='text-[#73fdea]'>Reply</span>
                        <span> ∙ </span>
                        <span>a month ago</span>
                    </div>

                </div>

                <div className='mt-[10px]'>
                    <p className='text-[#73fdea] text-sm cursor-pointer'>View all 27 comments</p>
                </div>

                <div className='mt-[15px] flex flex-row items-center justify-between'>
                    <div className='mr-4 w-full'>
                    <input type="text" name="review_comment" id="review_comment" placeholder='Write a comment...' className='min-h-[42px] h-[42px] w-full py-[9px] px-[15px] text-white border border-[#8b9699] outline-none bg-transparent' />
                    </div>

                    <button className='text-[#73fdea] text-[0.75rem] bg-transparent'>Submit</button>

                </div>
            </div>

            

        </div>
    );
}

export default MessageBoard;