import React,{useState,useEffect} from 'react';
import RangeSlider from './RangeSlider';


function RangeSliderWithInput({name,min,max,defaultValue,setMaxBudget}) {
    const [rangeValue,setRangeValue] = useState(0.58);


    useEffect(()=>{
        setRangeValue(defaultValue);
        if (setMaxBudget) {
            setMaxBudget(defaultValue)
        }
    },[defaultValue,setMaxBudget])
    
    useEffect(()=>{
        if (setMaxBudget) {
            setMaxBudget(rangeValue)
        }
    },[rangeValue,setMaxBudget])

    const handleChange = (e) =>{
        setRangeValue(e.target.value);
        if (setMaxBudget) {
            setMaxBudget(e.target.value)
        }
    }

    return (
        <div className='flex flex-row space-x-5 place-content-center items-center w-full'>

            <div className='max-w-[150px] px-[11px] w-full h-11 text-sm border border-[#334053] flex flex-row items-center space-x-1'>
                <p className='text-white'>$</p>
                <input onChange={handleChange} key={rangeValue} maxLength={max} minLength={min} type="text" name={name} defaultValue={rangeValue} className='w-full h-full text-white bg-transparent border-none outline-none'/>
            </div>


            <div className='w-full'>
                <RangeSlider min={min} max={max} defaultValue={rangeValue} setValue={setRangeValue}/>
            </div>

        </div>
    );
}

export default RangeSliderWithInput;