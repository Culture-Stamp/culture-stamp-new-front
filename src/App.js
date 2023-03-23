import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainContainer from './pages/Main/MainContainer';
import CategoryContainer from './pages/Category/CategoryContainer';
import GlobalStyle from './styles/GlobalStyle';
import TodoContainer from './pages/Todo/TodoContainer';
import MyPageContainer from './pages/MyPage/MyPageContainer';
import ReviewContainer from './pages/Main/ReviewContainer';
import Review from './pages/Main/Review';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/review/:id" element={<ReviewContainer />} />
        <Route path="/review" element={<Review />} />
        <Route path="/todo" element={<TodoContainer />} />
        <Route path="/:category" element={<CategoryContainer />} />
        <Route path="/my-page" element={<MyPageContainer />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
