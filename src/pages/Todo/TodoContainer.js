import styled from 'styled-components';
import Header from '../../components/Header/Header';
import TodoTemplate from './TodoComponent/TodoTemplate';

function TodoContainer() {
    return (
      <MainBackground>
        <Header title="todo" />
        <MainSection>
          <Container>
            <Thumbnail>
              <ThumbnailItem>
                <TodoTemplate />
              </ThumbnailItem>
            </Thumbnail>
          </Container>
        </MainSection>
      </MainBackground>
    );
}


// 전체 CSS 적용
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
  //top: 50px;
  max-width: 93.5rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Container = styled.div`
  max-width: 93.5rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Thumbnail = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem -1rem;
  padding-bottom: 3rem;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    width: auto;
    margin: 0;
  }
`;

const ThumbnailItem = styled.div`
  position: relative;
  flex: 1 0 22rem;
  height: 60vh;
  margin: 1rem;
  padding: 15px;
  color: #000;
  background: white;
  border-radius: 10px;
  cursor: pointer;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
}
    &::-webkit-scrollbar-thumb {
    background-color: #c7c7c7;
    border-radius: 10px;
    box-shadow: inset 0px 0px 1px white;
}
`;

export default TodoContainer;