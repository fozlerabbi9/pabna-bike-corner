import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useDynamicData from '../HookFile/useDynamicData';
import './DynamicPage.css';

const DynamicPage = () => {
    const { dataId } = useParams();
    const [dynamicData, setDynamicData] = useDynamicData(dataId);
    const { name, image, description, price, quentity, suppliername } = dynamicData;
    const [countQuintity, setCountNumber] = useState(0);
    const [addNumber, setAddNumber] = useState(0);




    useEffect(() => {
        const quintityy = parseInt(quentity);
        setCountNumber(quintityy)
    }, [quentity])

    const updateDataFun = (countQuintity) => {
        const newQuintity = countQuintity - 1;
        const updateData = {
            name: name,
            image: image,
            description: description,
            price: price,
            quentity: newQuintity,
            suppliername: suppliername,
        }
        const url = `http://localhost:5000/bikeData/${dataId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(getData => {
                console.log("Success ==> ", getData)
            })
        setCountNumber(newQuintity)
    }


    const getNumber = (e) => {
        e.preventDefault();
        setAddNumber(e.target.value)
    }
    const addQuintity = (e) => {
        e.preventDefault();
        const countNumber = parseInt(countQuintity);
        const addMoreBike = parseInt(addNumber);
        const totalBike = countNumber + addMoreBike;
        const updateData = {
            name: name,
            image: image,
            description: description,
            price: price,
            quentity: totalBike,
            suppliername: suppliername,
        }
        const url = `http://localhost:5000/bikeData/${dataId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(getData => {
                console.log("Success ==> ", getData)
            })

        setCountNumber(totalBike);
    }

    return (
        <div className='dynamic-page-style'>

            <div className="dynamic-data-style">
                <img src={image} alt="" />

                <div className="info">
                    <p>name : {name}</p>
                    <p>price : {price} Lakh</p>
                    <p>quentity : {countQuintity}</p>
                    <p>description : {description}</p>
                    <p>suppliername : {suppliername}</p>
                </div>
            </div>
            <button onClick={() => updateDataFun(countQuintity)}>Delivered</button>
            <h4>Quintity = {countQuintity}</h4>

            <div className="simple-form">
                <form onSubmit={addQuintity}>
                    <Form.Control onBlur={getNumber} type="number" placeholder="number" />
                    <Button type="submit"> Submit </Button>
                </form>
            </div>

        </div >
    );
};

export default DynamicPage;