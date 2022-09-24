import React,{useState,useEffect} from 'react';
import { Link,useLocation } from 'react-router-dom';
import MobileNavBar from './MobileNavBar';
import PricingPopUp from '../MiscComponents/PricingPopUp';
import GetApiMethod from '../../Authorizations/APICalls/GetApiMethod';


export default function IndexNavbar(props) {
    const [showPopUp,setShowPopUp] = useState(false);
    const [showNavBar,setShowNavBar] = useState(false);
    const [showSearch,setShowSearch] = useState(false);
    const [showSearchBar,setShowSearchBar] = useState(false);
    const [showMobileNav,setShowMobileNav] = useState(false);

    const creditBalance = GetApiMethod('credit-balance/').data

    const { pathname } = useLocation();
    let currentPath = pathname.split("/");
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    useEffect(() => {
        const showSearchToURL = ['']
        const showNavToURLs = ['','login','signup']

        if (showNavToURLs.includes(currentPath[1])) {
            setShowNavBar(true);
        } else {
            setShowNavBar(false);
        }

        if (showSearchToURL.includes(currentPath[1])) {
            setShowSearchBar(true);
        } else {
            setShowSearchBar(false);
        }
    
    }, [currentPath,]);




    return (
        <>
        {
            showNavBar?
            <>
                {
                    showPopUp?
                    <PricingPopUp setShowPopUp={setShowPopUp}/>
                    :<></>
                }
                <div className={`${showSearch? 'top-1' :'-top-16'} fixed w-full z-50`}>
                    <div className='bg-[#192332] relative top-4 flex flex-row items-center w-[95%] mx-auto h-12 border border-[#73fdea]'>
                        <input type="text" placeholder='Search tasks' className='w-full h-full px-3 py-1 text-sm text-white bg-transparent outline-none' />

                        <div onClick={()=>{setShowSearch(!showSearch)}} className='right-0 flex flex-col items-center w-8 h-full cursor-pointer place-content-center'>
                            <svg className='h-[14px] w-[14px]' viewBox="64 64 896 896" focusable="false" data-icon="close" fill="#8b9699" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                        </div>
                    </div>

                </div>

                <div className='mx-auto w-full px-7 pt-[22px] md:w-3/4 lg:w-full lg:px-[392.5px]'>
                    <div className='flex flex-row justify-between flex-nowrap'>

                        <div className='cursor-pointer'>
                            <Link to={'/'}><img src="/Images/logo-blue.svg" alt="" /></Link>
                        </div>


                        <div className={`flex max-w-max w-full items-center md:space-x-[30px]`}>
                            {
                                showSearchBar?
                            
                                    <div className='border-[#8b9699] border hidden md:block'>
                                        <div className='relative flex flex-row items-center h-8'>
                                            <input id='search_field' type="text" placeholder='Search tasks' className='w-full h-full px-3 py-1 text-sm text-white bg-transparent outline-none' />

                                            <div className='right-0 flex flex-col items-center w-8 h-full cursor-pointer place-content-center'>
                                                <svg  viewBox="64 64 896 896" focusable="false"  data-icon="search" width="1em" height="1em" fill="#8b9699" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                :<></>
                            }

                           

                            {
                                isAuthenticated?
                                <ul className='flex flex-row space-x-[30px]'>
                                    <Link to={'/profile/maker/new-task'} className='text-sm text-white no-underline list-none cursor-pointer'>Create Task</Link>
                                    {
                                        showSearchBar?
                                            <svg onClick={()=>{setShowSearch(!showSearch)}} viewBox="64 64 896 896" focusable="false" className="block w-5 h-5 md:hidden" data-icon="search" fill="#ffff" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
                                        :<></>
                                    }
                                    <Link to={'/profile/hunter'} className='hidden text-sm text-white no-underline list-none cursor-pointer lg:block'>{creditBalance?.user_name} (${creditBalance?.balance})</Link>
                                    <div onClick={()=>{setShowMobileNav(!showMobileNav)}} className='block cursor-pointer lg:hidden'>
                                        <img src="Images/m-nav-white.svg" alt="" />
                                    </div>
                                </ul>
                            :

                                <ul className={`flex flex-row space-x-[30px]`}>
                                    <li onClick={()=>{setShowPopUp(!showPopUp)}} className='hidden text-sm text-white no-underline list-none cursor-pointer md:block'>Pricing</li>
                                    {
                                        showSearchBar?
                                            <svg onClick={()=>{setShowSearch(!showSearch)}} viewBox="64 64 896 896" focusable="false" className="block w-5 h-5 md:hidden" data-icon="search" fill="#ffff" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
                                        :<></>
                                    }
                                    <Link to={'/login'} className='text-sm text-white no-underline list-none cursor-pointer'>Login</Link>
                                    <Link to={'/signup'} className='text-sm text-white no-underline list-none cursor-pointer'>Sign up</Link>
                                </ul>

                            }

                            
                        </div>
                    </div>

                    <MobileNavBar setShowMobileNav={setShowMobileNav} showMobileNav={showMobileNav} currentPath={currentPath}/>
                </div>
            </>
            :
            <></>
        }
                
        </>
    );
}
