import React from 'react';
import './Expert.css'
const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className='gx-5 gy-5 col-sm-12 col-md-4 col-ls-4'>
            <div className="card " style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    );
};

export default Expert;