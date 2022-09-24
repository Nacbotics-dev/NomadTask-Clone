import React,{useState,useEffect} from 'react';
import GetCountryList from '../../../../Authorizations/APICalls/GetCountryList';

function TargetCountries({userData,setUserData,DefaultCountries}) {
    const [selected,setSelected] = useState([]);
    const [countryData,setCountryData] = useState([]);
    const [dataStore,setDataStore] = useState([]);
    const [totalUsers,setTotalUsers] = useState(0);
    const [totalSelectedUsers,setTotalSelectedUsers] = useState(0);

    let responseData = GetCountryList();

    const getTotalUsers =()=>{
        let total_users = selected?.map(data=>data.total_users).reduce((a, b) => a + b, 0)
        setTotalSelectedUsers(total_users)
    }

    useEffect(()=>{
        getTotalUsers();
        setUserData({...userData,allowed_countries:selected?.map(data=>data.country_code)});
    },[selected]);

    useEffect(()=>{
        if (responseData.data) {
            setSelected(responseData.data.countries);
            setDataStore(responseData.data.countries);
            setCountryData(responseData.data.countries);
            setTotalUsers(responseData.data.total_users);
        }

    },[responseData.data]);


    useEffect(()=>{
        if (DefaultCountries) {
            let country = dataStore.filter(data=>data.country_code.includes(DefaultCountries))
            setSelected(country);
        }
    },[DefaultCountries,dataStore])

    const selectAll = ()=>{
        setSelected(countryData)
    }

    const deselectAll =()=>{
        setSelected([])
    }


    const setActiveBar = ((e,country_name='All')=>{
        if (country_name.includes('All')) {
            setCountryData(dataStore)
            setSelected(dataStore)
        } else {
            let country = dataStore.filter(data=>data.country_name.includes(country_name))
            setSelected(country)
            setCountryData(country)
        }

        Array.from(document.querySelectorAll('.countryNav')).forEach(function(el) { 
            el.classList.remove('active-bottom');
        });
        e.target.classList.add('active-bottom')
        
    });

    const setChecked = ((country)=>{
        
        if (selected.some(e => e.country_name.includes(country))) {
            setSelected(selected.filter(data=>data.country_name !==country))
        } else {
            let newSelect = countryData.filter(data=>data.country_name ===country);
            setSelected([...selected,...newSelect]);
        }
    })

    return (
        <>
            <div>
                <h3 className='text-[#8b9699] text-lg'>Select your target countries</h3>
            </div>

            <div className='relative'>
                <div className='w-full relative mb-4 border-b-[#334053] border-b overflow-x-scroll custom-scrollbar'>
                    <ul className='flex flex-row w-full whitespace-nowrap pt-3 space-x-8 text-sm cursor-pointer outline-none items-center'>
                        <li onClick={setActiveBar} className={`countryNav active-bottom text-[#8b9699] text-sm py-3`}>All ({totalUsers})</li>
                        {dataStore?.map((country, key) => {  
                            return (  
                                <li key={key} onClick={(e)=>{setActiveBar(e,country?.country_name)}} className={`countryNav text-[#8b9699] text-sm py-3`}>{country?.country_name} ({country?.total_users})</li>
                            );  
                        })} 
                    </ul>
                </div>
            
            </div>

            <div className='flex flex-row space-x-2'>
                <div onClick={selectAll} className='bg-[#73fdea] px-[7px] text-black text-xs cursor-pointer flex flex-col justify-center rounded-sm outline-none border border-transparent w-fit h-[22px]'>Select all</div>
                <div onClick={deselectAll} className='bg-[#73fdea] px-[7px] text-black text-xs cursor-pointer flex flex-col justify-center rounded-sm outline-none border border-transparent w-fit h-[22px]'>Deselect all</div>
            </div>

            <div className='mt-5 max-h-[200px] overflow-y-scroll flex flex-wrap flex-row '>

                {countryData?.map((country, key) => {  
                    return (  
                        <div key={key} onClick={()=>{setChecked(country?.country_name)}}  className='border border-[#334053] mr-2 mb-[10px] text-white px-2 py-1 cursor-pointer items-center flex flex-row'>
                            <div className={`ant-checkbox-wrapper ${selected.some(e => e.country_name.includes(country?.country_name))? 'ant-checkbox-checked':''}`}>
                                <span className={`ant-checkbox ${selected.some(e => e.country_name.includes(country?.country_name))? 'ant-checkbox-checked':''}`}>
                                    <span className='ant-checkbox-inner'></span>
                                </span>
                            </div>
                            <div className='px-2'>{country?.country_name} {country?.country_flag} ({country?.total_users})</div>
                            
                        </div>  
                    );  
                })} 
                
                
            </div>

            <div className='mt-5'>
                <p className='text-[#8b9699] text-sm'>Targeting <span className='text-white'>{totalSelectedUsers}</span> users from <span className='text-white'>{selected?.length}</span> countries</p>
            </div>

            {
                totalSelectedUsers===0?
                <div className='mt-5'>
                    <p className='text-[#f5222d] text-sm'>Your target is too narrow. Your task might take longer to complete.</p>
                </div>

                :<></>
            }

            
            
        </>
    );
}

export default TargetCountries;