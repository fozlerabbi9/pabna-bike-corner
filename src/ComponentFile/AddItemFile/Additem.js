import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import './Additem.css';

const Additem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const email = user.email;
    // console.log(user.email);
    console.log(email);

    const onSubmit = data => {
        // console.log(data)
        const url = `http://localhost:5000/bikeData?email=${email}`;
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
    //name :  BMW K1300R
    // url :https://i.ibb.co/k4q3S1V/giant-reign-advanced-pro-29-1-381405-1.jpg
    //descrioption : BMW K1300R is a naked bike that was launched by the German automaker in 2008 and was discontinued after 2015. BMW introduced the K1300R to replace the existing K1200R and was quite successful in doing so.

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