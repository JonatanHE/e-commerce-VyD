import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  const styleApp = {padding: '0px'}

  return (
    //JSX
    <div className="container" style={styleApp}>
      <NavBar/>
      <ItemDetailContainer/>
{/*       <div className='list-products'>
          <ItemListContainer section="En Oferta"/>
      </div> */}
    </div>
  );
}

export default App;
