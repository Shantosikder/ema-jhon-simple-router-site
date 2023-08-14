import React, { useState } from 'react';
import Card from '../Card/Card';
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCard =useLoaderData();
    // console.log(products);
    const [card, setCard] = useState(savedCard)
    const handleRemoveFormCard = (id) =>{
        // console.log(id)
        const remaining = card.filter(product => product.id !== id);
        setCard(remaining);
        removeFromDb(id);
    }

    const handleClearCart = ()=>{
        setCard([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
            {/* <h1>Orders Page {card.length}</h1> */}
            {
                card.map(product => <ReviewItem
                key={product.id}
                product = {product}
                handleRemoveFormCard={handleRemoveFormCard}
                ></ReviewItem>)
            }
            </div>
            <div className='card-container'>
                <Card 
                card={card}
                handleClearCart={handleClearCart}
                >
                    <Link className='proceed-link' to="/checkout">
                        <button className='btn-proceed'>Proceed Checkout</button>
                    </Link>
                </Card>
            </div>
        </div>
    );
};

export default Orders;