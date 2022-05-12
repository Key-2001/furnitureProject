import React, { useState, useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'


const AppContext = React.createContext();

const API_ENDPOINT = 'https://course-api.com/react-store-products?';

const initialState = {
    isLoading: false,
    total:0,
    shippingFee:0,
    amount:0,
    products:[],
    carts:[],
    orderTotal:0,
}

let url='';

const getSortType = () => {
    const data = localStorage.getItem('sortType')
    return data ? data : 'price-lowest'
}

const AppProvider = ({children}) => {

    const [isShowSidebar,setIsShowSidebar] = useState(false)
    const [state,dispatch] = useReducer(reducer,initialState)
    const [sortType,setSortType] = useState(getSortType());
    const [dataDefault,setDataDefault] = useState([]);
    const [queryTemp,setQueryTemp] = useState('');
    const [category,setCategory] = useState('all');
    const [company,setCompany] = useState('all');
    const [color,setColor] = useState('all');
    const [price,setPrice] = useState(309999)
    const [shipping,setShipping] = useState(false);
    const [isFormLogin,setIsFormLogin] = useState({
        isLogin:false,
        isRegister:false,
        isForgotPassword: false
    })
    // handle products pages
    const handleShowSidebar = () => {
        setIsShowSidebar(!isShowSidebar);
    }

    const fetchData = async (url) => {
        dispatch({type:'SET_LOADING'});
        try {
            const response = await fetch(url);
            const data = await response.json();
            setDataDefault(data)
            handleChangeSortType(data)
            dispatch({type:'SET_PRODUCTS',payload:data});
            // console.log(data);
        } catch (error) {
            console.log(error)

        }
        
    }

    const handleChangeSortType = (data) => {
        if(sortType === 'price-lowest'){
            
            data.sort((a,b) => {
                if(a.price < b.price) return -1
                return 0
            })
        }
        else if(sortType === 'price-highest'){
            data.sort((a,b) => {
                if(a.price > b.price) return -1
                return 0
            }) 
        }
        else if(sortType === 'name-a'){
            data.sort((a,b) => {
                if(a.name < b.name) return -1
                return 0
            })
        }
        else{
            data.sort((a,b) => {
                if(a.name > b.name) return -1
                return 0
            })
        }
        localStorage.setItem('sortType',sortType);
        dispatch({type:'SET_PRODUCTS',payload:data});
        
    }

    const handleSearchTemp = (data) => {
        if(queryTemp !== ''){
            
            data = data.filter((item) => {
                return item.name.toLowerCase().indexOf(queryTemp.toLowerCase()) !== -1;
                // return item.name.toLowerCase() === queryTemp.toLowerCase();
            });
            console.log(data);
        }
        
        dispatch({type:'SET_PRODUCTS',payload:data});
        return data
    }

    const handleClickCategory = (data) => {
        
        const categories = document.getElementsByName('category')
        
        categories.forEach((categoryItem) => {
            if(categoryItem.classList.contains('active')){
                categoryItem.classList.remove('active')
            }
            if(categoryItem.value === category){
                categoryItem.classList.add('active')
            }
        })

        if(category !== 'all'){
            data = data.filter((item) => item.category === category)
        }
        
        dispatch({type:'SET_PRODUCTS',payload:data});
        return data
    }

    const handleSelectCompany = (data) => {
        if(company !== 'all'){
            data = data.filter((item) => item.company === company)
        }
        dispatch({type:'SET_PRODUCTS',payload:data});
        return data;
    }

    const handleSelectColor = (data) => {
        const colors = document.getElementsByName('color')
        colors.forEach((colorItem) => {
            if(colorItem.classList.contains('active')){
                colorItem.classList.remove('active')
            }
            if(colorItem.value === color){
                colorItem.classList.add('active');
            }
        })

        if(color !== 'all'){
            data = data.filter((item) => {
                return item.colors.includes(color);
            })
        }
        
        dispatch({type:'SET_PRODUCTS',payload:data});
        return data;
    }

    const handleChangePrice = (data) => {
        data = data.filter((item) => item.price <= price)
        dispatch({type:'SET_PRODUCTS',payload:data});
        return data;
    }

    const handleCheckShipping = (data) => {
        if(shipping){
            data = data.filter((item) => item.shipping === shipping)
        }
        dispatch({type:'SET_PRODUCTS',payload:data});
        return data;
    }

    const handleClearFilter = () => {
        setQueryTemp('');
        setCompany('all');
        setColor('all');
        setCategory('all');
        setPrice(309999);
        setShipping(false);
    }

    useEffect(() => {
        fetchData(API_ENDPOINT);  
    },[])

    useEffect(()=> {
        let dataTemp = dataDefault;
        dataTemp = handleClickCategory(dataTemp)
        dataTemp = handleSearchTemp(dataTemp);
        dataTemp = handleSelectCompany(dataTemp);
        dataTemp = handleSelectColor(dataTemp);
        dataTemp = handleChangePrice(dataTemp);
        dataTemp = handleCheckShipping(dataTemp);
        handleChangeSortType(dataTemp);
        
        // console.log(dataTemp)
    },[sortType,queryTemp,category,company,color,price,shipping])

    // handle cart page
    const handleAddCartItem = (data) => {
        // console.log(data)
        dispatch({type:'SET_CARTS',payload:data})
        // console.log(state.carts)
    }

    const toggleAmount = (id,type) => {
        dispatch({type:'TOGGLE_AMOUNT',payload:{id,type}})
    }

    const remove = (id) => {
        dispatch({type:'REMOVE',payload:id})
    }

    const clearCart = () => {
        dispatch({type:'CLEAR_CART'})
    }

    useEffect(() => {
        dispatch({type:'GET_TOTAL'})
        dispatch({type:'GET_SHIP'})
        dispatch({type:'GET_ORDER'})
        dispatch({type:'GET_AMOUNTS'})
    },[state.carts])

    return(
        <AppContext.Provider value={{
            ...state,isShowSidebar,handleShowSidebar,sortType,setSortType,dataDefault,
            queryTemp,setQueryTemp,setCategory,setCompany,company,setColor,price,setPrice,setShipping,shipping,handleClearFilter,
            handleAddCartItem,toggleAmount,remove,clearCart,isFormLogin,setIsFormLogin
        }}>{children}</AppContext.Provider>
    )
}

//make sure use

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext,AppProvider}