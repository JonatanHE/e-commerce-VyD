import './App.scss';
import Modal from './components/Modal/Modal';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  const styleApp = {padding: '10px 20px', marginTop: '10%'}

  return (
    //JSX
    <div className="container" style={styleApp}>
      <NavBar/>
      <div className='list-products'>
      <ItemListContainer section="En Oferta"/>
      <ItemListContainer section="Temporada"/>
      <ItemListContainer section="50% OFF"/>
      </div>
      <Modal />
    </div>
  );
}

export default App;
