import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AddCategory from './AddCategory';
import CategoryContainer from './CategoryContainer'
import axios from 'axios';

const CLIENT_ID = "22cd6908590c582bad57a29459c75a6e";
const REDIRECT_URI = "http://localhost:3000/oauth2/users/kakao";
// const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;


const Header = ({ title }) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);
  const [category, setCategory] = useState();

  const headerTitle = title.toUpperCase().split('').join(' ');

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

  return (
    <Head scrollActive={scrollActive ? '7vh' : ''}>
      <Title>{headerTitle}</Title>
      <Menu>
        <MenuList onClick={handleCategory}>CATEGORY</MenuList>
        <MenuList to="/date">DATE</MenuList>
        <MenuList to="/todo">TODO</MenuList>
        <MenuList to="/my-page">MYPAGE</MenuList>
        <MenuList onClick={() => {
          // axios.get("http://ec2-3-35-144-181.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google").then((res) => {
          // axios.get('http://localhost:8080/oauth2/authorization/google').then((res) => {
          // axios.get('http://localhost:3000/login/oauth2/code/kakao', { withCredentials: true }).then((res) => {
          //   console.log('res : ', res);
          // })
          console.log(`CLIENT_ID : ${CLIENT_ID}`);
          console.log(`REDIRECT_URI : ${REDIRECT_URI}`);
          axios.get(`https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`, { withCredentials: true }).then((res) => {
            console.log('res : ', res);
          })

        }}>LOGIN</MenuList>

      </Menu>
      {/* 클릭하면 kakao auth url로 이동하도록 해주세요!!  */}
      {/* <button href={KAKAO_AUTH_URL}>
        <span>카카오계정 로그인</span>
      </button> */}

      <input type="text" placeholder='리뷰 검색 창(임시)' />

      {clickCT ? <CategoryContainer category={category} /> : null}
      <ButtonSection>
        <AddButton>
          <AddCategory />
        </AddButton>
      </ButtonSection>
    </Head>
  );
};

// CSS

// head부분
const Head = styled.header`
  position: fixed;
  top: 0;
  padding-top: ${(props) => props.scrollActive || '15vh'};
  z-index: 999;
  background-color: #e5e7eb;
`;

const Title = styled.span`
  width: 100vw;
  font-size: 17px;
  font-weight: 600;
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

const AddButton = styled(Link)`
  margin-left: 80%;
  font-size: 32px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    font-size: 34px;
  }
`;

export default Header;
