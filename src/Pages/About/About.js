import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css'
const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <h2>This is About</h2>
        </div>
    );
};

export default About;