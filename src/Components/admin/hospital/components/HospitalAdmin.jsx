import React, { useContext, useEffect } from 'react';
import ErrorUnauthorized from '../../../ErrorUnauthorized';
import Loader from './Loader';
import ErrorNotFound from '../../../ErrorNotFound';
import Cookies from 'js-cookie';
import { GetHospitalAdminData } from './hospitalAdminInfo/ContextGetData';

export default function HospitalAdmin() {
    const { hospitalData, errorStatus, error, refetchHospitalData } = useContext(GetHospitalAdminData);
    const userRole = Cookies.get('userRole');
    console.log(hospitalData);
    
    useEffect(() => {
        // window.location.reload();
        refetchHospitalData();
    }, []);

    if (errorStatus === 401 && userRole !== 'Client Admin') {
        return <ErrorUnauthorized />;
    }

    if (error) {
        return <ErrorNotFound />;
    }

    if (userRole !== 'Client Admin') {
        return <ErrorNotFound />;
    }else{
        refetchHospitalData();
    }

    if (!hospitalData) {
        return <Loader />;
    }

    return (
        <div className="p-4 text-white mx-auto text-center my-3">
            <h1 className="text-2xl text-black font-bold mb-4">Hospital Details</h1>
            <div className="bg-[--main-color-green] text-end p-4 rounded shadow">
                {/* <p><strong>ID:</strong> {hospitalData.id}</p> */}
                <p><strong>Type:</strong> {hospitalData.type}</p>
                <p><strong>Arabic Name:</strong> {hospitalData.arName}</p>
                <p><strong>English Name:</strong> {hospitalData.enName}</p>
                <p><strong>Email:</strong> {hospitalData.email}</p>
                <p><strong>Phone:</strong> {hospitalData.phone}</p>
                {hospitalData.description && <p><strong>Description:</strong> {hospitalData.description}</p>}
                {hospitalData.location && <p><strong>Location:</strong> {hospitalData.location}</p>}
                {hospitalData.mapLocation && <p><strong>Map Location:</strong> {hospitalData.mapLocation}</p>}
                {hospitalData.logo && <p><strong>Logo:</strong> <img src={hospitalData.logo} alt="Logo" /></p>}
                {hospitalData.workStart && <p><strong>Work Start:</strong> {hospitalData.workStart}</p>}
                {hospitalData.workEnd && <p><strong>Work End:</strong> {hospitalData.workEnd}</p>}
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
