import React,{useContext,useState,useEffect} from 'react';
import { returnPercentage } from '../../../Misc';
import { NewTaskContext } from '../../../ContextProviders/NewTaskContext';

function CheckOut(props) {
    const [toggleCoupon,setToggleCoupon] = useState(false);
    const {userData,setUserData} = useContext(NewTaskContext);
    const [paymentMethod,setPaymentMethod] = useState('Hunt');

    useEffect(()=>{
        setUserData({...userData,payment_method:paymentMethod});
    },[paymentMethod,])
    
    return (
        <>
            <div className='mb-[30px]'>
                <h3 className='text-white uppercase text-[1.75rem]'>CHECK OUT</h3>
            </div>
            <div>
                <div className='mt-[30px] mb-[10px] text-base border-b border-b-[#334053] md:text-lg'>
                    <div className='flex flex-row items-center mb-[10px]'>
                        <h4 className='text-[#8b9699] w-[330px]'>Total reward fund</h4>
                        <h4 className='text-white'>${userData?.task_budget}</h4>
                    </div>
                    <div className='flex flex-row items-center mb-[10px]'>
                        <h4 className='text-[#8b9699] w-[330px]'>Operation / conversion fee (10%)</h4>
                        <h4 className='text-white'>${parseFloat(returnPercentage(userData?.task_budget,10))}</h4>
                    </div>
                    <div className='flex flex-row items-center mb-[10px]'>
                        <h4 className='text-[#8b9699] w-[330px]'>Tax (VAT, 10%)</h4>
                        <h4 className='text-white'>${parseFloat(returnPercentage(userData?.task_budget,10))}</h4>
                    </div>
                </div>

                <div>
                    <div className='flex flex-row items-center'>
                        <h4 className='text-[#8b9699] w-[330px]'>Final amount (Tax included)</h4>
                        <h4 className='text-white'>${(parseFloat(userData?.task_budget)+parseFloat(returnPercentage(userData?.task_budget,10))+parseFloat(returnPercentage(userData?.task_budget,10))*2).toFixed(2)}</h4>
                    </div>

                </div>
            </div>

            <div className='mt-[30px]'>
                <div onClick={()=>{setToggleCoupon(!toggleCoupon)}} className='mb-[6px] cursor-pointer flex flex-row justify-between items-center text-[#73fdea] text-base md:text-lg'>
                    <p>Promotion Code</p>
                    <span className='ml-1 mt-1' role="img" aria-label="caret-down"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="#73fdea" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg></span>
                    <svg className='ml-1 mt-1 hidden' viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="#73fdea" aria-hidden="true"><path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path></svg>
                </div>

                {
                    toggleCoupon?
                        <div className='mt-[10px] relative w-full'>
                            <input type="text" name="coupon_code" id="coupon_code" placeholder='Coupon code' className='border-[#334053] border bg-transparent text-white py-1 px-[11px] outline-none appearance-none w-full' />
                            <button className='bg-[#73fdea] border-[#73fdea] absolute px-[11px] text-[#8b9699] h-full right-0'>Apply</button>
                        </div>
                    :<></>
                }
            </div>

            <div className='mt-[30px]'>

                <div className='mt-10'>
                    <div>
                        <h3 className='text-lg text-white'>Choose Payment Option</h3>
                    </div>

                    <div className='grid grid-cols-2 mt-4 gap-2 md:grid-cols-4'>
                        {/* <div onClick={()=>{setPaymentMethod('PayPal')}} className={`bg-[#273345] ${paymentMethod==='PayPal'?'active-border':'border-[#334053]'} flex flex-col justify-between space-y-4 items-start border p-[15px] cursor-pointer min-h-[120px] h-[120px] w-full`}>
                            <div>
                                <img src="/Images/usd-teal.svg" alt="" />
                            </div>
                            <div>
                                <div>
                                    <h3 className='text-[#73fdea] text-sm'>PayPal</h3>
                                </div>
                            </div>
                        </div> */}

                        <div onClick={()=>{setPaymentMethod('Hunt')}} className={`bg-[#273345] ${paymentMethod==='Hunt'?'active-border':'border-[#334053]'} flex flex-col justify-between space-y-4 items-start border p-[15px] cursor-pointer min-h-[120px] h-[120px] w-full`}>
                            <div>
                                <img src="/Images/hunt-teal-circle.svg" alt="" />
                            </div>
                            <div>
                                <div className='text-[#8b9699] text-[9.5px] leading-[1.2]'>
                                    <p className='text-[#f75abb]'>Fee waived</p>
                                </div>
                                <div>
                                    <h3 className='text-[#73fdea] text-sm'>HUNT</h3>
                                </div>
                            </div>
                        </div>

                        <div onClick={()=>{setPaymentMethod('Ethereum')}} className={`bg-[#273345] ${paymentMethod==='Ethereum'?'active-border':'border-[#334053]'} flex flex-col justify-between space-y-4 items-start border p-[15px] cursor-pointer min-h-[120px] h-[120px] w-full`}>
                            <div>
                                <img src="/Images/eth-teal-circle.svg" alt="" />
                            </div>
                            <div>
                                <div>
                                    <h3 className='text-[#73fdea] text-sm'>Ethereum</h3>
                                </div>
                            </div>
                        </div>

                        <div onClick={()=>{setPaymentMethod('Bitcoin')}} className={`bg-[#273345] ${paymentMethod==='Bitcoin'?'active-border':'border-[#334053]'} flex flex-col justify-between space-y-4 items-start border p-[15px] cursor-pointer min-h-[120px] h-[120px] w-full`}>
                            <div>
                                <img src="/Images/btc-teal.svg" alt="" />
                            </div>
                            <div>
                                <div>
                                    <h3 className='text-[#73fdea] text-sm'>Bitcoin</h3>
                                </div>
                            </div>
                        </div>

                        <div onClick={()=>{setPaymentMethod('STEEM')}} className={`bg-[#273345] ${paymentMethod==='STEEM'?'active-border':'border-[#334053]'} flex flex-col justify-between space-y-4 items-start border p-[15px] cursor-pointer min-h-[120px] h-[120px] w-full`}>
                            <div>
                                <img src="/Images/steem-teal.svg" alt="" />
                            </div>
                            <div>
                                <div>
                                    <h3 className='text-[#73fdea] text-sm'>STEEM</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-5 text-sm text-[#8b9699]'>
                <p>* Your task will be live right after the payment is completed.</p>
                <p>* I have read and agree to these <span className='text-[#73fdea]'>Guidelines</span>, and the <span className='text-[#73fdea]'>Refund Policy</span>.</p>
            </div>
        </>
    );
}

export default CheckOut;