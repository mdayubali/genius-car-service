import React from 'react';
import slipping from '../../images/slipping.jpg';
const NotFound = () => {
    return (
        <div className='my-5'>
            <h3 className='text-center text-primary mb-5'> Machanic is slipping</h3>
            <img className="img-fluid rounded mx-auto d-block" src={slipping} alt="slipping"/>

        </div>
    );
};

export default NotFound;