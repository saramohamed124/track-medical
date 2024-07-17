import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Home from './Pages/Home';
import Footer from './Components/Home/components/footer/Footer';
import CopyRight from './Components/Home/components/CopyRight';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route element={<Home/>} path='/'></Route>
    </Routes>
    <Footer/>
    <CopyRight/>
    </div>
  );
}

export default App;
