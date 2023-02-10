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
    }

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
                <section>
                    <h2>카테고리 등록</h2>
                    <input type="text" onChange={handleCategoryChange}/>
                    <button onClick={handleSubmit}>등록</button>
                </section>
                <section>
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
    )
}

// css

const MainBackground = styled.div`
    width: 100vw;
    height: 100%;
    margin-left: calc(-50vw + 50%);
    text-align: center;
    background: #e5e7eb;
`;

// 메인 부분
const MainSection = styled.section`
    position: relative;
    top: 310px;
    max-width: 93.5rem;
    margin: 0 auto;
    padding: 0 2rem;
`;

const CategoryList = styled.li`
    display: flex;
    justify-content: space-between;
    height: 30px;
    width: 95%;
    text-align: left;
    font-size: 15px;
`;

const DeleteButton = styled.div`
    cursor: pointer;
`;




export default MyPageContainer;