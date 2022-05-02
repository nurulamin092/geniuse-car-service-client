import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetails';

const ServiceDetail = () => {
    const { serviceId, name } = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div>
            <h2>You are about to Book : {service.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;