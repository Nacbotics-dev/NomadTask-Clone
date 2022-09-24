import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { getFormValues } from '../Misc';
import { Loader } from '../Loaders/Loader';
import axiosInstance from '../../Authorizations/APICalls/AxiosBase';

function Login(props) {
    // const navigateTo = useNavigate();
    const [togglePassword,setTogglePassword] = useState(false);
    const [responseData,setResponseData] = useState({data:null,loading:false,error:false});

    const handleSubmit = (e) =>{
        e.preventDefault();
        let formData = getFormValues();
        if (Object.keys(formData).length === Object.values(formData).filter(item=>item !== ''?item:'').length) {
            setResponseData({loading:true,data:null,error:false});
            axiosInstance.post('authenticate/',formData).then(
                (response)=>{
                    
                    localStorage.setItem('access_token',response.data['access']);
                    localStorage.setItem('refresh_token',response.data['refresh']);
                    localStorage.setItem('user_name',response.data['user_name']);
                    localStorage.setItem('date_joined',response.data['date_joined']);
                    localStorage.setItem('isAuthenticated',true);
                    setResponseData({loading:false,data:response.data,error:false});
                    // navigateTo('/');
                    window.location.href = '/';

                }
            ).catch(
                (error)=>{
                    setResponseData({loading:false,data:error.response.data,error:true});
                }
            )
        } else {
            
        }
    }

    return (
        <div className='py-[100px]'>

            <div className='max-w-[100px] h-[100px] w-full mx-auto'>
                <img src="/Images/logo-ribbon.svg" alt=""  className='h-full w-full'/>
            </div>

            <div className='mt-[30px]'>
                <h3 className='text-[#73fdea] text-center md:text-[1.75rem]'>Log in</h3>
            </div>

            <div className='max-w-[480px] p-[30px] mt-[30px] mx-auto w-full border border-[#334053]'>

                <form onSubmit={handleSubmit} autoComplete="new-password" action="" className='w-full flex flex-col items-start'>

                    <input required name='email' type="email" placeholder='Email address' className='h-11 px-3 w-full text-lg text-white appearance-none bg-transparent outline-none border-b border-b-[#334053] focus:border-b-[#73fdea]' />

                    <div className='w-full relative my-2'>
                        <input required name='password' type={`${togglePassword? 'text': 'password'}`} placeholder='Password' className='h-11 px-3 w-full text-lg text-white appearance-none bg-transparent outline-none border-b border-b-[#334053] focus:border focus:border-[#9cffee]' />
                        
                        <div onClick={()=>{setTogglePassword(!togglePassword)}} className='w-[18px] h-[18px] absolute top-3 right-3 cursor-pointer'>
                            {
                                togglePassword?
                            
                            <svg className="w-full h-full hover:stroke-black" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            :
                            <svg className="w-full h-full hover:stroke-black" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>

                            }
                        </div>

                    </div>

                    <div className='mt-[30px] w-full'>
                        <button disabled={responseData.loading} className='w-full border border-[#73fdea] text-[#73fdea] hover:bg-black hover:border-black hover:text-white font-normal text-sm bg-transparent min-h-[44px] min-w-[180px]'>
                            {
                                responseData.loading?
                                <Loader/>
                                :
                                'Log in'
                            }
                        </button>
                                        
                    </div>

                </form>

            </div>

            <div className='mt-5'>
                <p className='text-[#8b9699] text-sm text-center'><a href="#forgot">Forgot password?</a></p>
                <p className='text-[#8b9699] mt-[10px] text-sm text-center'><Link to={'/signup'}>Don't have an account?</Link></p>
            </div>
            
        </div>
    );
}

export default Login;