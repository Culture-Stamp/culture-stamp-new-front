import React from "react";
import styled from "styled-components";

function TodoDate({children, onSubmit}) {
  return (
    <Container onClick={onSubmit}>
        {children}
    </Container>
    );
}

// CSS
const Container = styled.div`
  width: 55px;
  padding: 5px;
  text-align: left;
  font-size: 16px;
  border-radius: 10px;
  color: white;
  background-color: #8f8580;
  &:hover {
    background-color: #9f8585;
  }
`;

export default TodoDate;