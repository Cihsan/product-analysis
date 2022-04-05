import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import Reviews from './component/Reviews/Reviews';
import DeshBoard from './component/DeshBoard/DeshBoard';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/desh-board' element={<DeshBoard></DeshBoard>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
    </div>
  );
}

export default App;
