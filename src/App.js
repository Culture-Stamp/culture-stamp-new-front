import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainContainer from './pages/Main/MainContainer';
import CategoryContainer from './pages/Category/CategoryContainer';
import GlobalStyle from './styles/GlobalStyle';
import TodoContainer from './pages/Todo/TodoContainer';
import MyPageContainer from './pages/MyPage/MyPageContainer';
import ReviewContainer from './pages/Main/ReviewContainer';
import Review from './pages/Main/Review';
import { useCookies } from 'react-cookie';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';

function App() {
  const cookies = useCookies(['auth']);
  console.log('cookies : ', cookies);
  const token = cookies.auth;

  // console.log('token : ', token);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        {/* <Route path="/" element={<PrivateRoute component={<MainContainer />} authenticated={token} />} /> */}
        <Route path="/review/:id" element={<ReviewContainer />} />
        <Route path="/review" element={<Review />} />
        <Route path="/todo" element={<TodoContainer />} />
        <Route path="/:category" element={<CategoryContainer />} />
        <Route path="/my-page" element={<MyPageContainer />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path="/" element={<PrivateRoute component={<MainContainer />} authenticated={token} />} />
        <Route path="/review/:id" element={<PrivateRoute component={<ReviewContainer />} authenticated={token} />} />
        <Route path="/review" element={<PrivateRoute component={<Review />} authenticated={token} />} />
        <Route path="/todo" element={<PrivateRoute component={<TodoContainer />} authenticated={token} />} />
        <Route path="/:category" element={<PrivateRoute component={<CategoryContainer />} authenticated={token} />} />
        <Route path="/my-page" element={<PrivateRoute component={<MyPageContainer />} authenticated={token} />} />
        <Route path="/login" element={<Login />} /> */}



      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
