import React from 'react';
import { useForm } from 'react-hook-form';
import './Additem.css';

const Additem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/bikeData`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(postData => {
                console.log("SuccessPost ==> ", postData)
            })
    };
    // const { _id, name, image, description, price, quentity, suppliername } = data;
    //name :  Reign Advanced Pro 29 1

    // url :https://i.ibb.co/k4q3S1V/giant-reign-advanced-pro-29-1-381405-1.jpg
    //descrioption : When you’re racing enduro, the terrain comes at you fast. This pro-level shredder gives you the confidence to stay cool when things get rowdy

    return (
        <div className='main-form-style'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' type="text" {...register("name")} /> <br />
                <input placeholder='Email' type="text" {...register("email")} /> <br />
                <input placeholder='URL' type="text" {...register("image")} /> <br />
                <input placeholder='price' type="number" {...register("price")} /> <br />
                <input placeholder='quentity' type="number" {...register("quentity")} /> <br />
                <input placeholder='supplier-Name' type="text" {...register("suppliername")} /> <br />
                <textarea placeholder='description' type="text" {...register("description")} /> <br />
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
};

export default Additem;