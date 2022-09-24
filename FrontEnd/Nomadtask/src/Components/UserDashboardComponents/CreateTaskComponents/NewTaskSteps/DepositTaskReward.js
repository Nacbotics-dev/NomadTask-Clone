import React,{useContext} from 'react';
import { NewTaskContext } from '../../../ContextProviders/NewTaskContext';

function DepositTaskReward(props) {
    const {userData,} = useContext(NewTaskContext);
    return (
        <>
            <div className='pt-[30px] md:pt-[60px]'>
                <div className='flex flex-col items-center justify-center'>

                    <div className='w-[60px] h-[60px] mx-auto md:h-[88px] md:w-[88px]'>
                        <img className='w-full h-full' src="/Images/payment-bordered-white.svg" alt="" />
                    </div>

                    <div className=' mt-4 mb-[30px] text-center text-lg text-white md:text-[1.75rem]'>
                        <h4>Please complete your payment</h4>
                    </div>
                </div>

                <div className='w-full border border-[#334053] bg-[#273345] p-[30px]'>
                    <div className='py-[10px] border-b border-b-[#334053] text-[#8b9699] flex flex-row flex-wrap items-start text-base md:text-lg'>
                        <h4 className='min-w-[200px]'>Payment Option</h4>
                        <h4 className='text-white'>{userData?.payment_method}</h4>
                    </div>
                    <div className='py-[10px] border-b border-b-[#334053] text-[#8b9699] flex flex-row flex-wrap items-start text-base md:text-lg'>
                        <h4 className='min-w-[200px]'>Amount to send</h4>
                        <h4 className='text-white'>240.87 {userData?.payment_method}</h4>
                    </div>
                    <div className='py-[10px] border-b border-b-[#334053] text-[#8b9699] flex flex-row flex-wrap items-start text-base md:text-lg'>
                        <h4 className='min-w-[200px]'>Deposit Address</h4>

                        <div className='flex flex-col'>
                            <h4 className='text-white w-full break-all'>0x868CB1EDD34cB3F1C3639Fd1dD02d21b94258a4c</h4>
                            <div className='mt-[10px] w-[186px] h-[186px]'>
                                <img src="/Images/qr-code-svgrepo-com.svg" alt="" />
                            </div>
                        </div>
                        
                    </div>
                


                    <div className='mt-[30px] text-sm text-[#8b9699]'>
                        <p>Payment will be reviewed within 24 hours from the time when all the network confirmations are completed for this transaction. If you send an incorrect value, payment may not be accepted. <span className='text-[#f5222d]'>Sending any other digital asset will result in permanent loss.</span></p>
                    </div>
                </div>

                <div className='mt-5 text-base text-white text-center md:text-lg'>
                    <p>This payment request will expire in <span className='text-[#f5222d]'>23:07:34</span>. Please transfer the payment before the time runs out.</p>
                </div>
            
            </div>
            
        </>
    );
}

export default DepositTaskReward;