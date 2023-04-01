import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TiDelete } from 'react-icons/ti';
import { useSelector } from 'react-redux';

function MyPageContainer() {
  const [newCategory, setNewCategory] = useState('');
  const [category, setCategory] = useState([]); // 카테고리 목록 데이터
  let categoryName = []; // 카테고리 이름 배열
  const user = useSelector((state) => { return state.user });

  category.map((res) => {
    categoryName.push(res.categoryName);
  });

  // 카테고리 등록 중
  const handleCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  // 카테고리 등록
  const handleSubmit = async () => {
    // 로그인 기능 구현 후 데이터 수정하기
    console.log(categoryName, '카테고리 이름');
    if (!categoryName.includes(newCategory)) {
      await axios
        .post('http://localhost:8080/category', {
          categoryName: newCategory,
          reviewCount: 0,
          email: `${user.email}`,
        })
        .then(() => {
          alert('새 카테고리를 등록했습니다.');
          window.location.replace('/my-page');
        });
    } else {
      alert('이미 등록된 카테고리 입니다.');
    }
  };

  // 카테고리 삭제
  const handleDelete = async (data) => {
    await axios.delete(`http://localhost:8080/category/${data.id}`).then(() => {
      alert('카테고리를 삭제하였습니다.');
      window.location.replace('/my-page');
    });
  };

  // 카테고리 데이터 가져오기
  useEffect(() => {
    axios.get('http://localhost:8080/category').then((res) => {
      setCategory(res.data);
    });
  }, []);

  return (
    <MainBackground>
      <MainSection>
        <section className="mainPart">
          <h3>Add Category</h3>
          <AddCTInput type="text" onChange={handleCategoryChange} />
          <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
        </section>
        <section className="mainPart">
          <h3>Category List</h3>
          <CategoryItems>
            {category.map((category) => (
              <CategoryList
                to={{
                  pathname: `/${category.categoryName}`,
                }}
                key={category.id}
              >
                <div>{category.categoryName}</div>
                <DeleteButton
                  onClick={() => {
                    handleDelete(category);
                  }}
                >
                  <TiDelete />
                </DeleteButton>
              </CategoryList>
            ))}
          </CategoryItems>
        </section>
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
    max-width: 80rem;
    max-height: 50rem;
    margin: 0 auto;
    padding: 0.5rem 2rem;

    h2 {
        margin-top: 0;
    }

    .mainPart {
        margin: 20px 0;
        padding: 15px;
        background-color: #f5f5f5;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }

    background-color: #fff;
    border-radius: 10px;
`;

const CategoryItems = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 70rem;
    margin: 0 auto;
`

const CategoryList = styled.li`
  display: flex;
  justify-content: space-between;
  height: 30px;
  width: 49%;
  text-align: left;
  font-size: 15px;
  background-color: #fff;
  border-radius: 10px;
  margin: 3px;
  padding: 0 10px;
`;

const DeleteButton = styled.div`
    cursor: pointer;
`;

const AddCTInput = styled.input`
    position: relative;
    cursor: text;
    font-size: 14px;
    line-height: 20px;
    padding: 0 16px;
    height: 48px;
    background-color: #fff;
    border: 1px solid #d6d6e7;
    border-radius: 3px;
    color: rgb(35, 38, 59);
    box-shadow: inset 0 1px 4px 0 rgb(119 122 175 / 30%);
    overflow: hidden;
    transition: all 100ms ease-in-out;
    :focus {
        border-color: #3c4fe0;
        box-shadow: 0 1px 0 0 rgb(35 38 59 / 5%);
    }
`;

const SubmitButton = styled.button`
    width: 60px;
    height: 48px;
    margin-left: 10px;
    border: 0;
    border-radius: 5px;
    background-color: #9f8585;
    color: white;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    font-size: 16px;
`;

export default MyPageContainer;