import { Navigate, useLocation } from 'react-router-dom';

const AuthWrapper = ({ children }) => {
    const location = useLocation();

    const isAuthenticated = () => {
        const token = localStorage.getItem('accessToken');
        return token !== null;
    };

    return isAuthenticated() ? children : <Navigate to="/login" state={{ from: location }} />;
};

export default AuthWrapper;
