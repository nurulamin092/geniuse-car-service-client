import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import axios from 'axios';
import { toast } from 'react-toastify';
const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    // const [user, setUser] = useState({
    //     name: 'Akbar the great',
    //     email: 'akbar@mamo.taj',
    //     address: 'Tajmohotl rald mohammmad pur',
    //     phone: '019484392 '
    // });
    // const handleAddressChange = (e) => {
    //     const { address, ...rest } = user;
    //     const newAddress = e.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     setUser(newUser);
    //     console.log(newUser);
    // }

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: e.target.address.value,
            phone: e.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('your order is booked!!!');
                    e.target.reset();
                }
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name} </h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name='name' placeholder='name' required readOnly disabled /> <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name='email' placeholder='email' required readOnly disabled /> <br />
                <input className='w-100 mb-2' type="text" value={service.name} name='service' placeholder='service' required readOnly disabled /> <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='address' autoComplete='off' required /> <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone' autoComplete='off' required /> <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;