import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getFormValues } from '../../Misc';
import { Loader } from '../../Loaders/Loader';
import GetApiMethod from '../../../Authorizations/APICalls/GetApiMethod';
import PutApiMethod from '../../../Authorizations/APICalls/PutApiMethod';
import SelectSearchField from '../../SelectFieldComponents/SelectSearchField';

function EditProfile({setCurrentView}) {
    var acceptedYears = [];
    const [MyProfile,setMyProfile] = useState({});
    const [newsLetter,setNewsLetter] = useState(false);
    const MyProfileData = GetApiMethod('my-profile/').data;
    const [responseData,setResponseData] = useState({loading:false,data:null,error:false})

    for (let index = 0; index < 10; index++) {
        acceptedYears.push(2004+index)
    }

    useEffect(()=>{
        let newsletter = MyProfileData?.newsletter;
        setNewsLetter(newsletter);
        setMyProfile(MyProfileData);
    },[MyProfileData])

    const handleSubmit = (e) =>{
        e.preventDefault();
        const FormData = getFormValues()
        PutApiMethod('update-profile/',setResponseData,FormData)
    }

    return (
        <div className='w-[860px] calc-width mb-[30px] p-0 md:p-[30px] md:border-[#334053] md:border'>
            <div className='mb-[30px]'>
                <h3 className='text-lg text-white'>User Information</h3>
            </div>

            <form>

                <div className='border-b border-b-[#334053] py-[15px] h-16 items-center flex flex-row'>
                    <div className='min-w-[150px] md:min-w-[240px]'>
                        <p className='text-[#8b9699] text-base md:text-lg'>Email Address</p>
                    </div>

                    <div className='w-full'>
                        <input name='email' readOnly type="text" defaultValue={MyProfile?.email} className='text-[#8b9699] border-[#334053] border outline-none w-full py-1 px-[11px] bg-transparent text-base md:text-lg'/>
                    </div>
                </div>

                <div className='border-b border-b-[#334053] py-[15px] h-16 items-center flex flex-row'>
                    <div className='min-w-[150px] md:min-w-[240px]'>
                        <p className='text-[#8b9699] text-base md:text-lg'>Full Name</p>
                    </div>

                    <div className='w-full'>
                        <input name='full_name' type="text" defaultValue={MyProfile?.full_name} className='text-[#8b9699] border-[#334053] border outline-none w-full py-1 px-[11px] bg-transparent text-base md:text-lg'/>
                    </div>
                </div>

                <div className='border-b border-b-[#334053] py-[15px] h-16 items-center flex flex-row'>
                    <div className='min-w-[150px] md:min-w-[240px]'>
                        <p className='text-[#8b9699] text-base md:text-lg'>Gender</p>
                    </div>

                    <div className='w-full'>
                        <SelectSearchField name={'gender'} defaultValue={MyProfile?.gender} dataFields={['Male','Female','Other']} styleClass={'!text-[#8b9699] border-[#334053] border w-full py-1 px-[11px] bg-transparent text-base md:text-lg'}/>
                    </div>
                </div>

                <div className='border-b border-b-[#334053] py-[15px] h-16 items-center flex flex-row'>
                    <div className='min-w-[150px] md:min-w-[240px]'>
                        <p className='text-[#8b9699] text-base md:text-lg'>Year of Birth</p>
                    </div>

                    <div className='w-full'>
                        <SelectSearchField name={'year_of_birth'} defaultValue={MyProfile?.year_of_birth} dataFields={acceptedYears} styleClass={'!text-[#8b9699] border-[#334053] border w-full py-1 px-[11px] bg-transparent text-base md:text-lg'}/>
                    </div>
                </div>
                
                <div className='border-b border-b-[#334053] py-[15px] h-16 items-center flex flex-row'>
                    <div className='min-w-[150px] md:min-w-[240px]'>
                        <p className='text-[#8b9699] text-base md:text-lg'>News Letter</p>
                    </div>

                    <div className={`ant-checkbox-wrapper ${newsLetter? 'ant-checkbox-checked':''}`}>
                        <span className={`ant-checkbox ${newsLetter? 'ant-checkbox-checked':''}`}>
                                <input onChange={()=>{setNewsLetter(!newsLetter)}} value={newsLetter} type="checkbox" name="newsletter" id="" className=' checked:bg-[#73fdea] ant-checkbox-input checked:border-[#73fdea]'/>
                                <span className='ant-checkbox-inner'></span>
                        </span>
                    </div>
                </div>
            </form>

            <div className='flex flex-row'>
                <div className='w-[140px] min-h-[44px] h-8 md:w-[180px] mb-[30px] mr-4'>
                    <button onClick={handleSubmit} className='border-[#73fdea] text-sm border py-1 px-[15px] mt-[30px] font-normal bg-transparent w-full h-full text-[#73fdea] uppercase hover:text-white hover:bg-black hover:border-black'>
                    {
                        responseData.loading?
                        <Loader/>
                        :
                        'Save'
                    }
                    </button>
                </div>

                <div className='w-[140px] min-h-[44px] h-8 md:w-[180px] mb-[30px]'>
                    <Link to={'#'}>
                        <button onClick={()=>{setCurrentView('')}} className='py-1 px-[15px] mt-[30px] text-sm font-normal bg-transparent w-full h-full text-[#73fdea] uppercase hover:text-white hover:bg-black hover:border-black'>Cancel</button>
                    </Link>
                    
                </div>

            </div>
            
        </div>
    );
}

export default EditProfile;