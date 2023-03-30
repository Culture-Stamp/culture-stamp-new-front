import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ authenticated, component: Component, props }) => {
    console.log('authenticated :', authenticated);

    return (
        authenticated.name !== '' ? <Component {...props} /> : <Navigate to="/" {...alert('로그인이 필요한 서비스 입니다.')} />
    )
}

export default PrivateRoute;