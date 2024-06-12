import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
    const results=useSelector((state)=>state.counter.count)
    const cart_items=useSelector((state)=>state.cart.cart_items);

    return (
        <div>
            <h2>Display component</h2>
            <hr/>
            <h3>Count: {results}</h3>
            <h3>Cart Items: {cart_items}</h3>
           
        </div>
    );
};

export default Display;