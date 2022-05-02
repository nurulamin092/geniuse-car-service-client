import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetails';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user, setUser] = useState({
        name: 'Akbar the great',
        email: 'akbar@mamo.taj',
        address: 'Tajmohotl rald mohammmad pur',
        phone: '019484392 '
    });
    const handleAddressChange = (e) => {
        console.log(e.target.value);
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name} </h2>
            <form>
                <input className='w-100 mb-2' type="text" value={user.name} name='name' placeholder='name' required /> <br />
                <input className='w-100 mb-2' type="email" value={user.email} name='email' placeholder='email' required /> <br />
                <input className='w-100 mb-2' type="text" value={service.name} name='service' placeholder='service' required /> <br />
                <input className='w-100 mb-2' type="text" onChange={handleAddressChange} value={user.address} name='address' placeholder='address' required /> <br />
                <input className='w-100 mb-2' type="text" value={user.phone} name='phone' placeholder='phone' required /> <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />

            </form>
        </div>
    );
};

export default Checkout;