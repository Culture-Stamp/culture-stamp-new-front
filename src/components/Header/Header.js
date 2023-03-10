import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import CategoryContainer from '../Header/CategoryContainer';
import TodoContainer from '../../pages/Todo/TodoContainer';
import MyPageContainer from '../../pages/MyPage/MyPageContainer';

// const CLIENT_ID = "22cd6908590c582bad57a29459c75a6e";
// const REDIRECT_URI = "http://localhost:3000/oauth2/users/kakao";
// const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);
  const [category, setCategory] = useState();

  //쿠키
  const [cookies, setCookie, removeCookie] = useCookies(['auth']);

  // 페이지 이동
  const navigate = useNavigate();

  // 스크롤 움직임 확인하는 함수
  const scrollFixed = () => {
    if (scrollY > 10) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  const [clickCT, setClickCT] = useState(false);

  // 카테고리 눌렀을 때
  const handleCategory = () => {
    setClickCT(!clickCT);
  }

  // 메인 페이지로 이동
  const handleMain = () => {
    navigate("/");
  }

  // 스크롤 감지 시 scrollFixed 함수 실행
  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', scrollFixed);
    };
    scrollListener();
    return () => {
      window.removeEventListener('scroll', scrollFixed);
    };
  });

  // 카테고리 데이터 가져오기
  useEffect(() => {
    axios.get("http://localhost:8080/category").then((res) => {
      console.log("category", res.data);
      setCategory(res.data);
    })
  }, []);

  //클라이언트 ID (환경변수)
  let googleClientId = '398701196846-1n8sr22rc55etti1cedf9qvnaovpfb4q.apps.googleusercontent.com';
  //사용자 정보를 담아둘 userObj
  const [userObj, setUserObj] = useState({});
  //로그인 성공시 res처리
  const onLoginSuccess = (res) => {
    console.log('res : ', res);
  }


  return (
    <Head scrollActive={scrollActive ? '7vh' : ''}>
      <Title onClick={handleMain}>C U L T U R E S T A M P</Title>
      <Menu>
        <MenuList onClick={handleCategory}>CATEGORY</MenuList>
        <MenuList to="/date">DATE</MenuList>
        <MenuList to="/todo">TODO</MenuList>
        <MenuList to="/my-page">MYPAGE</MenuList>
        <MenuList onClick={() => {
          alert('준비 중');
        }}>LOGIN</MenuList>
      </Menu>

      <GoogleOAuthProvider clientId={googleClientId}>
        <GoogleLogin
          buttonText="google login"
          onSuccess={(credentialResponse) => {
            console.log('sucess');
            console.log('credentialResponse  : ', credentialResponse);
            setCookie('auth', credentialResponse);
          }}
          onError={() => {
            console.log("failed");
          }}
        >

        </GoogleLogin>

      </GoogleOAuthProvider>

      {clickCT ? <CategoryContainer category={category} /> : null}
      <ButtonSection>
        <AddReviewButton>+</AddReviewButton>
      </ButtonSection>
    </Head>
  );
}

// CSS
// head부분
const Head = styled.header`
  position: sticky;
  margin-top : 150px;
  // padding-top: ${(props) => props.scrollActive || '15vh'};
  z-index: 999;
  text-align: center;
`;

const Title = styled.span`
  width: 100vw;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
`;

// 메뉴 부분
const Menu = styled.nav`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin: 50px 0 30px 0;
`;

const MenuList = styled(Link)`
  margin: 0 15px;
  font-size: 11px;
  color: black;
  text-decoration: none;
  &:hover {
    font-weight: 700;
  }
`;

// 글 추가 버튼 부분
const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
`;

const AddReviewButton = styled(Link)`
  margin-left: 80%;
  font-size: 32px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    font-size: 34px;
  }
`;

export default Header;
