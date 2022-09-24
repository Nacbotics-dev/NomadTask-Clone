import React from 'react';
import { Link } from 'react-router-dom';
import { logOut } from '../Misc';
import GetApiMethod from '../../Authorizations/APICalls/GetApiMethod';

function MobileNavBar({showMobileNav,setShowMobileNav,currentPath}) {
    const HideNavBar = ()=>{
        setShowMobileNav(false);
    }

    const creditBalance = GetApiMethod('credit-balance/').data

    return (
        <>
            <div className={`${showMobileNav? 'right-0':'-right-[400px]'} transition_0_5s bg-[#212d3f] max-w-[360px] w-full h-screen fixed overflow-y-scroll custom-scrollbar top-0 z-50`}>

                <div className='relative z-10 overflow-auto border-0'>
                    <div className=''>
                        <div onClick={()=>{setShowMobileNav(!showMobileNav)}} className={`${showMobileNav? 'right-5':'-right-[400px]'} transition_0_5s fixed inline-block w-10 h-8 cursor-pointer top-7`}>
                            <svg className='w-full h-full' viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="#8b9699" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                        </div>

                        <div className='flex flex-col pt-[100px] px-7 pb-9'>
                            <div>
                                <h3 className='text-2xl text-white'>{creditBalance?.user_name} (${creditBalance?.balance})</h3>
                                <hr className='border-[#334053] w-full my-5' />
                            </div>

                            <nav>
                                <ul className='flex flex-col w-full'>
                                <Link onClick={HideNavBar} to={'/'} className={`text-[#8b9699] ${currentPath[1]===''? 'active':''} text-base my-[10px] hover:text-[#73fdea]`}>Home</Link>
                                <Link onClick={HideNavBar} to={'/profile/hunter'} className={`${currentPath[2]==='hunter'? 'active':''} text-[#8b9699] text-base my-[10px] hover:text-[#73fdea]`}>Worker Dashboard</Link>
                                <Link onClick={HideNavBar} to={'/profile/maker'} className={`${currentPath[2]==='maker'? 'active':''} text-[#8b9699] text-base my-[10px] hover:text-[#73fdea]`}>Maker Dashboard</Link>
                                <Link onClick={HideNavBar} to={'/profile/credit'} className={`${currentPath[2]==='credit'? 'active':''} text-[#8b9699] text-base my-[10px] hover:text-[#73fdea]`}>My Credit</Link>
                                <Link onClick={HideNavBar} to={'/profile/trust-score'} className={`${currentPath[2]==='trust-score'? 'active':''} text-[#8b9699] text-base my-[10px] hover:text-[#73fdea]`}>Trust Score</Link>
                                <Link onClick={HideNavBar} to={'/profile/referral'} className={`${currentPath[2]==='referral'? 'active':''} text-[#8b9699] text-base my-[10px] hover:text-[#73fdea]`}>Referral</Link>
                                <Link onClick={HideNavBar} to={'/profile/settings'} className={`${currentPath[2]==='settings'? 'active':''} text-[#8b9699] text-base my-[10px] hover:text-[#73fdea]`}>Settings</Link>
                                <Link onClick={logOut} to={'#'} className='text-[#8b9699] text-base my-[10px] hover:text-[#73fdea]'>Log out</Link>

                                </ul>
                            </nav>


                            <div className='my-[10px] max-w-[140px] h-[44px] md:max-w-[180px]'>
                                <Link to={'/profile/maker/new-task'}>
                                    <button className='bg-[#73fdea] mt-[30px] border-[#73fdea] text-black w-full h-full'>Create Task</button>
                                </Link>
                            </div>

                            <div className='w-full my-10'>
                                <div className='my-[10px]'>
                                    <Link to={'#'} className='text-[#73fdea] text-sm'>Need an Assistant?</Link>
                                </div>
                                <div className='my-[10px]'>
                                    <Link to={'#'} className='text-[#73fdea] text-sm'>Read Pitch Deck</Link>
                                </div>
                            </div>

                            <div className='w-full'>
                                <div className='my-[10px]'>
                                    <Link to={'#'} className='text-[#73fdea] text-sm'>English <span className='text-[#8b9699]'>/ 한국어</span></Link>
                                </div>
                            </div>



                            
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default MobileNavBar;