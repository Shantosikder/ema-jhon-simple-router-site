import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    // console.log(props)
    const {img,price,name,seller,quantity,ratings} = props.product;
    const handleAddToCard = props.handleAddToCard;
  
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <h6>Price: ${price}</h6>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Starts</p>
            </div>
            <button onClick={() => handleAddToCard(props.product)} className='btn-card'>
                Add to Card
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;