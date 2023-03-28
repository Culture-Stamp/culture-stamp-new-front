import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ authenticated, component:Component, props}) => {
    console.log('authenticated :', authenticated);
    
    return(
        authenticated ? <Component {...props} /> : <Navigate to="/login" />
    )
}

export default PrivateRoute;