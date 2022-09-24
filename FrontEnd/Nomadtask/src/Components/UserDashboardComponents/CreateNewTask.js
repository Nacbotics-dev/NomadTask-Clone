import React,{useState,useEffect} from 'react';
import { Loader } from '../Loaders/Loader';
import { getAdvancedFormValues } from '../Misc';
import { Link,useLocation } from 'react-router-dom';
import SidebarNav from '../NavBarComponent/SidebarNav';
import axiosInstance from '../../Authorizations/APICalls/AxiosBase';
import { NewTaskContext } from '../ContextProviders/NewTaskContext';
import CheckOut from './CreateTaskComponents/NewTaskSteps/CheckOut';
import SelectTaskType from './CreateTaskComponents/NewTaskSteps/SelectTaskType';
import TaskDescription from './CreateTaskComponents/NewTaskSteps/TaskDescription';
import DepositTaskReward from './CreateTaskComponents/NewTaskSteps/DepositTaskReward';
import { GetStateLessApiMethod } from '../../Authorizations/APICalls/GetApiMethod';


function CreateNewTask(props) {
    const [pageNum,setPageNum] = useState(1);
    const [userData,setUserData] = useState({});
    const [finalData,setFinalData] = useState([]);
    const [DataResponse,setDataResponse] = useState({loading:false,data:null,error:false})
    const [responseData,setResponseData] = useState({loading:false,data:null,error:false})
    

    const { pathname } = useLocation();
    let currentPath = pathname.split("/");

   

    useEffect(()=>{

        if (currentPath[4]) {
            let url = `task-detail-creator/${currentPath[4]}`
            GetStateLessApiMethod(url,setDataResponse)
        }
    },[])

    useEffect(()=>{
        if (DataResponse.data && !DataResponse.error) {
            setPageNum(2);
            // console.table(DataResponse.data)
        }
    },[DataResponse])

    



    const currentView = (pageNum) =>{
        switch (pageNum) {
            case 1:
                return(<SelectTaskType/>);
            case 2:
                return(<TaskDescription DataResponse={DataResponse.data}/>);
            case 3:
                return(<CheckOut/>);
            case 4:
                return(<DepositTaskReward/>);

        
            default:
                break;
        }
    }

    const formIsValid = () =>{
        let formData = getAdvancedFormValues();
        delete formData[''];
        
        let formKeys = Object.keys(formData).filter((item)=> item !== '').length
        let formValues = Object.values(formData).filter((item)=> item !== "").length
        
        if (formKeys > formValues) {
            return(false)
        } else {
            return(true)
        }
    }

    const buttonText = (pageNum)=>{
        switch (pageNum) {
            case 1:
                return('Continue');
            case 2:
                return('Save and Next');
            case 3:
                return('Proceed');
            case 4:
                return('Payment sent');        
            default:
                break;
        }
    }

    const CreateTask = () =>{

        let formData = Object.assign({},userData,getAdvancedFormValues());
        setUserData(formData);
        const Header = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }}
        setResponseData({loading:true,data:null,error:false});
        axiosInstance.post('create-task/',formData,Header).then(
            (response)=>{
                setResponseData({loading:false,data:response.data,error:false});
                setPageNum(pageNum+1);

            }
        ).catch(
            (error)=>{
                setResponseData({loading:false,data:error.response.data,error:true});
            }
        )
    }
    

    // if (responseData.data) {
    //     console.table(responseData.data,'///////////////')
    // }
    

    const handleNext = () =>{
        let isValid =  formIsValid();
        
        if (pageNum < 4) {

            if (isValid) {
                if (pageNum === 2) {
                    CreateTask()
                }else{
                    setPageNum(pageNum+1);
                }

                
                
                
            }

        }
    }


    const goBack = () =>{
        if (pageNum > 1) {
            setPageNum(pageNum-1)
        }
    }
    
    return (
        <div className='mx-auto w-full px-7 py-10 md:py-[70px] md:px-[160px] lg:px-[392.5px]'>
            <div className='flex flex-col items-center w-full space-x-0 place-content-center lg:space-x-20 lg:items-start lg:flex-row'>
                <SidebarNav/>

                <div className='w-[860px] calc-width mb-[30px] md:p-[30px] md:border-[#334053] md:border'>    
                    <NewTaskContext.Provider value={{userData,setUserData,finalData,setFinalData}}>
                        {currentView(pageNum)}
                    </NewTaskContext.Provider>

                    <div className='flex flex-row justify-between items-center mt-[50px]'>
                
                        <div onClick={goBack} className={`text-[#8b9699] cursor-pointer text-base flex-row items-center ${pageNum === 1? 'hidden':'flex'}`}>
                            <svg className='mr-1' viewBox="64 64 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg>
                            <p>Back</p>
                        </div>

                        <div className='w-[140px] min-h-[44px] h-8 md:w-[180px]'>
                            <Link to={'#'}>
                                <button disabled={responseData.loading} onClick={handleNext} className='border-[#73fdea] border py-1 px-[15px] text-sm md:text-base font-normal bg-transparent w-full h-full text-[#73fdea] uppercase hover:text-white hover:bg-black hover:border-black'>
                                

                                {
                                    responseData.loading?
                                    <Loader/>
                                    :
                                    buttonText(pageNum)
                                }
                                </button>
                            </Link>
                        </div>
                        

                    </div>


                </div>
            </div>
        </div>
    );
}

export default CreateNewTask;