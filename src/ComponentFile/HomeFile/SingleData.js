import React from 'react';
import './Singledata.css';

const SingleData = ({ data }) => {
    const { id, name, image, description, price, quentity, suppliername } = data;
    return (
        <div>
            <div className="child-data-style col">
                <div className="img">
                    <img className='img-fluid' src={image} alt="" />
                </div>

                <div className="info">
                    <h6>name : {name}</h6>
                    <h5>Price : {price} Lakh</h5>
                    <p>Quentity : {quentity}</p>
                    <p>Sone-Info : {description}</p>
                    <p className="supplier-name">Suplieer : {suppliername}</p>
                </div>
                <button>Update</button>
            </div>

        </div>
    );
};

export default SingleData;