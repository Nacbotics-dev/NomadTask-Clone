import React,{useState,useEffect} from 'react';
import PutApiMethod from '../../Authorizations/APICalls/PutApiMethod';

function TaskRating({responseData}) {
    const [review,setReview] = useState({});
    const [dataResponse,setDataResponse] = useState({loading:false,data:null,error:false});

    useEffect(()=>{
        if (responseData) {
            setReview(responseData?.reviews)
        }
    },[responseData])


    useEffect(()=>{
        if (dataResponse.data) {
            setReview(dataResponse.data)
        }
    },[dataResponse])

    const rateTask =(taskID,rating)=>{
        let ratingData = {rating:rating,taskID:taskID};
        PutApiMethod('rate-task/',setDataResponse,ratingData)
    }


    return (
        <div className='bg-[#273345] border border-[#334053] mt-[30px] text-base md:text-lg flex flex-col items-start p-[30px] w-full'>
                        
            <div>
                <h3 className='text-[#8b9699] text-base md:text-lg'>Would you recommend this task to other workers?</h3>
            </div>

            <div className='mt-[30px] w-full flex flex-row flex-nowrap justify-between'>
                <div onClick={()=>{rateTask(responseData?.taskId,'yes')}} className='bg-[#334053] cursor-pointer flex flex-row flex-nowrap p-2 items-center justify-between w-[48%] h-11'>
                    <div className='flex flex-row items-center'>
                        <img className='w-7 h-7' src="/Images/poll-yes.svg" alt="" />
                        <p className='text-[#73fdea] text-sm ml-2'>Yes!</p>
                    </div>

                    <div>
                        <p className='text-white text-base md:text-lg'>{review?.yes}</p>
                    </div>

                </div>

                <div onClick={()=>{rateTask(responseData?.taskId,'no')}} className='bg-[#334053] cursor-pointer flex flex-row flex-nowrap p-2 items-center justify-between w-[48%] h-11'>
                    <div className='flex flex-row items-center'>
                        <img className='w-7 h-7' src="/Images/poll-no.svg" alt="" />
                        <p className='text-[#73fdea] text-sm ml-2'>No!</p>
                    </div>

                    <div>
                        <p className='text-white text-base md:text-lg'>{review?.no}</p>
                    </div>

                </div>

            </div>

        </div>

    );
}

export default TaskRating;