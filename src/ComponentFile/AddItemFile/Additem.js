import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import './Additem.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Additem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const email = user.email;
    console.log(email);

    const onSubmit = data => {
        const url = `http://https://pabna-bike-corner.herokuapp.com/bikeData?email=${email}`;
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
                toast("Added your Item SuccessFuly");
            })

    };
    // const { _id, name, image, description, price, quentity, suppliername } = data;
    //name :  BMW K1300R
    // url :https://i.ibb.co/k4q3S1V/giant-reign-advanced-pro-29-1-381405-1.jpg
    //descrioption : BMW K1300R is a naked bike that was launched by the German automaker in 2008 and was discontinued after 2015. BMW introduced the K1300R to replace the existing K1200R and was quite successful in doing so.

    return (
        <div className='main-form-style'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h5>Add Your Item Here</h5>
                <input placeholder='name' type="text" {...register("name")} required /> <br />
                <input placeholder='Email' type="text" {...register("email")} required /> <br />
                <input placeholder='URL' type="text" {...register("image")} required /> <br />
                <input placeholder='price' type="number" {...register("price")} required /> <br />
                <input placeholder='quentity' type="number" {...register("quentity")} required /> <br />
                <input placeholder='supplier-Name' type="text" {...register("suppliername")} required /> <br />
                <textarea placeholder='description' type="text" {...register("description")} required /> <br />
                <input className='button' type="submit" value="SUBMIT" />
            </form>
            {/* <div className="tost"> */}
                <ToastContainer className="tost" />
            {/* </div> */}
        </div>
    );
};

export default Additem;