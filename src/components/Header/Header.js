import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { setEmail, setName } from '../../store.js';
import CategoryContainer from '../Header/CategoryContainer';

const Header = () => {
  let dispatch = useDispatch();
  const user = useSelector((state) => { return state.user });

  console.log('user : ', user);

  //로그인
  const login = useGoogleLogin({
    onSuccess: async response => {
      try {
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            "Authorization": `Bearer ${response.access_token}`
          }
        })

        // test(res.data);
        console.log('response : ', response);


        //구분
        dispatch(setEmail(res.data.email));
        dispatch(setName(res.data.name));
      } catch (error) {
        console.log('error : ', error);
      }
    },
  });


  // const test = async (data) => {
  //   const user = {
  //     'email': data.email,
  //     'email_verified': data.email_verified,
  //     'given_name': data.given_name,
  //     'locale': data.locale,
  //     'name': data.name,
  //     'picture': data.picture,
  //     'sub': data.sub,
  //   };

  //   console.log('user : ', user);
  //   try {
  //     const res = await axios.get(`http://localhost:8080/oauth/test`, { user });
  //     console.log('res : ', res);

  //   } catch (error) {
  //     console.log('err : ', error);
  //     throw error.response.data;
  //   }
  // }

  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);
  const [category, setCategory] = useState();

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
    console.log(`${user.email}`)
    axios.get(`http://localhost:8080/category?email=${user.email}`).then((res) => {
      console.log("category", res.data);
      setCategory(res.data);
    })
  }, []);



  return (
    <Head scrollActive={scrollActive ? '7vh' : ''}>
      <Title onClick={handleMain}>C U L T U R E S T A M P</Title>
      <Menu>
        <MenuList onClick={handleCategory}>CATEGORY</MenuList>
        <MenuList to="/date">DATE</MenuList>
        <MenuList to="/todo">TODO</MenuList>
        <MenuList to="/my-page">MYPAGE</MenuList>
        <MenuList onClick={login}>LOGIN</MenuList>
        {/* <MenuList onClick={logout}>LOGOUT</MenuList> */}
      </Menu>



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
