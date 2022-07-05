import React from 'react';
import './BikerClubPage.css';

const BikerClubPage = () => {
    return (
        <div className='main-div'>
            <div className="title-div">
                <p>We Are The <span>Biker</span>Club </p>
                <div className="border-span">
                    <span className='yellow'></span>
                    <span className='red'></span>
                </div>
                <p className="card-text">A motorcycle, often called a motorbike, bike, cycle, or trike, is a two- or three-wheeled motor vehicle. Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising, sport, and off-road riding</p>
            </div>

            <div className="pic-text-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="https://st2.depositphotos.com/1655283/5375/i/950/depositphotos_53750461-stock-photo-motorbike-rides-on-the-street.jpg" alt="" />

                        </div>
                    </div>
                   
                    <div className="col">
                        <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                        </div>
                    </div>

                    <div className="col">
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