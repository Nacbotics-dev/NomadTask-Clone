import React,{useState,useEffect} from 'react';
import { Link,useLocation } from 'react-router-dom';
import MobileNavBar from './MobileNavBar';
import GetApiMethod from '../../Authorizations/APICalls/GetApiMethod';

function DashboardNavBar(props) {
    const [showNavBar,setShowNavBar] = useState(false);
    const [showMobileNav,setShowMobileNav] = useState(false);

    const creditBalance = GetApiMethod('credit-balance/').data


    const { pathname } = useLocation();
    let currentPath = pathname.split("/");


    useEffect(() => {
        const showNavToURLs = ['profile'];
        
        if (showNavToURLs.includes(currentPath[1])) {
            setShowNavBar(true);
        } else {
            setShowNavBar(false);
        }

    }, [currentPath,]);
    

    return (
        <>
            {
                showNavBar?
            
                <div className='bg-[#73fdea]'>
                    <div className='mx-auto w-full px-7 md:px-[160px] pt-[22px] md:min-h-[285px] lg:w-full lg:px-[392.5px]'>

                        <div className='flex flex-row justify-between flex-nowrap'>

                            <div className='cursor-pointer'>
                                <Link to={'/'}><img src="/Images/logo-rh-black.svg" alt="" /></Link>
                            </div>

                            <div className='flex flex-row items-center space-x-5'>
                                <div>
                                    <Link to={'/profile/maker/new-task'} className='text-sm'>Create Task</Link>
                                </div>

                                <div onClick={()=>{setShowMobileNav(!showMobileNav)}} className='block w-6 h-6 cursor-pointer lg:hidden'>
                                    <svg className='w-full h-full' height="18" viewBox="0 0 26 18" width="26" xmlns="http://www.w3.org/2000/svg"><path d="m1 1.216h24m-24 7.784h14.4m-14.4 7.784h24" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
                                </div>

                                <div className='hidden lg:block'>
                                    <Link to={'/profile/hunter'} className='text-sm'>{creditBalance?.user_name} (${creditBalance?.balance})</Link>
                                </div>
                            </div>
                        </div>

                        <div className='pt-[120px] flex flex-col items-start justify-end pb-10 md:pb-0 md:items-center lg:justify-center lg:pt-0'>
                            <div className='mb-[10px] md:mb-0'>
                                <h2 className='text-black font-medium leading-normal text-2xl uppercase md:text-[4.25rem]'>{creditBalance?.user_name}</h2>
                            </div>
                            <div>
                                <p className='text-[#000000A6] text-base md:text-lg'>Joined since {creditBalance?.date_joined}</p>
                            </div>
                        </div>
                    </div>

                    <MobileNavBar setShowMobileNav={setShowMobileNav} showMobileNav={showMobileNav} currentPath={currentPath}/>

                </div>

                :<></>

            }
        </>
    );
}

export default DashboardNavBar;