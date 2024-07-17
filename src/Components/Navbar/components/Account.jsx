import React from 'react';
import account_icon from '../assets/icons/user.svg'
import SignList from './SignList';
const Account = () => {
    return (
        <div className='px-4'>
            <details className="dropdown">
            <summary className="btn m-1">
            <img src={account_icon} alt='account-icon'/>
            </summary>
                <ul className="absolute top-[122%] left-[-24px] bg-base-100 p-4 shadow">
                    <SignList/>
                </ul>
            </details>
        </div>
    );
};
export default Account;