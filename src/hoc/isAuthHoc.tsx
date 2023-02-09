/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';

const IsAuthHoc = ({ children }: any) => {
    const location = useLocation();
    // const { idToken } = useSelector((state: any) => state.authReducer);
    const epmToken = localStorage.getItem('epm-token');
    const epmClinicCode = localStorage.getItem('epm-clinic-code');
    return !!epmToken && !!epmClinicCode ? (
        children
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default IsAuthHoc;
