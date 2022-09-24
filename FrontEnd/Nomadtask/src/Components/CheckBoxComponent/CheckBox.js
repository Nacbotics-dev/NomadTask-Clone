import React,{useState} from 'react';

function CheckBox(props) {
    const [toggleChecked,setToggleChecked] = useState(false);
    return (
        <>
            <div onClick={()=>{setToggleChecked(!toggleChecked)}}>
                <div className={`ant-checkbox-wrapper ${toggleChecked? 'ant-checkbox-checked':''}`}>
                    <span className={`ant-checkbox ${toggleChecked? 'ant-checkbox-checked':''}`}>
                        <input value={toggleChecked}  defaultChecked={toggleChecked} type="checkbox" name="country_name" id="" className=' checked:bg-[#73fdea] ant-checkbox-input checked:border-[#73fdea]'/>
                        <span className='ant-checkbox-inner'></span>
                    </span>
                </div>
            </div>
        </>
    );
}

export default CheckBox;