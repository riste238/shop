
// this will be a one product;
import React, { useState, useEffect } from 'react';
import './shopAd.scss';


function ShopAd(props) {
    const [ad, setAd] = useState({});

    useEffect(() => {
        // console.log(props.ad)
        setAd(props.ad);
    },[]
    )

    return ( 
        <div className="shop-ad-wrapper col-md-3">
            {ad.hasOwnProperty('image') ?
                <div>
                <img src={ad.image} className="img img-fluid"/>
                <p className="shop-ad-title">{ad.title}</p>
                <p>Rate: {ad.rating["rate"]}</p>
                <p className="shop-ad-price">Price: {ad.price}</p>
                </div>
           : null }
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