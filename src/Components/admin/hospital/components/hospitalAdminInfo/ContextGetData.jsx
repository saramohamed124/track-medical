// ContextGetData.js

import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export const GetHospitalAdminData = createContext();

const ContextGetData = ({ children }) => {
    const [hospitalData, setHospitalData] = useState(null);
    const [error, setError] = useState(null);
    const [errorStatus, setErrorStatus] = useState(null);
    const [loading, setLoading] = useState(true);

    const token = Cookies.get('adminToken');

    const fetchHospitalData = async () => {
        try {
            const id = Cookies.get('HospitalId');
            if (!id) {
                setError('No hospital ID found in cookies');
                setErrorStatus(404);
                return;
            }
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/clients/${id}`, {
                headers: {
                    'Accept': '*/*',
                    'Authorization': `Bearer ${token}`
                }
            });
            setHospitalData(response.data.data);
        } catch (err) {
            if (err.response) {
                if (err.response.status === 401) {
                    setErrorStatus(401);
                } else {
                    setError(`Error: ${err.response.status} - ${err.response.data.message || 'Failed to fetch data'}`);
                }
            } else {
                setError('Failed to fetch data');
            }
            setErrorStatus(err.response ? err.response.status : 500);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHospitalData();
    }, [token]); // Re-fetch if token changes

    return (
        <GetHospitalAdminData.Provider
            value={{ 
                hospitalData,
                error,
                errorStatus,
               
                refetchHospitalData: fetchHospitalData // Provide a method to refresh data
            }}
        >
            {children}
        </GetHospitalAdminData.Provider>
    );
};

export default ContextGetData;
