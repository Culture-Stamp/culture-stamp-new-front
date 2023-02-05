import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DeleteCategoryModal({text, category}) {
    
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    //const navigate = useNavigate();

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
      setIsOpen(false);
      //navigate("/");
      window.location.replace("/")
    }

    const handleDelete = async(data) => {
      console.log("data",data)
      await axios.delete(`http://localhost:8080/category/${data.id}`
      ).then(()=>{
        alert("카테고리를 삭제하였습니다.");
        closeModal();
      });
    }
    
    return(
        <Container>
            <div onClick={openModal}>{text}</div>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                <Title>Delete Category</Title>
                <Form>
                    <FormContents>
                        {category.map((category) => (
                            <CategoryList to={{
                            pathname: `/${category.categoryName}`}}
                            key={category.id}>
                                <div>{category.categoryName}</div>
                                <DeleteButton onClick={()=>{handleDelete(category)}}>X</DeleteButton>
                                {console.log(category)}
                            </CategoryList>
                        ))}
                    </FormContents>
                    <ButtonPart>
                        <CloseButton onClick={closeModal}>닫기</CloseButton>
                    </ButtonPart>
                </Form>
            </Modal>
        </Container>
    )
}



// CSS
const Container = styled.div`
    text-decoration: none;
    color: #000;
    cursor: pointer;
`

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:'25%'
    },
    overlay: {zIndex: 1000}
  };
  
  const Title = styled.h2`
    margin-top: 0;
  `;
  
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
  `;
  
  const FormContents = styled.div`
    height: 150px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
       background-color: #c7c7c7;
       border-radius: 10px;
       box-shadow: inset 0px 0px 1px white;
    }
  `
  


  const CategoryList = styled.li`
    display: flex;
    justify-content: space-between;
    height: 30px;
    width: 95%;
    text-align: left;
    font-size: 15px;
  `
  
  // 버튼 
  const ButtonPart = styled.section`
    display: flex;
    justify-content: center;
  `

  const DeleteButton = styled.div`
    cursor: pointer;
  `
  
  const CloseButton = styled.button`
    width: 50px;
    margin-top: 15px;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #e5e7eb;
    }
  `;
  


export default DeleteCategoryModal;