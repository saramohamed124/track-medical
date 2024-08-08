import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import ErrorUnauthorized from '../../../ErrorUnauthorized';

export default function HospitalAdmin() {
    const [hospitalData, setHospitalData] = useState(null);
    const [error, setError] = useState(null);
    const [errorStatus, setErrorStatus] = useState(null);

    useEffect(() => {
        const fetchHospitalData = async () => {
            try {
                const id = Cookies.get('HospitalId');
                console.log(id);

                if (!id) {
                    setError('No hospital ID found in cookies');
                    return;
                }

                const response = await axios.get(`${process.env.REACT_APP_API_URL}/clients/${id}`);
                setHospitalData(response.data);
            } catch (err) {
                if (err.response && err.response.status === 401) {
                    setErrorStatus(401);
                } else {
                    setError('Failed to fetch data');
                }
                console.error('Error fetching hospital data:', err);
            }
        };

        fetchHospitalData();
    }, []); // Empty dependency array ensures this runs once on mount

    if (errorStatus === 401) {
        return <ErrorUnauthorized />;
    }

    if (error) {
        return <div className="text-red-600">{error}</div>;
    }

    if (!hospitalData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Hospital Details</h1>
            <div className="bg-white p-4 rounded shadow">
                <p><strong>ID:</strong> {hospitalData.id}</p>
                <p><strong>Type:</strong> {hospitalData.type}</p>
                <p><strong>Arabic Name:</strong> {hospitalData.arName}</p>
                <p><strong>English Name:</strong> {hospitalData.enName}</p>
                <p><strong>Email:</strong> {hospitalData.email}</p>
                <p><strong>Phone:</strong> {hospitalData.phone}</p>
                {/* Add more fields as needed */}
                {/* Check if optional fields exist before rendering */}
                {hospitalData.description && <p><strong>Description:</strong> {hospitalData.description}</p>}
                {hospitalData.location && <p><strong>Location:</strong> {hospitalData.location}</p>}
                {hospitalData.mapLocation && <p><strong>Map Location:</strong> {hospitalData.mapLocation}</p>}
                {hospitalData.logo && <p><strong>Logo:</strong> <img src={hospitalData.logo} alt="Logo" /></p>}
                {hospitalData.workStart && <p><strong>Work Start:</strong> {hospitalData.workStart}</p>}
                {hospitalData.workEnd && <p><strong>Work End:</strong> {hospitalData.workEnd}</p>}
                {/* Render lists */}
                {hospitalData.covers && hospitalData.covers.length > 0 && (
                    <div>
                        <strong>Covers:</strong>
                        <ul>
                            {hospitalData.covers.map((cover, index) => (
                                <li key={index}>{cover}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {hospitalData.specialties && hospitalData.specialties.length > 0 && (
                    <div>
                        <strong>Specialties:</strong>
                        <ul>
                            {hospitalData.specialties.map((specialty, index) => (
                                <li key={index}>{specialty}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {hospitalData.city && <p><strong>City:</strong> {hospitalData.city}</p>}
                {hospitalData.socialLinks && (
                    <div>
                        <strong>Social Links:</strong>
                        <ul>
                            {Object.entries(hospitalData.socialLinks).map(([key, link], index) => (
                                <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{key}</a></li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
