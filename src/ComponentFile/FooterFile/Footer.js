import React, { useEffect } from 'react';
import './Footer.css';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import Aos from 'aos';

const Footer = () => {
    useEffect(()=> {
        Aos.init({duration : 1500})
    }, []);
    return (
        <div className=''>
            <div className="footer-style row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div class="col">
                    <div data-aos="zoom-in" class="card">
                        <h3  >Bike-Hat</h3>
                        <p>Makes a Better life</p>
                        <div className="icon-list">
                            <li><AiFillFacebook></AiFillFacebook></li>
                            <li><AiFillTwitterCircle></AiFillTwitterCircle></li>
                            <li><AiFillInstagram></AiFillInstagram></li>
                            <li> <AiFillYoutube></AiFillYoutube></li>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div data-aos="zoom-in" class="card">
                        <h3>CONTACT</h3>
                        <p>venturo@mail.com</p>
                        <p>+1 (234) 567 890</p>
                        <p>457 Morningview Lane,</p>
                        <p>New York USA</p>
                    </div>
                </div>
                <div class="col">
                    <div data-aos="zoom-in" class="card">
                        <h3>EXPLORE</h3>
                        <p>About</p>
                        <p>Events</p>
                        <p>457 Morningview Lane,</p>
                        <p>Blog</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;