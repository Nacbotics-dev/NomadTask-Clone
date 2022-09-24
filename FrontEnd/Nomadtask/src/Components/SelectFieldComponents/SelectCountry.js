import React,{useState,useEffect} from 'react';
import axios from 'axios'

function SelectCountry(props) {
    const [dataField,setDataField] = useState([]);
    const [isActive,setIsActive] = useState(false);
    const [countryList,setCountryList] = useState([]);
    const [selected,setSelected] = useState({country:'',flag:''});

    useEffect(()=>{
        setDataField(countryList)
    },[countryList])

    useEffect(() => {
        axios.get('https://restcountries.com/v2/all').then(
            response => {
                setCountryList(response.data);
            }
            ).catch(() =>{
            
            }
        )
        
        
    }, []);


    const OnInput = (e)=>{
        setDataField(countryList.filter(data=>data?.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())))
    }

    const OnSelect = (country) =>{
        // console.log(country,'~~~~~~~~~~~~~')
        setSelected({country:country?.name,flag:country?.flag});
        setIsActive(!isActive)
    }


    return (
        <div className='relative w-full'>
            <input hidden key={selected.country} onInput={OnInput} name={'country'} id={'countries'} placeholder={'Country'} defaultValue={selected.country} autoFocus type="text" className='h-11 px-3 w-full text-lg text-white appearance-none bg-transparent outline-none border-b border-b-[#334053] focus:border-b-[#73fdea]'/>
            <div onClick={()=>{setIsActive(!isActive)}} className='flex flex-col items-baseline place-content-center relative top-0 bottom-0 rounded-sm w-full h-11  border-b border-b-[#334053] outline-none hover:border-2 hover:border-[#3b746d]'>
                {
                    isActive?
                    <input key={selected.country} onInput={OnInput} name={'countries'} id={'countries'} placeholder={'Country'} defaultValue={selected.country} autoFocus type="text" className='h-11 px-3 w-full text-lg text-white appearance-none bg-transparent outline-none border-b border-b-[#334053] focus:border-b-[#73fdea]'/>
                    : 
                    <div className='flex flex-row items-center w-full px-3 space-x-2'>
                        {
                            selected.flag?
                            <img src={selected.flag} alt={selected.country} className='w-4 h-4'/>
                            :<></>
                        }

                        <p className='text-lg text-white'>{selected.country!== ''? selected.country :'Country'}</p>
                    </div>

                }

                {
                    !isActive?
                    <svg className='absolute top-0 right-0 h-full mr-3' viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="#8b9699" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
                    :<svg className='absolute top-0 right-0 h-full mr-3' fill="none" width="1em" height="1em" stroke="#8b9699" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                }
            </div>
            {
                isActive?
            
                <div className='max-h-[280px] overflow-scroll overflow-x-hidden z-50 w-full absolute top-11 rounded-sm  border-gray-100 bg-white'>

                    {dataField.map((country, key) => {  
                    return (  
                        <div onClick={()=>{OnSelect(country)}}  key={key} className="w-full rounded-t cursor-pointer hover:bg-gray-100">  
                            <div className="relative flex items-center w-full p-2 pl-2 border-l-2 border-transparent hover:border-teal-100">  
                                <div className="flex items-center w-full">  
                                    <div className="flex flex-row mx-2 space-x-2 leading-6 ">
                                        <img className='w-4 h-4' src={country?.flag} alt="" />
                                        <p>{country?.name}</p>
                                    </div>  
                                </div>  
                            </div>  
                        </div>  
                    );  
                    })} 


                </div>

                :<></>
            
            }
        </div>
    );
}

export default SelectCountry;