import React, { useState, useEffect } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Service from '../Service/Service';
// import { useState } from 'react/cjs/react.production.min';
// import { useState, useEffect } from 'react-dom';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (

        <div id='services' className='container'>
            <PageTitle title="Service"></PageTitle>
            <h2 className='text-primary text-center mt-5'>Our Services:{services.length}</h2>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    >
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;