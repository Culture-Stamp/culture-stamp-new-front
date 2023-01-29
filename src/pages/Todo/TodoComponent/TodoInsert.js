import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

function TodoInsert({getTodoData}){
    
    const [content, setContent] = useState("");
    const ref = useRef();

    // 이벤트가 발생할 때마다(글자가 하나씩 입력될 때 마다) 변화를 감지
    const handleChange = (e) => {
      setContent(e.target.value);
    };

    const handleSubmit = (content) => (event) => {
      event.preventDefault(); // onSubmit 이벤트는 브라우저를 새로고치기 때문에 막아주기
  
      // 만약 input 창이 빈채로 submit을 하려고 할 땐 return시키기
      if (!content) {
        return alert("todo를 입력해주세요!");
      }
      // 로그인 기능 구현 후 데이터 수정하기
      axios.post('http://localhost:8080/todo', {
          userId: 1,
          content: content,
          doneFlag: 0,
        })
        .then(() => {
          setContent(''); // submit을 한 후에는 input 창을 비우기
          getTodoData();
        });
    };;

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          handleSubmit();
        }
    };

    useEffect(() => {
        ref.current.focus();
      }, []);

    return(
        <Container>
            <form onSubmit={handleSubmit}>
                <TextInput
                    type="text"
                    name="text"
                    ref={ref}
                    placeholder="할 일을 입력하세요"
                    value={content}
                    onChange={handleChange}
                    autoFocus
                />
                <AddButton type="submit" onClick={handleSubmit(content)} onKeyPress={handleKeyPress}>
                    ADD
                </AddButton>
            </form>
        </Container>
    )
}

// CSS

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin: 10px 0 20px 0;
`;

const TextInput = styled.input`
  width: 30vw;
  padding: 10px;
  margin: 0 5px;
  border: 0;
  border-bottom: 1px solid #ccc;
  font-size: 12px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #d8e3e7;
    font-style: italic;
  }
`;

const AddButton = styled.button`
  width: 60px;
  height: 32px;
  border: 0;
  border-radius: 5px;
  background-color: #9f8585;
  color: white;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export default TodoInsert;