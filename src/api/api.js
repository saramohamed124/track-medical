import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
    'Content-Type': 'application/json'
  }
});


// register Hospital
export const registerHospital = (data) => api.post('/client-requests',data)
// Login Hospitals
export const logInHospital = (data) => api.post('/auth/client-login',data)
// register Member
export const registerMember = (data) => api.post('/singup-member',data)
// Login Member
export const logInMember = (data) => api.post('auth/client-login',data)
// OTP 
export const verifyOTP = (data) => api.post('/verify-otp',data)

export default api;