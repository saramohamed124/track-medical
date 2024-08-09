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
import ProtectRoutes from './routes/admin/ProtectRoutes';
import DashboardAll from './Components/admin/dashboard/DashboardAll';
import ClinicsHospital from './Pages/ClinicsHospital';
import DashboardHome from './Components/admin/dashboard/components/Dashhome/DashboardHome';
import ErrorNotFound from './Components/ErrorNotFound';
import ErrorUnauthorized from './Components/ErrorUnauthorized';
import AddHospital from './Components/admin/hospital/components/AddHospital';
import HospitalAdmin from './Components/admin/hospital/components/HospitalAdmin';
// import Cookies from 'js-cookie';
import AdminLogin from './Components/Sign/AdminLogin';
import DealsPage from './Pages/DealsPage';
import DealsInfoPage from './Pages/DealsInfoPage';

function App() {
  const location = useLocation();
  // const userRole = Cookies.get('userRole');
  // const token = Cookies.get('authToken');
 
 
  return (
    <div className="App">
      {!location.pathname.includes('/admin') && (
        <>
        <Navbar/>
      </>
      )}

      <ProtectRoutes/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/search' element={<Search/>}/>
        <Route path='/maps' element={<MapsSearch/>}/>
        <Route path='/hospitals' element={<Hospitals/>}/>
        <Route path='/clinics-home' element={<ClinicsHome/>}/>
        <Route path='/clinics-hospitals' element={<ClinicsHospital/>}/>
        <Route path='/hospitals-cities' element={<HospitalsCities/>}/>
        <Route path='/deals-offers' element={<DealsPage/>}/>
        <Route path='/deals-info' element={<DealsInfoPage/>}/>
    
    <Route path="/admin/dashboard" element={<DashboardAll />}>
        <Route path='/admin/dashboard/add-hospital' element={<AddHospital/>}/>
          <Route index element={<DashboardHome />} />
          <Route path='/admin/dashboard/hospital-info-admin' element={<HospitalAdmin/>}/>
          {/* Define additional nested routes here if needed */}
        </Route>
        <Route path="/error-not-found" element={<ErrorNotFound />} />
        <Route path="/error-unauthorized" element={<ErrorUnauthorized />} />
        <Route path="*" element={<ErrorNotFound />} /> {/* Handle 404 */}
        <Route path='/hospital-profile' element={<Hospital/>}>
        <Route path="/hospital-profile" element={<AboutUsHospital />} />
        <Route path="about-us" element={<AboutUsHospital />} />
        <Route path="majors" element={<MajorsHospital />} />
        <Route path="insurance-companies" element={<InsuranceCompanies />} />
        </Route>
        <Route path="/signin-hospitals" element={<SigninHospitals />} />
        <Route path="/signin-members" element={<SigninMember />} />
        <Route path="/signup-hospitals" element={<SignupHospitals />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/signup-members" element={<SignupMembers />} />
        <Route path='/otp-code' element={<SignFormOtp/>}/>
      </Routes>
      {location.pathname !== '/signin-hospitals'
        && location.pathname !== '/signin-members' 
        && location.pathname !== '/signup-members' 
        && location.pathname !== '/signup-hospitals' 
        && location.pathname !== '/otp-code' 
        && !location.pathname.includes('/admin') &&
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
