import axiosInstance from "./AxiosBase";

function PostApiMethod(URL,setResponseData,formData) {
    setResponseData({loading:true,data:null,error:false});
    axiosInstance.post(URL,formData).then(
        (response)=>{
            setResponseData({loading:false,data:response.data,error:false});
        }
    ).catch(
        (error)=>{
            setResponseData({loading:false,data:error.response.data,error:true});
        }
    )
}

export default PostApiMethod;