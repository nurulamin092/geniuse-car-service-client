import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId, name } = useParams();
    return (
        <div>
            <h2>Welcome to details {serviceId}</h2>
            <p>{name}</p>
        </div>
    );
};

export default ServiceDetail;