// import { Carousel } from 'bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useDynamicData from '../HookFile/useDynamicData';
import './DynamicPage.css';
import useDataLoad from '../HookFile/useDataLoad';
import Footer from '../FooterFile/Footer';

const DynamicPage = () => {
    const { dataId } = useParams();
    const [dynamicData, setDynamicData] = useDynamicData(dataId);
    const { name, image, description, price, quentity, suppliername } = dynamicData;
    const [countQuintity, setCountNumber] = useState(0);
    const [addNumber, setAddNumber] = useState(0);
    const [data] = useDataLoad([])

    // console.log(data?.image)



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
        <div>
            <div className='dynamic-page-style'>

                <div className="carousel">
                    <Carousel className='main-carousel'>
                        {
                            data.map(sdata => <Carousel.Item interval={3000} className="carousel-item" key={sdata._id} >
                                <img className="img-style" src={sdata.image}
                                    alt="First slide"
                                />
                            </Carousel.Item>)
                        }
                    </Carousel>
                </div>

                <div className="count-div">
                    <div className="dynamic-data-style">
                        <img className='img-fluid' src={image} alt="" />
                        <div className="info">
                            <p>name : {name}</p>
                            <p>price : {price} Lakh</p>
                            <p>quentity : {countQuintity}</p>
                            <p>description : {description}</p>
                            <p>suppliername : {suppliername}</p>
                        </div>
                    </div>

                    <div className="simple-form">
                        <h4>Quintity = {countQuintity}</h4>
                        <button className='button' onClick={() => updateDataFun(countQuintity)}>Delivered</button>
                        <form onSubmit={addQuintity}>
                            <Form.Control onBlur={getNumber} type="number" placeholder="Add Quintity" required />
                            <Button type="submit"> Added </Button>
                        </form>
                    </div>
                </div>
            </div >
            <Footer></Footer>
        </div>
    );
};

export default DynamicPage;