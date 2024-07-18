import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from './Pages/Home';
import Footer from './Components/Home/components/footer/Footer';
import CopyRight from './Components/Home/components/CopyRight';
import { SigninHospitals } from './Pages/SigninHospitals';
import SigninMember from './Pages/SigninMember';
import { SignFormOtp } from './Pages/SignFormOtp';
import { MapsSearch } from './Pages/MapsSearch';
import Search from './Components/Home/components/search/Search';
import SignupHospitals from './Pages/SingupHospitals';
import SignupMembers from './Pages/SignupMembers';
import Hospitals from './Pages/Hospitals';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/search' element={<Search/>}/>
        <Route path='/maps' element={<MapsSearch/>}/>
        <Route path='/hospitals' element={<Hospitals/>}/>
        <Route path="/signin-hospitals" element={<SigninHospitals />} />
        <Route path="/signin-members" element={<SigninMember />} />
        <Route path="/signup-hospitals" element={<SignupHospitals />} />
        <Route path="/signup-members" element={<SignupMembers />} />
        <Route path='/otp-code' element={<SignFormOtp/>}/>
      </Routes>
      {location.pathname !== '/signin-hospitals'
        && location.pathname !== '/signin-members' 
        && location.pathname !== '/signup-members' 
        && location.pathname !== '/signup-hospitals' 
        && location.pathname !== '/otp-code' &&
         (
        <>
          <Footer />
          <CopyRight />
        </>
      )}
    </div>
  );
}

export default App;
