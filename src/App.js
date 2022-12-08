import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar colorTitle='red'/>
          <Routes>
            <Route path='/' element={<ItemListContainer className='background' greeting='PRODUCTOS'/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer className='background' greeting='PRODUCTOS'/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
