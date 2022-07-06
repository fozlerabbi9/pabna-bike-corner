import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';
import Aos from 'aos';
// import 'aos/dist/aos.css';

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    
    useEffect(()=> {
        Aos.init({duration : 1500})
    }, []);

    return (
        <div className='main-contact'>
            <h2>Contact Us</h2>
            <div data-aos="flip-up" className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col img-card">
                    <div className="card">
                        <img src="https://i.ibb.co/FgqMBbk/harley-davidson-hermosa-is-anything-but-spanish-wheels-size-difference-is-huge-19-removebg-preview-1.png" alt="" />
                    </div>
                </div>

                <div className="col">
                    <div className="card email-div">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder='Name' {...register("name")} /> <br />
                            <input placeholder='Email' {...register("email")} /> <br />
                            <textarea placeholder='Message' name="" id="" cols="30" rows="5"></textarea>
                            {/* <input type="submit" /> */}
                            <button>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;