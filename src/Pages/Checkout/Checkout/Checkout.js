import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetails';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name} </h2>
        </div>
    );
};

export default Checkout;