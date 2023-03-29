import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['auth']);
  //클라이언트 ID (환경변수)
  const googleClientId = '398701196846-1n8sr22rc55etti1cedf9qvnaovpfb4q.apps.googleusercontent.com';
  const navigate = useNavigate();

  // useEffect(() => {
    // // 사용자 정보
    // axios.get(`http://localhost:8080/oauth/user/info`, { withCredentials: true }).then((res) => {
      // console.log('@#%@$^@$%^ : ', res.data);
    // })
  // }, [])


  return (

      <div>

        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse.credential);
            var decoded = jwt_decode(credentialResponse.credential);
            console.log('decode : ', decoded);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />;
      </div>
    )
}

export default Login