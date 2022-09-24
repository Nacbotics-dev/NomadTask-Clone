import React,{useState} from 'react';
import SidebarNav from '../NavBarComponent/SidebarNav';
import WithdrawalForm from '../MiscComponents/WithdrawalForm';
import GetApiMethod from '../../Authorizations/APICalls/GetApiMethod';

function MyCredit(props) {
    const [showPopUp,setShowPopUp] = useState(false);
    const creditBalance = GetApiMethod('credit-balance/').data;


    const setActiveBar = ((e)=>{
        
        Array.from(document.querySelectorAll('.filter-txn')).forEach(function(el) { 
            el.classList.remove('active-bottom');
        });
        e.target.classList.add('active-bottom')
        
    });


    return (
        <>
            

            {
                    showPopUp?
                    <WithdrawalForm setShowPopUp={setShowPopUp}/>
                    :<></>
                }
       
            <div className='mx-auto w-full px-7 py-10 md:py-[70px] md:px-[160px] lg:px-[392.5px]'>
                <div className='flex flex-col items-center w-full space-x-0 place-content-center lg:space-x-20 lg:items-start lg:flex-row'>
                    <SidebarNav/>

                    <div className='w-[860px] calc-width mb-[30px] p-0 md:p-[30px] md:border-[#334053] md:border'>
                            <div className='mb-[30px]'>
                                <h3 className='text-white uppercase text-[1.75rem]'>MY CREDIT</h3>
                            </div>

                            <div>

                                <div className='mt-10 text-lg text-white'>
                                    <h3>Available Balance</h3>
                                </div> 
                                <div className='text-[#73fdea] text-[40px] font-medium'>
                                    <h2>${creditBalance?.balance} <span className='text-[#8b9699] font-normal text-lg'>USD Point</span></h2>
                                </div>  

                                <div>
                                    <h5 className='text-[#8b9699] text-lg'>Total earnings: ${creditBalance?.total_earnings}</h5>
                                </div>
                            </div>   

                            <div className='mt-10'>
                                <div>
                                    <h3 className='text-lg text-white'>Withdrawal Options</h3>
                                </div>

                                <div className='grid grid-cols-2 mt-4 md:grid-cols-6'>
                                    <div onClick={()=>{setShowPopUp(!showPopUp)}} className='bg-[#273345] border-[#334053] flex flex-col justify-between space-y-4 items-start border p-[15px] mb-5 cursor-pointer min-h-[120px] h-[120px] max-w-[120px] w-full'>
                                        <div>
                                            <img src="/Images/hunt-teal-circle.svg" alt="" />
                                        </div>
                                        <div>
                                            <div className='text-[#8b9699] text-[9.5px] leading-[1.2]'>
                                                <p className='text-[#f75abb]'>No Conversion fee</p>
                                                <p>Blockchain fee: $1.0</p>
                                            </div>
                                            <div>
                                                <h3 className='text-[#73fdea] text-sm'>HUNT</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div onClick={()=>{setShowPopUp(!showPopUp)}} className='bg-[#273345] border-[#334053] flex flex-col justify-between space-y-4 items-start border p-[15px] mb-5 cursor-pointer min-h-[120px] h-[120px] max-w-[120px] w-full'>
                                        <div>
                                            <img src="/Images/eth-teal-circle.svg" alt="" />
                                        </div>
                                        <div>
                                            <div className='text-[#8b9699] text-[9.5px] leading-[1.2]'>
                                                <p>Conversion fee: 10%</p>
                                                <p>Blockchain fee: $1.0</p>
                                            </div>
                                            <div>
                                                <h3 className='text-[#73fdea] text-sm'>ETH</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div onClick={()=>{setShowPopUp(!showPopUp)}} className='bg-[#273345] border-[#334053] flex flex-col justify-between space-y-4 items-start border p-[15px] mb-5 cursor-pointer min-h-[120px] h-[120px] max-w-[120px] w-full'>
                                        <div>
                                            <img src="/Images/xrp-teal-circle.svg" alt="" />
                                        </div>
                                        <div>
                                            <div className='text-[#8b9699] text-[9.5px] leading-[1.2]'>
                                                <p>Conversion fee: 10%</p>
                                                <p className='text-[#f75abb]'>Blockchain fee: $0.2</p>
                                            </div>
                                            <div>
                                                <h3 className='text-[#73fdea] text-sm'>XRP</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div onClick={()=>{setShowPopUp(!showPopUp)}} className='bg-[#273345] border-[#334053] flex flex-col justify-between space-y-4 items-start border p-[15px] mb-5 cursor-pointer min-h-[120px] h-[120px] max-w-[120px] w-full'>
                                        <div>
                                            <img src="/Images/steem-teal.svg" alt="" />
                                        </div>
                                        <div>
                                            <div className='text-[#8b9699] text-[9.5px] leading-[1.2]'>
                                                <p>Conversion fee: 10%</p>
                                                <p className='text-[#f75abb]'>Blockchain fee: Free</p>
                                            </div>
                                            <div>
                                                <h3 className='text-[#73fdea] text-sm'>STEEM</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div onClick={()=>{setShowPopUp(!showPopUp)}} className='bg-[#273345] border-[#334053] flex flex-col justify-between space-y-4 items-start border p-[15px] mb-5 cursor-pointer min-h-[120px] h-[120px] max-w-[120px] w-full'>
                                        <div>
                                            <img className='w-6 h-6' src="/Images/tron-trx-logo.svg" alt="" />
                                        </div>
                                        <div>
                                            <div className='text-[#8b9699] text-[9.5px] leading-[1.2]'>
                                                <p>Conversion fee: 10%</p>
                                                <p className='text-[#f75abb]'>Blockchain fee: $0.2</p>
                                            </div>
                                            <div>
                                                <h3 className='text-[#73fdea] text-sm'>TRX</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div onClick={()=>{setShowPopUp(!showPopUp)}} className='bg-[#273345] border-[#334053] flex flex-col justify-between space-y-4 items-start border p-[15px] mb-5 cursor-pointer min-h-[120px] h-[120px] max-w-[120px] w-full'>
                                        <div>
                                            <img src="/Images/coupon-teal.svg" alt="" />
                                        </div>
                                        <div>
                                            <div className='text-[#8b9699] text-[9.5px] leading-[1.2]'>
                                                <p className='text-[#f75abb]'>No fee</p>
                                            </div>
                                            <div>
                                                <h3 className='text-[#73fdea] text-sm'>Coupon</h3>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>


                            <div className='mt-10'>
                                <div>
                                    <h3 className='text-lg text-white'>Transactions</h3>
                                </div>

                                <ul className='flex text-[#8b9699] border-b border-b-[#334053] space-x-4 text-sm cursor-pointer outline-none flex-row flex-nowrap items-center'>
                                    <li onClick={setActiveBar} className='filter-txn flex flex-row items-center py-3 active-bottom'>
                                        Rewards
                                        <svg className='ml-4' viewBox="64 64 896 896" focusable="false" data-icon="dollar" width="1em" height="1em" fill="#fff" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"></path></svg>
                                    </li>
                                    <li onClick={setActiveBar} className='filter-txn flex flex-row items-center py-3'>
                                        Withdrawals
                                        <svg className='ml-4' viewBox="64 64 896 896" focusable="false"  data-icon="export" width="1em" height="1em" fill="#fff" aria-hidden="true"><path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"></path></svg>
                                    </li>
                                </ul>

                            </div>

                        </div>                    
                </div>
            </div>
        
        </>
    );
}

export default MyCredit;