import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Card = ({card, handleClearCart, children}) => {
    // const {card} = props;
    // console.log(card)
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of card){
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity+product.quantity;
    }
    const tax=totalPrice*7/100;
    const grandTotal=totalPrice+totalShipping+tax;
    return (
        <div className='card'>
        <h4>Order Summary</h4>
        <p>Selected Item: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping: ${totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        <button onClick={handleClearCart} className='btn-clear-cart'>
            <span>Clear Cart</span>
            <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Card;