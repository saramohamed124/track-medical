import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function PermissionsTextNav() {
    const [role, setRole] = useState('');
    
    useEffect(() => {
        const userRole = Cookies.get('userRole');
        switch(userRole) {
            case 'Track Super Admin':
                setRole('تراك');
                break;
            case 'Client Admin':
                setRole('اسم المستشفى');
                break;
            default:
                setRole('');
        }
    }, []); // Empty dependency array ensures this runs only once after the initial render

    return (
        <div>
            <p className='text-black avenir-heavy px-3'>لوحة التحكم / {role}</p>
        </div>
    );
}
