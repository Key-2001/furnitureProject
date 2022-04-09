import React from 'react'
import { Link } from 'react-router-dom';
import {useGlobalContext} from '../context'
import {AiOutlineClose} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import {BsFillPersonPlusFill} from 'react-icons/bs'

const urlImg = 'https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg';

const Sidebar = () => {
    const {isShowSidebar,handleShowSidebar,amount} = useGlobalContext();

    return (
        <aside className={`${isShowSidebar ? 'sidebar is-show-sidebar' : 'sidebar'}`}>
            <div className='sidebar-header'>
                <img src={urlImg} alt='logo'/>
                <button className='close-btn' onClick={handleShowSidebar}>
                    <AiOutlineClose/>
                </button>
            </div>
            <ul className='nav-links'>
                    <li onClick={handleShowSidebar}>
                        <Link to='/'>
                            home
                        </Link>
                    </li>
                    <li onClick={handleShowSidebar}>
                        <Link to='/about'>
                            about
                        </Link>
                    </li>
                    <li onClick={handleShowSidebar}>
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
        </aside>
    )
}

export default Sidebar
