import React,{useState} from 'react';
import CustomSelect from '../../../SelectFieldComponents/CustomSelect';

function AdvancedOptions(props) {
    const [selected,setSelected] = useState('4 hours');
    const [showAdvance,setShowAdvanced] = useState(false);
    const [useScreenShot,setUseScreenshot] = useState(false);
    const DeadLine = ['1 hour','4 hours','24 hours','3 days','5 days','8 days','10 days']
    return (
        <>
             <div onClick={()=>{setShowAdvanced(!showAdvance)}} className='mb-[6px] cursor-pointer flex flex-row items-center text-[#73fdea] text-base md:text-lg'>
                <p>Advanced options</p>
                <span className='ml-1 mt-1' role="img" aria-label="caret-down"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="#73fdea" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg></span>
                <svg className='ml-1 mt-1 hidden' viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="#73fdea" aria-hidden="true"><path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path></svg>
            </div>

            {
                showAdvance?
           

                <div className='bg-[#273345] border border-[#334053] px-5 pb-5 mt-5 text-[#8b9699] text-base md:text-lg'>

                    <div className='mt-[30px]'>
                        <div className='mb-[6px]'>
                            <p>Time given to workers to submit their proofs</p>
                        </div>

                        <CustomSelect name={'task_deadline'} dataField={DeadLine} selected={selected} setSelected={setSelected}/>
                    </div>
                
                                                

                    <div className='mt-[30px]'>
                        <div className='mb-[6px] text-[#8b9699] text-base md:text-lg'>
                            <p>Limit workers based on reputation (Trust Score)</p>
                        </div>

                        <div>

                            <div className='flex flex-row items-center cursor-pointer mb-1'>
                                <input defaultChecked type="radio" name="worker_score" id="worker_score" value={0} />
                                <p className='px-2 text-white'>All (265022 workers)</p>
                            </div>
                            <div className='flex flex-row items-center cursor-pointer mb-1'>
                                <input type="radio" name="worker_score" id="worker_score" value={50} />
                                <p className='px-2 text-white'>Medium (Trust Score 50% or above, 162174 workers)</p>
                            </div>
                            <div className='flex flex-row items-center cursor-pointer mb-1'>
                                <input type="radio" name="worker_score" id="worker_score" value={75} />
                                <p className='px-2 text-white'>High (Trust Score 75% or above, 23105 workers)</p>
                            </div>
                            <div className='flex flex-row items-center cursor-pointer mb-1'>
                                <input type="radio" name="worker_score" id="worker_score" value={95} />
                                <p className='px-2 text-white'>Very High (Trust Score 95% or above, 5343 workers)</p>
                            </div>
                        </div>

                    </div>

                    <div className='mt-[30px]'>
                        <div className='mb-[6px] flex flex-row items-center text-[#8b9699] text-base md:text-lg'>
                            <p>Conceal my product link</p>
                            <div className='ml-[5px] cursor-pointer hover:text-[#73fdea]'>
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="question-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"></path></svg>
                            </div>
                        </div>

                        <div className='flex flex-row items-center space-x-2'>
                            <div className='text-white text-base flex flex-row items-center cursor-pointer md:text-lg'>
                                <input defaultChecked type="radio" name="conceal_product_link" id="conceal_product_link" value={true} />
                                <p className='px-2'>Yes</p>
                            </div>

                            <div className='text-white text-base flex flex-row items-center cursor-pointer md:text-lg'>
                            <input type="radio" name="conceal_product_link" id="conceal_product_link" value={false} />
                                <p className='px-2'>No</p>
                            </div>
                        </div>

                    

                    </div>

                    <div className='mt-[30px]'>
                        <div className='mb-[6px] text-[#8b9699] text-base md:text-lg'>
                            <p>Do you have screenshots about your product (or the target subject)?</p>
                        
                        </div>

                        <div className='flex flex-row items-center space-x-2'>
                            <div className='text-white text-base flex flex-row items-center cursor-pointer md:text-lg'>
                                <input onClick={(e)=>{setUseScreenshot(true)}}  type="radio" name="has_product_images" id="has_product_images" value={true} />
                                <p className='px-2'>Yes</p>
                            </div>

                            <div className='text-white text-base flex flex-row items-center cursor-pointer md:text-lg'>
                            <input onClick={(e)=>{setUseScreenshot(true)}}  defaultChecked type="radio" name="has_product_images" id="has_product_images" value={false} />
                                <p className='px-2'>No</p>
                            </div>
                        </div>

                        {
                            useScreenShot?
                            
                            <div className='mt-[30px]'>
                                <div className='mb-[6px]'>
                                    <p className='text-[#8b9699] text-base md:text-lg'>Product screenshots</p>
                                </div>

                                <div className='bg-[#273345] w-full h-[135px] relative border border-[#334053] border-dashed flex flex-col items-center place-content-center'>
                                    <input type="file" multiple accept="image/*" name="product_preview" id="product_preview" className='absolute w-full h-full opacity-0'/>

                                    <div>
                                        <img className='w-6 h-6 mx-auto' src="/Images/selectable-image.svg" alt="" />
                                        <div className='mt-4 text-sm text-[#8b9699]'>
                                            <p>Drag and drop file  here or <span className='text-[#73fdea]'>choose file</span> </p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            :
                            <></>
                        }
                    </div>
                </div>

                :<></>
            
            }

        </>
    );
}

export default AdvancedOptions;