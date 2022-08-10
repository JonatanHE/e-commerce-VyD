import './App.scss';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';

function App() {

  return (
    //JSX
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/productos' element={<Products />}/>
        <Route path='/:category/:id' element={<Detail />}/>
        <Route path='/cart' element={<Checkout />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
