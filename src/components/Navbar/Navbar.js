import './Navbar.css'
import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ProductosContext } from '../../App';

const Navbar = (props) => {

    const { productos } = useContext(ProductosContext)
    
    // const HandleOnClick = () => {
    //     alert('Click en Home');
    // }

    // const HandleOnClick2 = () => {
    //     alert('Click en About');
    // }

    // const HandleOnClick3 = () => {
    //     alert('Click en Contact');
    // }

    // const HandleOnClick4 = () => {
    //     alert('Click en Login');
    // }


    return (
        <nav className='navbar'>
            <div>
                <Logo></Logo>
            </div>
            {/* <div>
                <Button colorText='blue' func={HandleOnClick}>Home</Button>
                <Button colorText='blue' func={HandleOnClick2}>About</Button>
                <Button colorText='blue' func={HandleOnClick3}>Contact</Button>
                <Button colorText='blue' func={HandleOnClick4}>Login</Button>
            </div> */}
            <div>
                <button className='button'><NavLink to='/' className='navbar-category'> INICIO </NavLink></button>
                <button className='button'><NavLink to='/category/rickandmorty' className='navbar-category'> Rick And Morty </NavLink></button>
                <button className='button'><NavLink to='/category/simpsons' className='navbar-category'> The Simpsons </NavLink></button>
                <button className='button'><NavLink to='/category/bttf' className='navbar-category'> Back To The Future </NavLink></button>
            </div>
            <div>
                <CartWidget>{productos.length}</CartWidget>
            </div>
        </nav>
    )
};

export default Navbar;