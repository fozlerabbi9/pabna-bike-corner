import React from 'react';
import './Registation.css';
import { useForm } from 'react-hook-form';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Registation = () => {
    const { register, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, userr, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    if(user){
        navigate('/')
    }


    const onSubmit = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const confurmPassword = data.confurmPassword;

        // const proceed = window.confirm("")
        if (password !== confurmPassword) {
            alert("Password is not matching")
        }
        else {
            console.log(name, email, password, confurmPassword);
            createUserWithEmailAndPassword(email, password);
        }
    }
    return (
        <div className='registation-style'>
            <h2>this si registation page</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' type="text" {...register("name")} /> <br />
                <input placeholder='Email' type="text" {...register("email")} /> <br />
                <input placeholder='password' type="password" {...register("password")} /> <br />
                <input placeholder='Confurm-Password' type="password" {...register("confurmPassword")} /> <br />
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
};

export default Registation;