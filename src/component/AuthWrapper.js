import { Navigate, useLocation } from 'react-router-dom';
import jwtDecode from "jwt-decode"

const AuthWrapper = ({ children }) => {
    const location = useLocation();

    const isAuthenticated = () => {
        const token = localStorage.getItem('accessToken');
        const { exp: expirationTime } = jwtDecode(token);
        const expirationDate = new Date(expirationTime * 1000)
        return token !== null && expirationDate > new Date();
    };

    return isAuthenticated() ? children : <Navigate to="/login" state={{ from: location }} />;
};

export default AuthWrapper;
