import React from 'react'
import './Product.css';
function Product({ id, title, image, price, rating }) {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating)
                .fill()
                .map((_, i) => (
                <p>🌟</p>
                ))}
            </div>
        </div >
            <div className='product_des'>
            <div className='product__img'>
                <img src={image}/>
            </div>
            <button>Add To Cart</button>
            </div>
    </div>
  )
}

export default Product
// each product has title img star rating buy option