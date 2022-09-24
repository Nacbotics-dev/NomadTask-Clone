import React,{useState} from 'react';

function CustomSelect({name,dataField,selected,setSelected}) {
    const [showDropDown,setShowDropDown] = useState(false);

    return (
        <div onClick={()=>{setShowDropDown(!showDropDown)}} className={`${showDropDown? 'border-[#3b746d] border':''} w-[150px] cursor-pointer border-b border-b-[#8b9699] relative`}>
            
            <div className='flex flex-row items-center justify-between bg-transparent text-[#8b9699] appearance-none text-base border-none outline-none h-8 w-full px-[11px]'>
                <div>
                    <input type="text" disabled value={selected} name={name} className='w-full h-full border-none bg-transparent' />
                </div>
                <div className='inline-flex items-center h-full'>
                    <svg className='w-3 h-3' viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="#8b9699" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
                </div>
            </div>
            {
                showDropDown?
            
                    <div className='absolute flex flex-col w-full bg-white border-gray-100 rounded-sm top-[35px] max-h-[280px]'>
                        {
                            dataField.map((item, key) => {
                                return (
                                    <div onClick={()=>{setSelected(item)}} key={key} className={`${selected===item?'bg-[#e8faf8]':''} p-2 pl-2 hover:bg-[#e8faf8]`}>
                                        <h3 className='text-[#8b9699] text-base'>{item}</h3>
                                    </div>
                                );
                            })
                        }   
                        
                    </div>
                :
                <></>
            }
        </div>
    );
}

export default CustomSelect;