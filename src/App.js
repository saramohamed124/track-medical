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
import HospitalsCities from './Pages/HospitalsCities';
import Hospital from './Pages/Hospital';
import AboutUsHospital from './Components/hospital/components/AboutUsHospital';
import MajorsHospital from './Components/hospital/components/MajorsHospital';
import InsuranceCompanies from './Components/hospital/components/InsuranceCompanies';
import ClinicsHome from './Pages/ClinicsHome';

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
        <Route path='/clinics-home' element={<ClinicsHome/>}/>
        <Route path='/hospitals-cities' element={<HospitalsCities/>}/>
        <Route path='/hospital-profile' element={<Hospital/>}>
        <Route path="/hospital-profile" element={<AboutUsHospital />} />
        <Route path="about-us" element={<AboutUsHospital />} />
        <Route path="majors" element={<MajorsHospital />} />
        <Route path="insurance-companies" element={<InsuranceCompanies />} />
        </Route>
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
