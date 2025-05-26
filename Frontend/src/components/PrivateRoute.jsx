import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
const PrivateRoute = ({ children,requiredRole }) => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');

    if(!token){
       return <Navigate to="/"/>;
    }

    try {
        const userData = jwtDecode(token);
        if( requiredRole && userData.role !== requiredRole) {
            return <Navigate to="/unauthorized"/>;
        }

        return children;

    } catch (error) {
        return <Navigate to="/"/>;
    }
};

export default PrivateRoute;