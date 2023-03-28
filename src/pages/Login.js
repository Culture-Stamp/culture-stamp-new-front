import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const Login = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['auth']);
  //클라이언트 ID (환경변수)
  const googleClientId = '398701196846-1n8sr22rc55etti1cedf9qvnaovpfb4q.apps.googleusercontent.com';
  const navigate = useNavigate();

  useEffect(() => {
    // // 사용자 정보
    axios.get(`http://localhost:8080/oauth/user/info`, { withCredentials: true }).then((res) => {
      console.log('res : ', res.data);
    })
  }, [])

  return (
    <>
      <div>
        <GoogleOAuthProvider clientId={googleClientId}>
          <GoogleLogin
            buttonText="google login"
            onSuccess={(credentialResponse) => {
              console.log('sucess');
              console.log('credentialResponse  : ', credentialResponse);
              setCookie('auth', credentialResponse.credential);
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