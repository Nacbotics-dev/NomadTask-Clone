import React from 'react';

function UserReward({responseData}) {

    const reward_ratio = (parseFloat(responseData?.reward_ratio)*100)

    const rewardPercentage = ((20*reward_ratio)/100);
    const remainderPercentage = 20 - rewardPercentage;

    return (
        <>
            <div className='flex flex-row items-center w-full'>
                <h4 className='text-[#73fdea] text-2xl font-medium'>${responseData?.user_reward} USD</h4>

                <div className='flex flex-row mx-[10px]'>
                {
                    [...Array(rewardPercentage?rewardPercentage:0).keys()].map((percentage, key) =>{
                        return(
                            <div key={key} className='bg-[#73fdea] w-[2px] h-[22px] mx-[1.5px]'></div>
                        )
                    }
                    )
                }

                {
                    [...Array(remainderPercentage?remainderPercentage:0).keys()].map((percentage, key) =>{
                        return(
                            <div key={key} className='bg-[#8b9699] w-[2px] h-[22px] mx-[1.5px]'></div>
                        )
                    }
                    )
                }
                </div>

                <h4 className='text-[#8b9699] text-sm'>Max ${responseData?.task_reward}</h4>
            </div>
        </>
    );
}

export default UserReward;