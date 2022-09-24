import {useEffect,useState} from 'react';
import axiosInstance from './AxiosBase';

export default function GetApiMethod(URL) {
    const [responseData,setResponseData] = useState({loading:false,data:null,error:false})
    
    useEffect(() => {
        setResponseData({loading:true,data:null,error:false});
        axiosInstance.get(URL).then(
            (response)=>{
                setResponseData({loading:false,data:response.data,error:false});

            }
        ).catch(
            (error)=>{
                setResponseData({loading:false,data:error.response.data,error:true});
            }
        )
    }, [setResponseData,URL]);
    
    return (responseData);
}


export function GetStateLessApiMethod(URL,setResponseData) {
    setResponseData({loading:true,data:null,error:false});
    axiosInstance.get(URL).then(
        (response)=>{
            setResponseData({loading:false,data:response.data,error:false});

        }
    ).catch(
        (error)=>{
            setResponseData({loading:false,data:error.response.data,error:true});
        }
    )
}