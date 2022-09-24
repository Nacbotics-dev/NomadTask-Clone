import React,{useEffect,useState} from 'react';
import Countdown from 'react-countdown';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import LoginFirst from '../TaskDetailComponents/LoginFirst';
import TaskRating from '../TaskDetailComponents/TaskRating';
import SubmitProof from '../TaskDetailComponents/SubmitProof';
import TaskProofType from '../TaskDetailComponents/TaskProofType';
// import MessageBoard from '../TaskDetailComponents/MessageBoard';
import GetTaskInfo from '../../Authorizations/APICalls/GetTaskInfo';
import SubmissionStat from '../TaskDetailComponents/SubmissionStat';
import UserReward from '../TaskDetailComponents/TaskReward/UserReward';
import TaskBudget from '../TaskDetailComponents/TaskReward/TaskBudget';
import TaskDetailHeader from '../TaskDetailComponents/TaskDetailHeader';
import TaskInstructions from '../TaskDetailComponents/TaskInstructions';
import RewardEligibility from '../TaskDetailComponents/RewardEligibility';
import UnqualifiedParticipant from '../TaskDetailComponents/UnqualifiedParticipant';

function TaskDetail(props) {
    const navigateTo = useNavigate()
    const { pathname } = useLocation();
    let currentPath = pathname.split("/");
    const [Approved,setApproved] = useState(false)
    const responseData = GetTaskInfo(`task-detail/${currentPath[2]}`);
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    useEffect(()=>{
        if (responseData.data?.error) {
            navigateTo('/');
        }
       
    })

    // if (responseData.data) {
    //     console.table(responseData.data,'~~~~~~~~~')
    // }

    const startTask = (responseData)=>{
         if (isAuthenticated) {
            if (!(parseInt(responseData?.my_trust_score) >= parseInt(responseData?.worker_score))) {
                return(<UnqualifiedParticipant responseData={responseData}/>)
            } else {
                return(<RewardEligibility responseData={responseData}/>)
            }
        }else if (!isAuthenticated) {
            return(<LoginFirst responseData={responseData}/>)
        }else{
            return(<></>)
        }
    }
    return (
        <div>
           <TaskDetailHeader responseData={responseData.data}/>


            <div className='flex flex-row-reverse flex-wrap  w-full py-[70px] px-7 md:px-[160px] lg:px-[400px]'>
                

                <div className='w-full lg:ml-[30px] lg:w-[320px]'>
                    {startTask(responseData.data)}
                    
                    <TaskRating responseData={responseData.data}/>
                    {/* <MessageBoard/> */}
                </div>



                <div className='w-full max-w-[770px] mt-[30px] lg:mt-0'>
                    <div className='border border-[#334053] text-base md:text-lg flex flex-col items-start p-[30px] w-full'>
                            
                        <div className='pb-5 border-b border-b-[#334053] w-full'>
                            <h3 className='text-white text-2xl'>{responseData.data?.task_title}</h3>
                        </div>

                        <div className='mt-10 mb-[10px] text-white text-base md:text-lg'>
                            <p>Task Reward</p>
                        </div>

                        {/* Task Reward */}
                        {
                            isAuthenticated?
                                <UserReward responseData={responseData.data}/>
                            :
                            <h3 className='text-[#73fdea] text-2xl font-medium'>${responseData.data?.user_reward} USD <span className='text-[#8b9699] font-normal text-base md:text-lg'>maximum payout</span></h3>
                        }

                        {/* Task Budget Reward */}
                        <TaskBudget responseData={responseData.data}/>
                        {/* Submission Stats */}
                        <SubmissionStat responseData={responseData.data}/>

                        {/* Task Instructions */}
                        <TaskInstructions responseData={responseData.data}/>


                        <div className='mt-10 w-full'>
                            <div className='text-white text-base mb-[10px] md:text-lg'>Product or subject link</div>

                            <div className='text-[#73fdea] bg-[#273345] border border-[#334053] py-[10px] px-[15px] text-ellipsis whitespace-nowrap  w-full text-base md:text-lg'>
                                <Link to={'#'}>{responseData.data?.product_link}</Link>
                            </div>
                        </div>

                        {/*Proof Type */}
                        <TaskProofType responseData={responseData.data}/>

                        {/* Screenshot Example */}
                        {
                            responseData.data?.screenshot_proof_example?
                        
                            <div className='mt-10 mb'>
                                <div className='text-white mb-[10px] text-base md:text-lg'>Screenshot Submission Example</div>

                                <div className='w-auto rounded-lg'>
                                    <img className='w-full max-h-[400px] rounded-lg h-full object-contain' src={'http://127.0.0.1:8000'+responseData.data?.screenshot_proof_example} alt="" />
                                </div>
                            </div>

                            :<></>
                        }

                        {
                            (responseData.data?.task_status === 'Approved') || Approved ?
                            <p className='text-center w-full mt-5 font-medium text-green-500 text-base md:text-lg'>You have completed this task congratulations</p>

                            :
                            <>
                                {
                                    (responseData.data?.task_status === 'Rejected')?
                                    <p className='text-center w-full mt-5 font-medium text-red-500 text-base md:text-lg'>Sorry but you failed to pass this task</p>
                                    :
                                    <>
                                        {
                                            responseData.data?.joined_task?
                                                <div className='w-full'>
                                                    {/* Count Down to Submission Deadline */}
                                                    <div className='flex w-full flex-row mb-5 justify-center text-center font-medium text-red-500 text-base md:text-lg'>
                                                        <p className='mr-2'>Submission Deadline :</p>
                                                        <Countdown date={responseData.data?.task_deadline}/>
                                                    </div>
                                                    <SubmitProof setApproved={setApproved} responseData={responseData.data}/>
                                                </div>
                                            :<></>
                                        }
                                    </>

                                }
                            </>


                        }

                        

                            

                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default TaskDetail;