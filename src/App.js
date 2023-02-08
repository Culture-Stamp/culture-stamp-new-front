import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainContainer from './pages/Main/MainContainer';
import CategoryContainer from './pages/Category/CategoryContainer';
import GlobalStyle from './styles/GlobalStyle';
import TodoContainer from './pages/Todo/TodoContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContainer/>} />
        <Route path="/todo" element={<TodoContainer />} />
        <Route path="/:category" element={<CategoryContainer />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
