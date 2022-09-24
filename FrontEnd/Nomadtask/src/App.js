import Index from './Components/Index';
import Footer from './Components/FooterComponent/Footer';
import Login from './Components/OnboardingComponents/Login';
import SignUp from './Components/OnboardingComponents/SignUp';
import IndexNavbar from './Components/NavBarComponent/IndexNavbar';
import Settings from './Components/UserDashboardComponents/Settings';
import Referral from './Components/UserDashboardComponents/Referral';
import DashboardNavBar from './Components/NavBarComponent/DashboardNavBar';

import ProtectedRoutes from './Authorizations/ProtectedRoutes/ProtectedRoutes';
import MyCredit from './Components/UserDashboardComponents/MyCredit';
import TaskDetail from './Components/UserDashboardComponents/TaskDetail';
import TrustScore from './Components/UserDashboardComponents/TrustScore';
import CreateNewTask from './Components/UserDashboardComponents/CreateNewTask';
import MakerDashboard from './Components/UserDashboardComponents/MakerDashboard';
import HunterDashboard from './Components/UserDashboardComponents/HunterDashboard';


import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';

function App() {
  return (
    <div className='bg-[#212d3f] min-h-screen w-screen relative flex flex-col justify-between'>
      <Router>
        <div>
          <IndexNavbar/>
         
          <DashboardNavBar/>

          <Routes>
            <Route exact path='/' element={<Index/>} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/signup' element={<SignUp/>} />
            <Route exact path='/quests/:id' element={<TaskDetail/>} />
            {/* Login Authentication required for this routes */}
            <Route element={<ProtectedRoutes/>}>
              <Route exact path='/profile/hunter' element={<HunterDashboard/>} />
              <Route exact path='/profile/maker' element={<MakerDashboard/>} />
              <Route exact path='/profile/trust-score' element={<TrustScore/>} />
              <Route exact path='/profile/credit' element={<MyCredit/>} />
              <Route exact path='/profile/referral' element={<Referral/>} />
              <Route exact path='/profile/settings' element={<Settings/>} />
              <Route exact path='/profile/maker/new-task' element={<CreateNewTask/>}/>
              <Route exact path='/profile/maker/new-task/:id' element={<CreateNewTask/>}/>
            </Route>

            <Route path="*" element={<Navigate to={'/'}/>} />
          </Routes>   
        </div>
        <Footer/>
        </Router>
    </div>
    
  );
}
export default App;
