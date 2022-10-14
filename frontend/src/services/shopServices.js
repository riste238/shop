// import React from 'react';
import axios from 'axios';

class shopServices {
    static getAds(){
        return axios.get('https://fakestoreapi.com/products');
    }

    static getAdById(adId){
        return axios.get(`https://fakestoreapi.com/products/${adId}`)
    }
    static getTopRatedProduct(num){
        return axios.get("/api/top-products/" + num);

    }
}

export default shopServices;