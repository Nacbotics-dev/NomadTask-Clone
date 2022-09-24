import React,{useState} from 'react';
import { getAdvancedFormValues } from '../Misc';

function WithdrawalForm({setShowPopUp}) {
    const [agreed,setAgreed] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        let formData =getAdvancedFormValues();

        console.log(formData)
    }


    return (
        <>
            <div onClick={()=>{setShowPopUp(false)}} className='bg-[#080c13] shadow z-50'></div>
            <div className='w-full h-fit mx-auto border-[#334053] bg-[#212d3f] border-2 pointer-events-auto absolute top-[100px] left-0 right-0 z-50 md:w-[760px]'>
                <div onClick={()=>{setShowPopUp(false)}} className='max-w-[56px] cursor-pointer w-full max-h-[56px] h-full text-center absolute top-0 right-0 flex items-center justify-center'>
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="#8b9699" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                </div>

                <div className='px-7 py-[60px] md:p-[60px]'>

                

                    <div className='flex flex-row text-xl break-words md:text-[1.75rem]'>
                        <h3 className='text-white font-normal mr-[14px]'>TRANSFER TO</h3>
                        <img className=' w-[34px] h-[34px] mr-[7px]' src="/Images/eth-teal-inverse.svg" alt="" />
                        <h3 className='text-[#73fdea]'>Ethereum</h3>
                    </div>

                    <div className='mt-[50px]'>
                        <p className='text-white text-sm'>Available Balance</p>

                        <div className='text-[#73fdea] font-medium md:text-[40px] '>
                            <p>$0.00 <span className='text-[#8b9699] font-normal text-lg'>USD Point</span></p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col w-full mt-[30px]'>
                            <label className='text-white' htmlFor="recipient_address">Recipient Address</label>
                            <input required type="text" placeholder='e.g. 0x23gs35...' name='recipient_address' className='border border-white mt-[5px] text-white h-11 text-sm py-1 px-[11px] text-ellipsis bg-transparent outline-none rounded-none hover:border-[#73fdea] focus:border-[#73fdea]' />
                            <span className='text-[#f5222d] text-sm mt-[6px]'>Required</span>
                        </div>

                        <div className='flex flex-col w-full mt-[30px]'>
                            <label className='text-white' htmlFor="amount">Amount</label>

                            <div className='flex flex-col items-center justify-between flex-wrap w-full md:flex-row'>
                                <div className='w-full relative md:max-w-[290px]'>
                                    <input name='amount' defaultValue={5} required type="text" placeholder='Min 5 USD Point' className='border w-full border-white mt-[5px] text-white h-11 text-sm py-1 px-[11px] text-ellipsis bg-transparent outline-none rounded-none hover:border-[#73fdea] focus:border-[#73fdea]' />
                                    <span className='text-[#8b9699] text-sm absolute right-[15px] top-[17px]'>USD</span>
                                </div>

                                <div className='hidden mx-[15ppx] h-8 w-[30px] md:block'>
                                    <img className='w-full h-full' src="/Images/swap.svg" alt="" />
                                </div>
                                <span className='text-[#f5222d] w-full text-left block text-sm mt-[6px] md:hidden'>Required</span>

                                <div className='w-full relative md:max-w-[290px]'>
                                    <input defaultValue={0} name='equivalent' readOnly type="text" className='border cursor-not-allowed w-full border-white mt-[5px] text-white h-11 text-sm py-1 px-[11px] text-ellipsis bg-transparent outline-none rounded-none hover:border-[#73fdea] focus:border-[#73fdea]' />
                                    <span className='text-[#8b9699] text-sm absolute right-[15px] top-[17px]'>ETH</span>                                
                                </div>
                            </div>
                            <span className='text-[#f5222d] hidden text-sm mt-[6px] md:block'>Required</span>
                        </div>

                        <div className='text-[#8b9699] text-xs mt-[10px]'>
                            <p>ETH price = <span className='text-white'>$0.3421</span></p>
                            <p>Conversion fee (10%) = <span className='text-white'>$0.50</span></p>
                            <p>Blockchain Network Fee = <span className='text-white'>$0.20</span></p>

                        </div>

                        <div className='mt-[30px] text-[#8b9699] text-sm'>
                            Please check the address carefully before requesting a transfer and make sure that you're sending your tokens to <span className='text-[#f5222d]'>the correct Ethereum wallet (or deposit) address</span>. Nomadtask is NOT responsible for any losses or damages, including those incurred from providing the wrong information. <span className='text-[#f5222d]'>Each exchange may require a different minimum deposit, so please double check.</span>
                        </div>

                        <div onClick={()=>{setAgreed(!agreed)}} className='flex flex-row mt-4 items-center cursor-pointer'>
                            <div className='mr-[10px]'>
                                <svg viewBox="64 64 896 896" className={`text-2xl ${agreed === false ? 'block':'hidden'}`} focusable="false" data-icon="check-circle" width="1em" height="1em" fill="#8b9699" aria-hidden="true"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
                                <svg viewBox="64 64 896 896" className={`text-2xl ${agreed === true? 'block':'hidden'}`} focusable="false" data-icon="check-circle" width="1em" height="1em" fill="#73fdea" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                            </div>
                            <div>
                                <p className='text-[#8b9699] text-sm'>I have read and consent to the agreement above.</p>
                            </div>
                        </div>

                        <div className='w-[140px] min-h-[44px] h-8 md:w-[180px] mb-[30px]'>
                            <button  disabled={!agreed} className={`border-[#73fdea] ${agreed? 'opacity-100':'cursor-not-allowed opacity-50'} border py-1 px-[15px] mt-[30px] font-normal bg-transparent w-full h-full text-[#73fdea] uppercase text-sm hover:text-white hover:bg-black hover:border-black`}>
                            Request Transfer
                            </button>
                        </div>

                        <p className='text-[#f5222d] text-sm mt-[6px]'>Not enough balance</p>

                    </form>
                
                </div>
            </div>

        </>
    );
}

export default WithdrawalForm;