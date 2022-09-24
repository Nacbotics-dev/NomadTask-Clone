import axios from "axios";

// const BASE_URL = 'https://nacbotics2.pythonanywhere.com/api/v1/';
// const LOCAL_URL = 'https://nomatask-clone.herokuapp.com/'

const BASE_URL = 'http://localhost:8000/api/v1/';
const LOCAL_URL = 'http://localhost:3000/';


const returnAuth =()=>{
    if (localStorage.getItem('access_token')) {
        return(`Bearer ${localStorage?.access_token}`)
    } else {
        return(null)
    }
}

const axiosInstance = axios.create({
    baseURL:BASE_URL,
    timeout:50000,
    headers:{
        Authorization:returnAuth(),
        'Content-Type': 'application/json',
        accept: 'application/json',
    },

})


// axiosInstance.interceptors.request

axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },async function (error) {
    const originalRequest = error.config;
    // console.log(error.response.data,originalRequest,'~~~~~~~~~~')

    if (error.response.status === 401 && originalRequest.url === BASE_URL+'refresh-token/') {
        window.location.href = `${LOCAL_URL}login`;
    }


    if (error.response.data.code === 'token_not_valid' && error.response.status === 401 && error.response.statusText === 'Unauthorized') {
                    
        const refreshToken = localStorage.getItem('refresh_token')||localStorage.refresh_token;
        if (refreshToken) {
            const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));
            //exp date in token is expressed in seconds,while now returns milliseconds:

            const now = Math.ceil(Date.now()/1000);
            
            if (tokenParts.exp > now) {
                return axiosInstance
                .post('/refresh-token/',{refresh:refreshToken})
                .then((response) =>{
                    let AuthTokens = response.data
                    localStorage.setItem('access_token',AuthTokens['access'])
                    localStorage.setItem('refresh_token',AuthTokens['refresh'])
                    // localStorage.setItem('user_groups',response.data['user_groups'])

                    axiosInstance.defaults.headers['Authorization'] = `Bearer ${AuthTokens['access']}`;

                    originalRequest.headers['Authorization'] = `Bearer ${AuthTokens['access']}`;

                    return(axiosInstance(originalRequest));
                })
                .catch((error) =>{
                    console.log(error);
                })
                
            } else{
                console.log('Refresh Token is expired', tokenParts.exp,now);
                // originalRequest.headers['Authorization'] = null
                // localStorage.setItem('isAuthenticated',false)
                // localStorage.setItem('access_token','')
                // localStorage.setItem('refresh_token','')
                // localStorage.setItem('user_groups','')
                localStorage.clear();
                return(axiosInstance(originalRequest));
            }
        } else {
            console.log('Refresh token not available');
            window.location.href = `${LOCAL_URL}login`;
        }
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });


export default axiosInstance;