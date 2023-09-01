import './App.css';
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { products } from './asyncMock';

export const ProductosContext = createContext()

function App() {
  const [productos, setProductos] = useState([products])

  return (
    <div className="App">
      <ProductosContext.Provider value={{productos, setProductos}}>
        <BrowserRouter>
        <Navbar colorTitle='red'/>
          <Routes>
            <Route path='/' element={<ItemListContainer className='background' greeting='PRODUCTOS'/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer className='background' greeting='PRODUCTOS'/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
          </Routes>
        </BrowserRouter>
      </ProductosContext.Provider>
    </div>
  );
}

export default App;
