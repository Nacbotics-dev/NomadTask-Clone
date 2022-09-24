import axiosInstance from './AxiosBase';


function PutApiMethod(URL,setResponseData,formData,Header={headers:{'Content-Type': 'application/json',}}) {

    setResponseData({loading:true,data:null,error:false});
    axiosInstance.put(URL,formData,Header).then(
        (response)=>{
            setResponseData({loading:false,data:response.data,error:false});
        }
    ).catch(
        (error)=>{
            setResponseData({loading:false,data:error.response.data,error:true});
        }
    )
}

export default PutApiMethod;