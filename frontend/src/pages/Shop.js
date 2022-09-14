import React, { useEffect,useState } from 'react';
import shopServices from '../services/shopServices';
import ShopAd from '.././components/ShopAd/ShopAd.js';

function Shop() {

const [ads, setAds] = useState([]);

    useEffect(() => 
    {  shopServices.getAds()
        .then(response => {
                if(response.status === 200){
                    setAds(response.data);
                    console.log(response);
                }

         })
        .catch( (err) => console.log(err))
        },[]);


    return (

        <div className="shop-wrapper container">
            <div className="row">
                {ads.map((element, index) => {
                    return <ShopAd ad={element} key={element.id}/>
                })}
            </div>
        </div>
    )
}
export default Shop;