import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { getFormValues } from '../../Misc';
import { Loader } from '../../Loaders/Loader';
import PutApiMethod from '../../../Authorizations/APICalls/PutApiMethod';

function ChangePassword({setCurrentView}) {
    const [togglePassword,setTogglePassword] = useState(false);
    const [responseData,setResponseData] = useState({loading:false,data:null,error:false})

    const handleSubmit = (e) =>{
        e.preventDefault();
        const FormData = getFormValues()
        PutApiMethod('change-password/',setResponseData,FormData)
    }

    return (
        <div className='w-[860px] calc-width mb-[30px] p-0 md:p-[30px] md:border-[#334053] md:border'>
            <div className='mb-[30px]'>
                <h3 className='text-lg text-white'>Change Password</h3>
            </div>

            <form>

                <div className='border-b border-b-[#334053] py-[15px] h-16 items-center flex flex-row'>
                    <div className='min-w-[150px] md:min-w-[240px]'>
                        <p className='text-[#8b9699] text-base md:text-lg'>Current Password</p>
                    </div>

                    <div className='relative w-full my-2'>
                        <input name='old_password' type={`${togglePassword? 'text': 'password'}`} placeholder='Current Password' className='text-[#8b9699] border-[#334053] border outline-none w-full py-1 px-[11px] bg-transparent text-base md:text-lg'/>
                        
                        <div onClick={()=>{setTogglePassword(!togglePassword)}} className='w-[18px] h-[18px] absolute top-3 right-3 cursor-pointer'>
                            {
                                togglePassword?
                            
                            <svg className="w-full h-full hover:stroke-black" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            :
                            <svg className="w-full h-full hover:stroke-black" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>

                            }
                        </div>
                    </div>
                </div>

                <div className='border-b border-b-[#334053] py-[15px] h-16 items-center flex flex-row'>
                    <div className='min-w-[150px] md:min-w-[240px]'>
                        <p className='text-[#8b9699] text-base md:text-lg'>New Password</p>
                    </div>

                    <div className='relative w-full my-2'>
                        <input name='new_password' type={`${togglePassword? 'text': 'password'}`} placeholder='New Password' className='text-[#8b9699] border-[#334053] border outline-none w-full py-1 px-[11px] bg-transparent text-base md:text-lg'/>
                        
                        <div onClick={()=>{setTogglePassword(!togglePassword)}} className='w-[18px] h-[18px] absolute top-3 right-3 cursor-pointer'>
                            {
                                togglePassword?
                            
                            <svg className="w-full h-full hover:stroke-black" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            :
                            <svg className="w-full h-full hover:stroke-black" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>

                            }
                        </div>
                    </div>
                </div>


                <div className='border-b border-b-[#334053] py-[15px] h-16 items-center flex flex-row'>
                    <div className='min-w-[150px] md:min-w-[240px]'>
                        <p className='text-[#8b9699] text-base md:text-lg'>Confirm New Password</p>
                    </div>

                    <div className='relative w-full my-2'>
                        <input name='confirm_password' type={`${togglePassword? 'text': 'password'}`} placeholder='Confirm New Password' className='text-[#8b9699] border-[#334053] border outline-none w-full py-1 px-[11px] bg-transparent text-base md:text-lg'/>
                        
                        <div onClick={()=>{setTogglePassword(!togglePassword)}} className='w-[18px] h-[18px] absolute top-3 right-3 cursor-pointer'>
                            {
                                togglePassword?
                            
                            <svg className="w-full h-full hover:stroke-black" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            :
                            <svg className="w-full h-full hover:stroke-black" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>

                            }
                        </div>
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
                        'Change'
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

export default ChangePassword;