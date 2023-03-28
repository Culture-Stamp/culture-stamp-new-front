import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [cookies, setCookie] = useCookies(['auth']);
    //클라이언트 ID (환경변수)
    const googleClientId = '398701196846-1n8sr22rc55etti1cedf9qvnaovpfb4q.apps.googleusercontent.com';
    const navigate = useNavigate();
  
    return (
      <>
        <div>
          <GoogleOAuthProvider clientId={googleClientId}>
            <GoogleLogin
              buttonText="google login"
              onSuccess={(credentialResponse) => {
                console.log('sucess');
                console.log('credentialResponse  : ', credentialResponse);
                setCookie('auth', credentialResponse);
                navigate('/');
              }}
              onError={() => {
                console.log('failed');
              }}
            ></GoogleLogin>
          </GoogleOAuthProvider>
        </div>
      </>
    )
}

export default Login