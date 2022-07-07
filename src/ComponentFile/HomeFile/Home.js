import React, { useEffect } from 'react';
import useDataLoad from '../HookFile/useDataLoad';
import './Home.css';
import SingleData from './SingleData';
import { FiCpu } from "react-icons/fi";
import { AiFillDropboxCircle, AiFillHighlight, AiFillIeCircle } from "react-icons/ai";
import { RiFacebookBoxFill } from "react-icons/ri";
import BikerClubPage from './BikerClubFile/BikerClubPage';
import GoogleMap from '../GoogleMapFile/GoogleMapjs';
import Contact from '../ContactFIle/Contact';
import Aos from 'aos';
// import 'aos/dist/aos.css';



const Home = () => {
    const [data, setData] = useDataLoad();
    useEffect(()=> {
        Aos.init({duration : 1500})
    }, []);
    // const btsbutton = (e) =>{
    //     console.log("bts button")
    // }

    return (
        <div className='main-home-style'>

            <div data-aos="zoom-in" className="banner">
                <div className="img">
                    <img src="https://i.ibb.co/sgP7Qch/banner-images-162476992964842.jpg" alt="" />
                </div>
                <div className="text-div">
                    <div className='text-chile-div'>
                        <h2>Welcome to Pabna Bike Corner</h2>
                        <h3>Woner : Fozle Rabbi</h3>
                        {/* <button onClick={()=> btsbutton()} type="button" class="btn btn-primary">Primary</button> */}
                        <div className="button">
                            <button> <RiFacebookBoxFill  className='fav-icons-fb'></RiFacebookBoxFill> Facebook</button>
                        </div>
                    </div>
                </div>
            </div>

            <div  data-aos="fade-up" className="info-card-section">
                <div className="card-one">
                    <h2><AiFillDropboxCircle className='fav-icons'></AiFillDropboxCircle> </h2>
                    <h6>Professional Assembly</h6>
                    <p>At hundreds of partner bike shops nationwide</p>
                </div>
                <div className="card-two">
                    <h2><FiCpu className='fav-icons'></FiCpu></h2>
                    <h6>USA-based Support</h6>
                    <p>Help when you need it via phone, email, or live chat</p>
                </div>
                <div className="card-three">
                    <h2><AiFillIeCircle className='fav-icons'></AiFillIeCircle></h2>
                    <h6>Pay on your terms</h6>
                    <p>Credit, debit, Apple Pay, Google Pay, or easy financing </p>
                </div>
                <div className="card-four">
                    <h2><AiFillHighlight className='fav-icons'></AiFillHighlight></h2>
                    <h6>Everyone can ride</h6>
                    <p>Step-thru frames make it easy to get on and off</p>
                </div>
            </div>

            <div className="product-section">
                <div className="title-part">
                    <h2>Our Product</h2>
                    <div className="span-div">
                        <span> </span>
                        <span className='circle-span'> </span>
                        <span> </span>
                    </div>
                </div>

                <div className="parent-data-div row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        data.slice(0, 6).map(Sdata => <SingleData
                            key={Sdata._id}
                            data={Sdata}
                        ></SingleData>)
                    }
                </div>
            </div>

            <div className="biker-club-section">
                <BikerClubPage></BikerClubPage>
            </div>

            <div className="google-map-section">
                {/* <GoogleMap></GoogleMap> */}
            </div>
            <Contact></Contact>

        </div>
    );
};

export default Home;