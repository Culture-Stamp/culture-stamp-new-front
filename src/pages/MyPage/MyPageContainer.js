import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from "../../components/Header/Header";

function MyPageContainer() {
    const [newCategory, setNewCategory] = useState("");
  const [category, setCategory] = useState([]);

  // 카테고리 등록 중
  const handleCategoryChange = (e) => {
    setNewCategory(e.target.value);
    }

  // 카테고리 등록
    const handleSubmit = async() => {
    // 로그인 기능 구현 후 데이터 수정하기
        await axios.post("http://localhost:8080/category",
          {
        categoryName: newCategory,
        reviewCount: 0,
            userId: 1
          }
        ).then(()=>{
          alert("새 카테고리를 등록했습니다.");
          window.location.replace("/my-page");
      });
    }

  // 카테고리 삭제
    const handleDelete = async(data) => {
        await axios.delete(`http://localhost:8080/category/${data.id}`
        ).then(()=>{
            alert("카테고리를 삭제하였습니다.");
            window.location.replace("/my-page");
    });
  };

  // 카테고리 데이터 가져오기
  useEffect(() => {
      axios.get("http://localhost:8080/category").then((res) => {
        console.log("category", res.data);
      setCategory(res.data);
      })
  }, []);

    return(
    <MainBackground>
        <Header/>
        <MainSection>
            <section className='mainPart'>
                <h2>카테고리 등록</h2>
                <CategoryInput type="text" onChange={handleCategoryChange} />
                <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
            </section>
                <section className='mainPart'>
          <h2>카테고리 목록</h2>
          {category.map((category) => (
                        <CategoryList to={{
                            pathname: `/${category.categoryName}`}}
                            key={category.id}>
              <div>{category.categoryName}</div>
                            <DeleteButton onClick={()=>{handleDelete(category)}}>X</DeleteButton>
              {console.log(category)}
            </CategoryList>
          ))}
        </section>
        {/* <AddCategoryModal text="카테고리 등록" />
                <DeleteCategoryModal text="카테고리 삭제" category={category}/>            */}
      </MainSection>
    </MainBackground>
  );
}

// css

const MainBackground = styled.div`
  width: 100vw;
  height: 100%;
  margin-left: calc(-50vw + 50%);
  background: #e5e7eb;
`;

// 메인 부분
const MainSection = styled.section`
  position: relative;
  top: 310px;
  max-width: 93.5rem;
  margin: 0 auto;
  padding: 0 2rem;

  h2 {
    margin-top: 0;
  }

  .mainPart {
    margin: 20px 0;
    padding: 10px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;

const CategoryInput = styled.input`
  width: 50%;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 3px solid #ccc;
  transition: 0.5s;

  &:focus {
    border: 3px solid #ccb;
  }
`;

const SubmitButton = styled.button`
    background-color: rgba(51, 51, 51, 0.05);
    border-radius: 8px;
    border-width: 0;
    color: #333333;
    cursor: pointer;
    display: inline-block;
    font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    list-style: none;
    margin: 0 10px;
    padding: 15px 12px;
    text-align: center;
    transition: all 200ms;
    vertical-align: baseline;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
`;

const CategoryList = styled.li`
  display: flex;
  justify-content: space-between;
  height: 30px;
  width: 100%;
  padding: 5px 15px;
  text-align: left;
  font-size: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const DeleteButton = styled.div`
  cursor: pointer;
`;

export default MyPageContainer;