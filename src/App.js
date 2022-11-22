// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Navbar colorTitle='red'/>
        <ItemListContainer className='background' greeting='Bienvenidos!'/>
    </div>
  );
}

export default App;
