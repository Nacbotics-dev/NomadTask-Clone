import React,{useState,useEffect} from 'react';
import { Link,useLocation } from 'react-router-dom';
import MobileNavBar from './MobileNavBar';
import GetApiMethod from '../../Authorizations/APICalls/GetApiMethod';
import PricingPopUp from '../MiscComponents/PricingPopUp';

function QuestNavBar({background}) {
    const [showPopUp,setShowPopUp] = useState(false);
    const [showNavBar,setShowNavBar] = useState(false);
    const [showMobileNav,setShowMobileNav] = useState(false);


    const { pathname } = useLocation();
    let currentPath = pathname.split("/");
    const creditBalance = GetApiMethod('credit-balance/').data
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    useEffect(() => {
        const showNavToURLs = ['quests'];
        
        if (showNavToURLs.includes(currentPath[1])) {
            setShowNavBar(true);
        } else {
            setShowNavBar(false);
        }

    }, [currentPath,]);

    return (
        <>
            {
                showPopUp?
                <PricingPopUp setShowPopUp={setShowPopUp}/>
                :<></>
            }
            
            {
                showNavBar?
            
                <div style={{backgroundColor:background}} >
                    <div className='mx-auto w-full px-7 md:px-[160px] pt-[22px] lg:px-[392.5px]'>

                        <div className='flex flex-row justify-between flex-nowrap'>

                            <div className='cursor-pointer'>
                                <Link to={'/'}><img src="/Images/logo-rh-white.svg" alt="" /></Link>
                            </div>

                            {isAuthenticated?
                                <div className='flex flex-row items-center space-x-5 text-white'>
                                    <div>
                                        <Link to={'/profile/maker/new-task'} className='text-sm'>Create Task</Link>
                                    </div>

                                    <div onClick={()=>{setShowMobileNav(!showMobileNav)}} className='block w-6 h-6 cursor-pointer lg:hidden'>
                                        <svg className='w-full h-full' height="18" viewBox="0 0 26 18" width="26" xmlns="http://www.w3.org/2000/svg"><path d="m1 1.216h24m-24 7.784h14.4m-14.4 7.784h24" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
                                    </div>

                                    <div className='hidden lg:block'>
                                        <Link to={'/profile/hunter'} className='text-sm'>{creditBalance?.user_name} (${creditBalance?.balance})</Link>
                                    </div>
                                </div>

                            :
                                <ul className={`flex flex-row space-x-[30px]`}>
                                    <li onClick={()=>{setShowPopUp(!showPopUp)}} className='hidden text-sm text-white no-underline list-none cursor-pointer md:block'>Pricing</li>
                                    <Link to={'/login'} className='text-sm text-white no-underline list-none cursor-pointer'>Login</Link>
                                    <Link to={'/signup'} className='text-sm text-white no-underline list-none cursor-pointer'>Sign up</Link>
                                </ul>
                            }

                            
                        </div>
                    </div>

                    <MobileNavBar setShowMobileNav={setShowMobileNav} showMobileNav={showMobileNav} currentPath={currentPath}/>

                </div>

                :<></>

            }
        </>
    );
}

export default QuestNavBar;