import React from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    console.log(from);
    if (user) {
        navigate(from, { replace: true })
    }

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        console.log(email, password)
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='login-style'>
            <h2>this is login style</h2>


            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Email' type="text" {...register("email")} /> <br />
                <input placeholder='password' type="password" {...register("password")} /> <br />
                {
                    error && <p style={{color : "red"}}>{error.message}</p>
                }
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
};

export default Login;