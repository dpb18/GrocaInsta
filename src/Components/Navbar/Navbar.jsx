import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo1.png'
import cart_icon from '../Assets/cart icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_icon from '../Assets/dropdown.png'

export const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    return (
        <div classname='navbar'>
            <div className='navbar'>
                <div className='nav-logo'>
                    <img src={logo} alt='' />
                    <p>GrocaInsta</p>
                </div>
                <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown_icon} alt=''/>
                <ul ref={menuRef} className="nav-menu">
                  <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link> {menu==="shop"?<hr/>:<></>}</li> 
                  <li onClick={()=>{setMenu("groceries")}}><Link to='/groceries' style={{textDecoration:'none'}}>Groceries</Link>{menu==="groceries"?<hr/>:<></>}</li> 
                  <li onClick={()=>{setMenu("vegetables")}}><Link to='/vegetables' style={{textDecoration:'none'}}>Vegetables</Link>{menu==="vegetables"?<hr/>:<></>}</li> 
                  <li onClick={()=>{setMenu("fruits")}}><Link to='/fruits' style={{textDecoration:'none'}}>Fruits</Link>{menu==="fruits"?<hr/>:<></>}</li> 
                </ul>
                <div className="nav-login-cart">
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/cart'><img src={cart_icon} alt=''/></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
            </div>
        </div>
    )
}
