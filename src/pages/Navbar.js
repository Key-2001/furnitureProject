import React from 'react'
import { Link } from 'react-router-dom';
import {FaBars,FaShoppingCart} from 'react-icons/fa'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import { useGlobalContext } from '../context';

const urlImg = 'https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg';

const Navbar = () => {
    const {handleShowSidebar,amount} = useGlobalContext();

    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to='/'>
                        <img src={urlImg} alt='logo'/>
                    </Link>
                    <button type='button' className='nav-toggle' onClick={handleShowSidebar}>
                        <FaBars/>
                    </button>
                </div>
                <ul className='nav-links'>
                    <li>
                        <Link to='/'>
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            about
                        </Link>
                    </li>
                    <li>
                        <Link to='/products'>
                            products
                        </Link>
                    </li>
                </ul>
                <div className='cart-btn-wrap'>
                    <Link to='/cart' className='cart-btn'>
                        cart
                        <span className='cart-container'>
                            <FaShoppingCart/>
                            <span className='cart-values'>
                                {amount}
                            </span>
                        </span>
                    </Link>
                    <button className='login-btn' type='button'>
                        login 
                        <BsFillPersonPlusFill className='icon-login'/>
                    </button> 
                </div>
            </div>
        </nav>
    )
}

export default Navbar
