import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import shopServices from "../../services/shopServices";
import "./view-ad.scss";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/cartSlice";

// const productMockData = {
//     category
//         :
//         "men's clothing",
//     description
//         :
//         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     id
//         :
//         1,
//     image
//         :
//         "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     price
//         :
//         109.95,
// }

export default function ViewAd() {

  

    const [ad, setAd] = useState({});
    const [isParamsAvailable, setIsParamsAvailable] = useState(true);
    const [isApiFinished, setIsApiFinished] = useState(false);
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log(params);
        if (params.adId) {
            getAd();
        }
        
        else {
            setIsParamsAvailable(false);
            
        }
    }, []);

    const noParamsMessageLayout = () => {
        return !isParamsAvailable ?
            <p>No product with this id</p> :
            null;
    }

    const onAddToCart = () => {
      
            dispatch(addToCart(ad)) // params.adId or ad.adId
    }

    const adLayout = () => {
        return <div className="ad-wrapper row">
            <div className="col-md-6">
                <img src={ad.image} alt="Product image" className="ad-img"/>
            </div>
            <div className="col-md-6">
                <h3>{ad.title}</h3>
                <p>{ad.category}</p>
                <p>{ad.description}</p>
                <p>{ad.price}</p>

                <button className="btn add-to-card-btn" onClick={onAddToCart}>Add to Card</button>
            </div>
        </div>
    }

    const getAd = () => {
        shopServices.getAdById(params.adId)
            .then(response => {
                console.log('Owner product with unique params', response);
                if (response.status === 200) {
                    setAd(response.data) 
                }

                if(!response.data){
                    setIsParamsAvailable(false);
                }
            })
            .catch(err => {
                console.log('error from product owner', err);
            })
           
            .finally(() => {
                setIsApiFinished(true);
            })
            // setAd(productMockData)

    }

   

    return (
        <div className="view-ad-wrapper container">
<div className="row">
                <div className="col-md-12">
                    {noParamsMessageLayout()}
                    {ad && ad.hasOwnProperty('id') && adLayout()}
                  
                </div>
            </div>
        

        </div>
    )
} 