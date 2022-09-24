import React,{useState,useEffect} from 'react';
import SidebarNav from '../NavBarComponent/SidebarNav';
import ProfileDetails from './SettingsComponents/ProfileDetails';
import PasswordDetail from './SettingsComponents/PasswordDetail';
import DeleteAccount from './SettingsComponents/DeleteAccount';
import BillingHistory from './SettingsComponents/BillingHistory';
import EditProfile from './SettingsComponents/EditProfile';
import ChangePassword from './SettingsComponents/ChangePassword';
import GetApiMethod from '../../Authorizations/APICalls/GetApiMethod';

function Settings(props) {
    const view = window.location.href.split('#')[1];
    const [currentView,setCurrentView] = useState('');

    const MyProfile = GetApiMethod('my-profile/').data
    
    useEffect(()=>{
        if (view) {
            setCurrentView(view)
        }
    },[view])

    const ProfileView = (currentView) =>{

        if (currentView === 'edit') {
            return(<EditProfile setCurrentView={setCurrentView} MyProfile={MyProfile}/>)
        } else {
            return(<ProfileDetails setCurrentView={setCurrentView} MyProfile={MyProfile}/>)
        }
    }


    const PasswordView = (currentView) =>{
        if (currentView === 'edit-password') {
            return(<ChangePassword setCurrentView={setCurrentView}/>)
        } else {
            return(<PasswordDetail setCurrentView={setCurrentView}/>)
        }
    }


   
    
    return (

        <div className='mx-auto w-full px-7 py-10 md:py-[70px] md:px-[160px] lg:px-[392.5px]'>
            <div className='flex flex-col items-center w-full space-x-0 place-content-center lg:space-x-20 lg:items-start lg:flex-row'>
                <SidebarNav/>

                <div className='flex flex-col'>
                    {ProfileView(currentView)}
                    {PasswordView(currentView)}
                    <BillingHistory/>
                    <DeleteAccount/>

                </div>
            </div>
        </div>
    );
}

export default Settings;