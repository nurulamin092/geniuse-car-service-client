import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, price, img, description } = service;
    const navigate = useNavigate();
    const navigateToServiceDetails = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h2>{price}</h2>
            <p>{description}</p>
            <button onClick={() => navigateToServiceDetails(id)} className='btn btn-primary'>Book:{name}</button>
        </div>
    );
};

export default Service;