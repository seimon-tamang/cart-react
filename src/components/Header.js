import {Outlet, Link} from "react-router-dom";
import './styles.css'
import {Cart } from '../Context';
import  {useContext} from 'react';

function Header(){

    const {cart, setCart} = useContext(Cart);

    return (<div className="flex-container">
        <span>React Context API</span>
        <ul className='nav'>
            <li className="prod">
                <Link to="/">Home</Link>
            </li>
            <li className="prod1">
                <Link to="/cart">Cart {cart.length}</Link>
            </li>
        </ul>
        <Outlet/>
    </div>)
}

export default Header;