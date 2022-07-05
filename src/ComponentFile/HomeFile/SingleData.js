import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Singledata.css';

const SingleData = ({ data }) => {
    const { _id, name, image, description, price, quentity, suppliername } = data;
    const naviget = useNavigate();

    const getidFun = (id) => {
        console.log(id)
        naviget(`/dynamicPage/${id}`)
    }
    return (
        <div>
            <div className="child-data-style col">
                <div className="img">
                    <img className='img-fluid' src={image} alt="" />
                </div>
                <div className="hr"></div>

                <div className="text-info">
                    <h6>name : {name}</h6>
                    <h5>Price: {price} Lakh</h5>
                    <p><span>Quentity</span> : {quentity}</p>
                    <p title={description}><span>Sone-Info</span> : {description.slice(0, 80)}...</p>
                    <p className="supplier-name"><span>Supplier</span> : {suppliername}</p>
                </div>
                <button onClick={() => getidFun(_id)}>Update</button>
            </div>

        </div>
    );
};

export default SingleData;