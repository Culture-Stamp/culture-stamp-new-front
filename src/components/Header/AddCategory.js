import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddCategory () {  
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
      setIsOpen(false);
    }

    const onChange = (e) => {
      const { value } = e.target;
      setCategory(value);
    }

    const handleSubmit = async() => {
      // 로그인 기능 구현 후 데이터 수정하기
      await axios.post("http://localhost:8080/category",
        {
          categoryName: category,
          reviewCount: 0,
          userId: 1
        }
      ).then(()=>{
        alert("새 카테고리를 등록했습니다.");
        navigate("/");
      });
    }

    return(
      <div>
        <div onClick={openModal}>+</div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Title>Add Category</Title>
          <Form>
            <Input placeholder="카테고리를 입력하세요" onChange={onChange} value={category} />
            <ButtonPart>
              <Submitbutton onClick={handleSubmit}>등록</Submitbutton>
              <Submitbutton onClick={closeModal}>취소</Submitbutton>
            </ButtonPart>
          </Form>
        </Modal>
      </div>
    );
}

// CSS
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Title = styled.h2`
  margin-top: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #d8e3e7;
    font-style: italic;
  }
`;

// 버튼 
const ButtonPart = styled.section`
  display: flex;
  justify-content: space-around;
  width: 80%;
`

const Submitbutton = styled.button`
  width: 50px;
  margin-top: 15px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #e5e7eb;
  }
`;

export default AddCategory;