
// this will be a one product;
import React, { useState, useEffect } from 'react';
import './shopAd.scss';
import {Link} from 'react-router-dom';


function ShopAd(props) {
    const [ad, setAd] = useState({});

    useEffect(() => {
        // console.log(props.ad)
        setAd(props.ad);
    },[]
    )

    return ( 
        <div className="shop-ad-wrapper col-md-3">
            <div className="cart">

           
            {ad.hasOwnProperty('image') ?
                <div>
                <img src={ad.image} className="img img-fluid  "/>
                <p className="shop-ad-title">{ad.title}</p>
                <p>Rate: {ad.rating["rate"]}</p>
                <p className="shop-ad-price">Price: {ad.price}</p>
                <Link to={`/shop/ad/${ad.id}`}>
                <p className="view-more-btn-text">View Product</p>
                </Link>
                
                </div>
           : null }
            </div>
        </div>

    )}
//      <>
//             {ad.hasOwnProperty('image') ?
//                     <div className="shop-ad-wrapper col-md-3">
//                 <div className="shop-ad-content-wrapper">
//                     <img src={ad.img} className="img img-fluid" alt=""/>
//                     <p className="shop-ad-title">{ad.title}</p>
//                     <p>Rate: {ad.rating}</p>
//                     <p className="shop-ad-price">{ad.price}$</p>
//
//                 </div>
//                     </div>
//
//                     : null}
// </>
// }

export default ShopAd;