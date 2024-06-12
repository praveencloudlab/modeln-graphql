const initialState={
    cart_items:0,
};

const cartReducer=(state=initialState,action)=>{
    const {type}=action;
    switch(type){
        case 'ADD_ITEM_TO_CART':
            return{
                ...state,
                cart_items:state.cart_items+1
            };
        case 'DELETE_ITEM_FROM_CART':
            return{
                ...state,
                cart_items:state.cart_items-1
            };
        default:
            return state;
    }
};

export default cartReducer;