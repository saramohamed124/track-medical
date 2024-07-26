import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});


// register Hospital
export const registerHospital = (data) => api.post('/signup-hospitals',data)
// Login Hospitals
export const logInHospital = (data) => api.post('/login-hospitals',data)
// register Member
export const registerMember = (data) => api.post('/singup-member',data)
// Login Member
export const logInMember = (data) => api.post('/login-member',data)
// OTP 
export const verifyOTP = (data) => api.post('/verify-otp',data)

export default api;