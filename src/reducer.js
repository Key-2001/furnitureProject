const reducer = (state,action) => {
    switch(action.type){
        case 'SET_LOADING':{
            return{
                ...state,
                isLoading: true,
            }
        } 
        case 'SET_PRODUCTS':{
            return{
                ...state,
                isLoading:false,
                products:action.payload,
            }
        }
        case 'SET_CARTS':{
            return{
                ...state,
                carts:[...state.carts,action.payload]
            }
        }
        case 'TOGGLE_AMOUNT':{
            let tempCarts = state.carts.map((cartItem) => {
                if(cartItem.id === action.payload.id){
                    if(action.payload.type === 'dec'){
                        return{...cartItem,amountCart:cartItem.amountCart - 1};
                    }
                    if(action.payload.type === 'inc'){
                        return{...cartItem,amountCart:cartItem.amountCart + 1};
                    }
                }
                return cartItem;
            })
            return{
                ...state,
                carts:tempCarts,
            }
        }
        case 'REMOVE':{
            return{
                ...state,
                carts:state.carts.filter((cartItem) => cartItem.id !== action.payload)
            }
        }
        case 'GET_TOTAL':{
            let total = state.carts.reduce((prev,cur)=>{
                let totalCur = cur.amountCart*cur.price/100;
                return totalCur + prev
            },0)
            total = total.toFixed(2);
            return{
                ...state,
                total:total,
            }
        }
        case 'GET_SHIP':{
            let isShip = state.carts.every((cartItem) => cartItem.shipping === true);
            let shipping = 5.34;
            if(isShip){
                shipping = 0;
            }
            
            return{
                ...state,
                shippingFee:shipping,
            }
        }
        case 'GET_ORDER':{
            let orderTotal = Number(state.total) + state.shippingFee;
            return{
                ...state,
                orderTotal:orderTotal.toFixed(2),
            }
        }
        case 'CLEAR_CART':{
            return{
                ...state,
                carts:[],
            }
        }
        case 'GET_AMOUNTS':{
            let amount = state.carts.reduce((prev,cur)=>{
                return prev + cur.amountCart
            },0);
            return{
                ...state,
                amount:amount,
            }
        }
        default: return state;
    }
}

export default reducer