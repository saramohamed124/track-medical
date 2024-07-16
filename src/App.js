import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route element={<Home/>} path='/'></Route>
    </Routes>
    </div>
  );
}

export default App;
