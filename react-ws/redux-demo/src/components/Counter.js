import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { decrement, increment } from '../redux/actions/counterActions';
import { add_to_cart, remove_from_cart } from '../redux/actions/cartActions';
const Counter = () => {

    const count=useSelector((state)=>state.count);
    const dispatch=useDispatch();
    return (
        <div>

        <div>
            <h2>Count: {count}</h2>
            <button onClick={()=>dispatch(increment)}>Increment</button>
            <button onClick={()=>dispatch(decrement)}>Decrement</button>
            <button onClick={()=>dispatch(add_to_cart)}>Add to Cart</button>
            <button onClick={()=>dispatch(remove_from_cart)}>Remove from Cart</button>

        </div>
            
            
        </div>
    );
};

export default Counter;