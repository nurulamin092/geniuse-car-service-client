import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, price, img, description } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h2>{price}</h2>
            <p>{description}</p>
            <button className='btn btn-primary'>Book:{name}</button>
        </div>
    );
};

export default Service;