import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouts = ({ children }) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <div className='text-center mt-24'>
            <span className="loading loading-spinner loading-lg"></span>;
        </div>
    }

    if(user){
        return children;
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRouts;