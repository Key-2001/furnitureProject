import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import { useGlobalContext } from '../context';
import Loading from '../pages/Loading';
import {BsCheck,BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'


const API_SINGLE_PRODUCT = 'https://course-api.com/react-store-single-product?';

const SingleProduct = () => {
    const {products,isLoading,handleAddCartItem} = useGlobalContext();
    const {id} = useParams();
    const [singleProduct,setSingleProduct] = useState([])
    const [imgMain,setImgMain] = useState('')
    const [colorSelected,setColorSelected] = useState('');
    const [amountSingleProduct,setAmountSingleProduct] = useState(1);
    const [starList,setStarList] = useState([0,1,2,3,4]);
    const [cartItem,setCartItem] = useState({});

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data)
            setSingleProduct(data)
            setImgMain(data.images[0].url)
            setColorSelected(data.colors[0]);
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        const url = `${API_SINGLE_PRODUCT}id=${id}`;
        fetchData(url);
        // console.log(singleProduct);
        // console.log(imgMain)
    },[])

    useEffect(() => {
    const {id,name,price,images,description,company,colors,stock,stars,reviews,category,shipping} = singleProduct;
        setCartItem(() => {
            return{
                img:images,
                id,
                name,
                category,
                shipping,
                price,
                color:colorSelected,
                stock,
                company,
                amountCart:amountSingleProduct,
            }
        })
        // console.log(cartItem)
    },[colorSelected,amountSingleProduct])

    if(singleProduct.length === 0){
        return <Loading/>
    }
    
    const {name,price,images,description,company,colors,stock,stars,reviews,category,shipping} = singleProduct;
    
    return (
        <>
            <section className='title-section'>
                <div className='section-center'>
                    <h3>
                        <a href='/'>Home</a><a href='/products'>/ Products</a> / {name}
                    </h3>
                </div>
            </section>
            <div className='section section-center page'>
                <Link to='/products' className='btn'>back to products</Link>
                <div className='product-center'>
                    <section className='img-section'>
                        <img src={imgMain} alt='main_img' className='main'/>
                        <div className='gallery'>
                            {images.map((img) => {
                                const {id,url} = img;
                                return (
                                    <img key={id} src={url} alt='' className={`${imgMain===url ? 'active':''}`} onClick={() => setImgMain(url)}/>
                                )
                            })}
                        </div>
                    </section>
                    <section className='content'>
                        <h2>{name}</h2>
                        <div className='review'>
                            <div className='stars'>
                                {starList.map((starItem) => {
                                    let temp = stars - starItem;
                                    
                                    if(temp >= 1){
                                        return(
                                            <span key={starItem}><BsStarFill/></span>
                                        )
                                    }
                                    else if(temp >0 && temp<1){
                                        return(
                                            <span key={starItem}><BsStarHalf/></span>

                                        )
                                    }
                                    else{
                                        return(
                                            <span key={starItem}><BsStar/></span>

                                        )

                                    }
                                })}
                            </div>
                            <p className='reviewer'>
                                ({reviews} customer reviewers)
                            </p>
                        </div>
                        <h5>${price/100}</h5>
                        <p className='description'>{description}</p>
                        <p className='info'>
                            <span>available:</span>{stock} products in stock
                        </p>
                        <p className='info'>
                            <span>SKU:</span> {id}
                        </p>
                        <p className='info'>
                            <span>brand:</span> {company}
                        </p>
                        <hr/>
                        <div className='colors-single-product info'>
                            <span>colors:</span>
                            <div style={{display:'flex'}}>
                                {colors.map((color,index) => {
                                    
                                    return(
                                        <button key={index} type='button' className={`${colorSelected === color ? 'color-btn active':'color-btn'}`} 
                                            style={{backgroundColor:`${color}`}} onClick={() => setColorSelected(color)}>
                                            <BsCheck className='check-icon'/>
                                        </button>
                                    )
                                } )}
                            </div>
                        </div>
                        <div className='btn-cart-container'>
                            <div className='amounts-btn'>
                                {amountSingleProduct===1 ? 
                                <button disabled  type='button' className='dec-btn' >
                                    <AiOutlineMinus/>
                                </button>
                                : 
                                <button  type='button' className='dec-btn' onClick={() => setAmountSingleProduct(amountSingleProduct-1)}>
                                    <AiOutlineMinus/>
                                </button>
                                }
                                <h2>{amountSingleProduct}</h2>
                                {amountSingleProduct===stock ?
                                <button disabled  type='button' className='inc-btn' >
                                    <AiOutlinePlus/>
                                </button>
                                :
                                <button  type='button' className='inc-btn' onClick={() => setAmountSingleProduct(amountSingleProduct+1)}>
                                    <AiOutlinePlus/>
                                </button>
                                }
                            </div>
                            <Link to='/cart' className='btn' onClick={() => handleAddCartItem(cartItem)}>add to cart</Link>
                        </div>
                    </section>
                </div>
            </div>
                        
        </>
    )
}

export default SingleProduct
