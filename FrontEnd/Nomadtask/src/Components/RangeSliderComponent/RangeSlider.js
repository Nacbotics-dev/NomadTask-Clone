import React,{useEffect, useState} from 'react';

function RangeSlider({min,max,defaultValue,setValue}) {
    const [slidePos,setSlidePos] = useState(0);

    const returnPercentage = (inputValue) =>{
        let percent = ((inputValue/max)*100);

        if (percent < 100) {
            setSlidePos(percent);
            setValue(inputValue);
        }else{
            setValue(max);
            setSlidePos(100);
        }
    }

    useEffect(()=>{
        let percent = ((defaultValue/max)*100);

        if (percent < 100) {
            setSlidePos(percent);
            setValue(defaultValue);
        }else{
            setValue(max);
            setSlidePos(100);
        }
    },[defaultValue,setSlidePos,setValue,max])


    useEffect(()=>{
        returnPercentage(defaultValue);
    },[defaultValue,])

    const onchange = (e) =>{ 
        let inputValue = e.target.value;
        let percent = ((inputValue/max)*100);
        setSlidePos(percent);
        setValue(inputValue);
    }

    return (
        <div className='w-full relative'>
            <div style={{width:`${slidePos}%`}} className={`flex flex-row items-end absolute z-10 top-0 bottom-0 h-1 bg-[#73fdea] rounded-sm mr-[2px]`}>
                <div className='bg-[#334053] h-1 w-[4.5%] float-right absolute right-0'></div>
            </div>
            <input onChange={onchange} type="range" min={min} max={max} value={defaultValue?defaultValue:0} className="bg-[#334053] absolute top-0 bottom-0 w-full h-1 slider appearance-none rounded-sm" id="myRange"/>
        </div>
    );
}

export default RangeSlider;