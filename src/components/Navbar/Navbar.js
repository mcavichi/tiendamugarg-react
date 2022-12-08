import './Navbar.css'
import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    
    const HandleOnClick = () => {
        alert('Click en Home');
    }

    const HandleOnClick2 = () => {
        alert('Click en About');
    }

    const HandleOnClick3 = () => {
        alert('Click en Contact');
    }

    const HandleOnClick4 = () => {
        alert('Click en Login');
    }


    return (
        <nav className='navbar'>
            <div>
                <Logo />
            </div>
            <div>
                <Button colorText='blue' func={HandleOnClick}>Home</Button>
                <Button colorText='blue' func={HandleOnClick2}>About</Button>
                <Button colorText='blue' func={HandleOnClick3}>Contact</Button>
                <Button colorText='blue' func={HandleOnClick4}>Login</Button>
            <div>
                <Link to='/' className='navbar-category'> Ver todo </Link>
                <Link to='category/rickandmorty' className='navbar-category'> Rick And Morty </Link>
                <Link to='category/simpsons' className='navbar-category'> Los Simpsons </Link>
            </div>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
};

export default Navbar;