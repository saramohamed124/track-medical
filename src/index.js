import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AuthHospitalProviderSignUp from './context/auth/hospitals/AuthHospitalProviderSignUp';
import ContextGetData from './Components/admin/hospital/components/hospitalAdminInfo/ContextGetData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextGetData>
    <AuthHospitalProviderSignUp>
        <App />
      </AuthHospitalProviderSignUp>
    </ContextGetData>
  
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
