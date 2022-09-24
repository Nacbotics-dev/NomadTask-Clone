import React,{useState,useEffect} from 'react';
import { Loader } from '../Loaders/Loader';
import { getAdvancedFormValues } from '../Misc';
import URLProof from './TaskProofType/URLProof';
import TextProof from './TaskProofType/TextProof';
import VideoProof from './TaskProofType/VideoProof';
import ScreenshotProof from './TaskProofType/ScreenshotProof';
import PutApiMethod from '../../Authorizations/APICalls/PutApiMethod';

function SubmitProof({responseData,setApproved}) {
    const [dataResponse,setDataResponse] = useState({loading:false,data:null,error:false});
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        let formData = Object.assign({},{taskID:responseData?.taskId},getAdvancedFormValues());

        const Header = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }}

        PutApiMethod('submit-proof/',setDataResponse,formData,Header)
    }

    useEffect(()=>{
        if (dataResponse.data) {
            setApproved(true);
        }
    },[dataResponse,setApproved])

    const ProofType =(proof_type)=>{
        if (proof_type === 'video_proof') {
            return(<VideoProof/>)
        } else if (proof_type === 'url_proof') {
            return(<URLProof/>)
        }else if (proof_type === 'text_proof') {
            return(<TextProof/>)
        }else{
            return(<ScreenshotProof/>)
        }
    }
    return (
        <>
           <form onSubmit={handleSubmit}>
                {ProofType(responseData?.proof_type)}

                <div className='w-[140px] min-h-[44px] h-8 md:w-[180px] mb-[30px]'>
                    <button className='border-[#73fdea] border py-1 px-[15px] mt-[30px] font-normal bg-transparent w-full h-full text-[#73fdea] uppercase text-sm hover:text-white hover:bg-black hover:border-black'>
                    {
                        dataResponse.loading?
                        <Loader/>
                        :
                        'Submit Proof'
                    }
                    
                    </button>
                </div>
           </form>
        </>
    );
}

export default SubmitProof;