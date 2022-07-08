import React from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
            <h2>Login Here</h2>
            <div className="form-div">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Email' type="text" {...register("email")} /> <br />
                    <input placeholder='password' type="password" {...register("password")} /> <br />
                    {
                        error && <p style={{ color: "red" }}>{error.message}</p>
                    }

                    <p>If You Don't Registerd ,,, Then Go To  <Link className='login-link' to="/registation">Registation...</Link> First</p>
                    <input className='button' type="submit" value="SUBMIT" />
                </form>

            </div>
        </div>
    );
};

export default Login;