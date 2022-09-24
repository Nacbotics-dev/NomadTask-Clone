import React from 'react';
import { logOut } from '../Misc';
import { Link,useLocation } from 'react-router-dom';

function SidebarNav(props) {
    const { pathname } = useLocation();
    let currentPath = pathname.split("/");

    return (
        <div className='hidden lg:block'>
            <nav>
                <ul className='flex flex-col w-full'>
                    <Link to={'/profile/hunter'} className={`${currentPath[2]==='hunter'? 'active':''} text-[#8b9699] text-lg mb-4 hover:text-[#73fdea]`}>Worker Dashboard</Link>
                    <Link to={'/profile/maker'} className={`${currentPath[2]==='maker'? 'active':''} text-[#8b9699] text-lg mb-4 hover:text-[#73fdea]`}>Maker Dashboard</Link>
                    
                    <div className={`${currentPath[3]==='new-task'? 'block':'hidden'} bg-[#73fdea] bg-opacity-[0.15] border-r-[3px] mb-[11px] border-r-[#73fdea] flex flex-col justify-center h-[46px] px-2`}>
                        <div className='flex flex-row space-x-2 items-center text-[#73fdea] text-lg'>
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="edit" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path></svg>
                            <h3>New Task</h3>
                        </div>
                    </div>
                    <Link to={'/profile/credit'} className={`${currentPath[2]==='credit'? 'active':''} text-[#8b9699] text-lg mb-4 hover:text-[#73fdea]`}>My Credit</Link>
                    <Link to={'/profile/trust-score'} className={`${currentPath[2]==='trust-score'? 'active':''} text-[#8b9699] text-lg mb-4 hover:text-[#73fdea]`}>Trust Score</Link>
                    <Link to={'/profile/referral'} className={`${currentPath[2]==='referral'? 'active':''} text-[#8b9699] text-lg mb-4 hover:text-[#73fdea]`}>Referral</Link>
                    <Link to={'/profile/settings'} className={`${currentPath[2]==='settings'? 'active':''} text-[#8b9699] text-lg mb-4 hover:text-[#73fdea]`}>Settings</Link>
                    <Link onClick={logOut} to={'#'} className='text-[#8b9699] text-lg mb-4 hover:text-[#73fdea]'>Log out</Link>

                </ul>

                <div className='my-[10px] h-[44px] w-[180px]'>
                    <Link to={'/profile/maker/new-task'}>
                        <button className='bg-[#73fdea] mt-[30px] border-[#73fdea] text-black w-full h-full'>Create Task</button>
                    </Link>
                </div>

                <div className='w-full my-10'>
                    <div className='my-[10px]'>
                        <Link to={'#'} className='text-[#73fdea] text-sm'>Need an Assistant?</Link>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default SidebarNav;