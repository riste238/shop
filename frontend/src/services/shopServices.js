// import React from 'react';
import axios from 'axios';

class shopServices {
    static getAds(){
        return axios.get('https://fakestoreapi.com/products');
    }
}

export default shopServices;