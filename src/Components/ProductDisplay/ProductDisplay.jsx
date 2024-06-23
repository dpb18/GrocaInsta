import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star.png'
import star_null_icon from '../Assets/star null.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
       <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt=''/>
        </div>
       </div>
       <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_null_icon} alt=''/>
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
            ₹{product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
            ₹{product.new_price}
            </div>
        </div>
        <div className="productdisplay-right-description">
        Fresh groceries are the cornerstone of a healthy and satisfying diet, providing the essential nutrients and vibrant flavors that only the best produce can offer. At our store, we prioritize quality by sourcing our fruits, vegetables, and other perishables from trusted local farms, ensuring each item is harvested at its peak. This commitment to freshness means you can taste the difference in every bite, enjoying crisp textures and natural sweetness that enhance your meals. Whether you're crafting a gourmet dish or a simple snack, our fresh groceries deliver the taste and nutrition you need to live well and feel great. Experience the true essence of fresh, wholesome food with every shopping trip.
    
        </div>
        <div className="productdisplay-right-amount">
            <h1>Select Amount</h1>
            <div className="productdisplay-right-amounts">
                <div>0.5Kg</div>
                <div>1Kg</div>
                <div>2Kg</div>
                <div>3Kg</div>
                <div>5Kg</div>
            </div>
        </div>
        <button onClick={() =>{addToCart(product.id)}}>Add to Cart</button>
        {/* <p className='productdisplay-right-category'><span>Category: </span>Groceries, Vegetables</p>
        <p className='productdisplay-right-category'><span>Tags: </span>Fresh</p> */}
       </div>
        </div>
  )
}

export default ProductDisplay