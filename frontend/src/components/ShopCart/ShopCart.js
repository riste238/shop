import React, { useEffect, useRef } from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import {FaCartPlus, FaMinusCircle, FaPlusCircle, FaTrashAlt} from "react-icons/fa";
import './shop-cart.scss';
import { useSelector,useDispatch } from 'react-redux';
import { handleCount, removeItem } from '../../redux/cartSlice';

function ShopCart() {
    const { cart } = useSelector(state => state.cartStore);
    const shopCartWrapperRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
            console.log("Cart from useEffect" ,cart);
        if (!shopCartWrapperRef.current) {
            return;
        }

        if (cart.length) {
            shopCartWrapperRef.current.classList.add('show-badge');

        }
        else {
            shopCartWrapperRef.current.classList.remove('show-badge');
        }
        console.log(shopCartWrapperRef.current);
    }, [cart]);

    const removeItemFromCart = (index) =>{
            dispatch(removeItem(index))
    }

    const handleShopCartCount = (index,isIncrement) => {
        console.log(index,isIncrement);
        // {index, isIncrement};
            dispatch(handleCount({index,isIncrement}))
    }


    const shopCartSumLayout = () => {
        return cart.map((item, index) => {
            console.log(item.image);
            // console.log("Pokazi mi go title od kliknatiot item " + item.title);
            return  <div key={index} className="shop-cart-item row mt-3" >
                
                      <div className="col-md-3 cart-img">
                    <img  style={{width:"50px", height:"50px"}} src={item.image} alt=""/>
                </div>
                <div className="col-md-8">
                    <h5>{item.title}</h5>
                    {item.count && <p>Count: <FaMinusCircle className="mx-2" onClick={()=> {handleShopCartCount(index,false)}}/>{item.count} <FaPlusCircle onClick={()=> {handleShopCartCount(index, true)}}/> </p>}
                    <p className="fw-bold">{item.price * item.count} $</p>
                     </div>
                     <div className="col-md-1 remove-icon-wrapper">
                        <FaTrashAlt onClick={() => {removeItemFromCart(index)}}/>
                     </div>
            </div>
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