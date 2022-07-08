import React from 'react';
import './Registation.css';
import { useForm } from 'react-hook-form';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const Registation = () => {
    const { register, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, userr, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    if (user) {
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
        <div className='main-style'>
            <div className='registation-style'>
                <h2>Registation Here</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='name' type="text" {...register("name")} required /> <br />
                    <input placeholder='Email' type="text" {...register("email")} required /> <br />
                    <input placeholder='password' type="password" {...register("password")} required /> <br />
                    <input placeholder='Confurm-Password' type="password" {...register("confurmPassword")} required /> <br />
                    <p>If You Are Already Registerd ,,, Then Go To  <Link className='login-link' to="/login">Login...</Link> </p>
                    <input className='button' type="submit" value="SUBMIT" />
                </form>
            </div>
        </div>
    );
};

export default Registation;