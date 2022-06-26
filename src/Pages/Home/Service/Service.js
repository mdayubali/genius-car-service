import React from 'react';
import './Service.css';
import { useNavigate } from "react-router-dom";

const Service = ({service}) => {
    const {id,name,img,price,description} = service;
    let navigate = useNavigate();
    const navtigateServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div>
            <div id="service" className='service-content'>
                <img className='element-center' src={img} alt="" />
                <h5>{name}</h5>
                <p>Price: {price}</p>
                <p>{description}</p>
                <button onClick={()=>navtigateServiceDetail(id)} className='text-center btn btn-primary'>Book your Reaparing date</button>
            </div>
        </div>
    );
};

export default Service;