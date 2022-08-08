import './App.scss';
import NavBar from './components/NavBar/NavBar';
//import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    //JSX
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={
          <div className="container">
            <section className='list-products'>
              <ItemListContainer section="En Oferta"/>
            </section>
          </div>
        } />
        <Route path='/contacto' element={<h1>Contacto</h1>}/>
        <Route path='/contacto' element={<h1>Productos</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
