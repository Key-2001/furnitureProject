import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom';
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import {MdOutlineRemoveShoppingCart} from 'react-icons/md'

const Cart = () => {
    const {carts,toggleAmount,remove,shippingFee,total,orderTotal,clearCart} = useGlobalContext();
    console.log(shippingFee)
    if(carts.length === 0){
        return(
            <section className='wrap-empty'>
                <div className='empty-cart'>
                    <h2>your cart is empty</h2>
                    <Link to='/products' className='btn'>fill it</Link>
                </div>

            </section>
        )
    }
    return (
        <>
            <section className='title-section'>
                <div className='section-center'>
                    <h3>
                        <a href='/'>Home</a> / cart
                    </h3>
                </div>
            </section>
            <section className='cart-center section section-center page'>
                <div className='title-cart'>
                    <div className='content-title'>
                        <h5>item</h5>
                        <h5>price</h5>
                        <h5>quantity</h5>
                        <h5>subtotal</h5>
                        <span style={{width:'2rem'}}></span>
                    </div>
                    <hr/>
                </div>
                <div className='carts-content'>
                    {carts.map((cart) => {
                        const {id,img,name,color,price,stock,shipping,amountCart} = cart;
                        return(
                            <article key={id} className='cart-item'>
                                <div className='img-title'>
                                    <img src={img[0].url} alt={name}/>
                                    <div>
                                        <h5 className='name-cart'>{name}</h5>
                                        <p className='color-cart'>
                                            color: <span style={{backgroundColor:`${color}`}}/>
                                        </p>
                                        <h5 className='price-small'>${price/100}</h5>
                                    </div> 
                                </div>
                                <h5 className='price-cart'>${price/100}</h5>
                                <div className='amounts-btn'>
                                    {amountCart===1 ? 
                                    <button disabled  type='button' className='dec-btn' >
                                        <AiOutlineMinus/>
                                    </button>
                                    : 
                                    <button  type='button' className='dec-btn' onClick={() => toggleAmount(id,'dec')}>
                                        <AiOutlineMinus/>
                                    </button>
                                    }
                                    <h3>{amountCart}</h3>
                                    {amountCart===stock ?
                                    <button disabled  type='button' className='inc-btn'  >
                                        <AiOutlinePlus/>
                                    </button>
                                    :
                                    <button  type='button' className='inc-btn' onClick={() => toggleAmount(id,'inc')}>
                                        <AiOutlinePlus/>
                                    </button>
                                    }
                                </div>
                                <h5 className='subtotal'>${price*amountCart/100}</h5>
                                <button className='remove-btn' onClick={() => remove(id) }><MdOutlineRemoveShoppingCart/></button>
                            </article>
                        )
                    })}
                </div>
                <hr/>
                <div className='links-container'>
                    <Link className='link-btn' to='/products'>continue shopping</Link>
                    <button type='button' className='link-btn clear-btn' onClick={() => clearCart()}>   
                        clear shopping cart
                    </button>
                </div>
                <section className='total-price'>
                    <div>
                        <article>
                            <h5>subtotal : <span>${total}</span></h5>
                            <p>shipping fee : <span>${shippingFee}</span></p>
                            <hr/>
                            <h4>order total : <span>${orderTotal}</span></h4>
                        </article>
                        <button type='button' className='btn'>login</button>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Cart
