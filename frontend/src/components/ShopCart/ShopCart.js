import React, { useEffect, useRef } from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import './shop-cart.scss';
import { useSelector } from 'react-redux';

function ShopCart() {
    const { cart } = useSelector(state => state.cartStore);
    const shopCartWrapperRef = useRef();

    useEffect(() => {

        if(!shopCartWrapperRef.current){
            return;
        }

        if(cart.length){
            shopCartWrapperRef.current.classList.add('show-badge');

        }
        else {
            shopCartWrapperRef.current.classList.remove('show-badge');
        }
        console.log(shopCartWrapperRef.current);
    }, [cart]);

    
    const shopCartSumLayout = () => {
        return cart.map((item, index) => {
            return <div key={index} className="shop-cart-item">{item.title}</div>
        })
    }

    return (
        <div ref={shopCartWrapperRef} className="shop-cart-wrapper">
            <FaCartArrowDown />
        <span className="shop-cart-badge">{cart.length}</span>
    <div className="shop-cart-sum">

            {shopCartSumLayout()}
    </div>
        </div>
    )
}
export default ShopCart;