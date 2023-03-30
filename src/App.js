import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainContainer from './pages/Main/MainContainer';
import CategoryContainer from './pages/Category/CategoryContainer';
import GlobalStyle from './styles/GlobalStyle';
import TodoContainer from './pages/Todo/TodoContainer';
import MyPageContainer from './pages/MyPage/MyPageContainer';
import ReviewContainer from './pages/Main/ReviewContainer';
import Review from './pages/Main/Review';
import PrivateRoute from './components/PrivateRoute';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => { return state.user });

  return (
    <>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/review/:id" element={<ReviewContainer />} />
        <Route path="/review" element={<Review />} />
        <Route path="/todo" element={<TodoContainer />} />
        <Route path="/:category" element={<CategoryContainer />} />
        <Route path="/my-page" element={<MyPageContainer />} />

        {/* <Route path="/" />
        <Route path="/review/:id" element={<PrivateRoute component={<ReviewContainer />} authenticated={user} />} />
        <Route path="/review" element={<PrivateRoute component={<Review />} authenticated={user} />} />
        <Route path="/todo" element={<PrivateRoute component={<TodoContainer />} authenticated={user} />} />
        <Route path="/:category" element={<PrivateRoute component={<CategoryContainer />} authenticated={user} />} />
        <Route path="/my-page" element={<PrivateRoute component={<MyPageContainer />} authenticated={user} />} /> */}
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
