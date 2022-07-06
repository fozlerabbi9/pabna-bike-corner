import React, { useEffect } from 'react';
import './BikerClubPage.css';
import Aos from 'aos';
// import 'aos/dist/aos.css';

// Aos.init({duration : 1500})

const BikerClubPage = () => {
    useEffect(()=> {
        Aos.init({duration : 1500})
    }, []);
    return (
        <div className='main-div'>
            <div className="title-div">
                <p>We Are The <span>Biker</span>Club </p>
                <div className="border-span">
                    <span className='yellow-span'></span>
                    <span className='red-span'></span>
                </div>
                <p className="card-text">A motorcycle, often called a motorbike, bike, cycle, or trike, is a two- or three-wheeled motor vehicle. Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising, sport, and off-road riding</p>
            </div>

            <div className="pic-text-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div data-aos="fade-right" className="col">
                        <div className="card">
                            <img src="https://st2.depositphotos.com/1655283/5375/i/950/depositphotos_53750461-stock-photo-motorbike-rides-on-the-street.jpg" alt="" />

                        </div>
                    </div>
                   
                    <div data-aos="fade-left" className="col">
                        <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">TopClass Performence</h5>
                                    <p className="card-text">The 1885 Daimler Reitwagen made by Gottlieb Daimler and Wilhelm Maybach in Germany was the first internal combustion, petroleum-fueled motorcycle. In 1894, Hildebrand & Wolfmüller became the first series production motorcycle..</p>
                                </div>
                        </div>
                    </div>

                    <div data-aos="fade-up-right" className="col">
                        <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Bulding Your Brand</h5>
                                    <p className="card-text">There are three major types of motorcycle: street, off-road, and dual purpose. Within these types, there are many sub-types of motorcycles for different purposes. There is often a racing counterpart to each type, such as road racing and street bikes, or motocross including dirt bikes..</p>
                                </div>
                        </div>
                    </div>

                    <div data-aos="fade-up-left" className="col">
                        <div className="card">
                            <img src="https://st2.depositphotos.com/1000647/5589/i/950/depositphotos_55895051-stock-photo-biker-girl-riding-on-a.jpg" alt="" />                            
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default BikerClubPage;