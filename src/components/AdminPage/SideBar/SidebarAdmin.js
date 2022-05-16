import React from 'react'
import { Link } from 'react-router-dom'
import './SidebarAdmin.scss'
import {MdOutlineDashboard} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {BsBoxSeam,BsClipboardData} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const SidebarAdmin = () => {
  return (
    <div className='wrap-sidebar'>
        <div className='wrap-sidebar-header'>
            Furniture
        </div>
        <div className='wrap-sidebar-content'>
            <div className='wrap-sidebar-content-list'>
                <ul>
                    <li className='wrap-sidebar-content-list-item is-active'>
                        <Link to=''>
                            <div className='wrap-sidebar-content-list-item-icon'>
                                <MdOutlineDashboard/>
                            </div>
                            <div className='wrap-sidebar-content-list-item-inner'>
                                Dashboard
                            </div>
                        </Link>
                    </li>
                    <li className='wrap-sidebar-content-list-item'>
                        <Link to=''>
                            <div className='wrap-sidebar-content-list-item-icon'>
                                <FiUsers/>
                            </div>
                            <div className='wrap-sidebar-content-list-item-inner'>
                                Users
                            </div>
                        </Link>
                    </li>
                    <li className='wrap-sidebar-content-list-item'>
                        <Link to=''>
                            <div className='wrap-sidebar-content-list-item-icon'>
                                <BsBoxSeam/>
                            </div>
                            <div className='wrap-sidebar-content-list-item-inner'>
                                Products
                            </div>
                        </Link>
                    </li>
                    <li className='wrap-sidebar-content-list-item'>
                        <Link to=''>
                            <div className='wrap-sidebar-content-list-item-icon'>
                                <BsClipboardData/>
                            </div>
                            <div className='wrap-sidebar-content-list-item-inner'>
                                Statistics
                            </div>
                        </Link>
                    </li>
                    <li className='wrap-sidebar-content-list-item'>
                        <Link to=''>
                            <div className='wrap-sidebar-content-list-item-icon'>
                                <AiOutlineShoppingCart/>
                            </div>
                            <div className='wrap-sidebar-content-list-item-inner'>
                                Order
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SidebarAdmin