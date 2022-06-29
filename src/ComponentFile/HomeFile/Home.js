import React from 'react';
import useDataLoad from '../HookFile/useDataLoad';
import './Home.css';
import SingleData from './SingleData';

const Home = () => {
    const [data, setData] = useDataLoad();
    return (
        <div className='main-home-style'>

            <div className="banner">
                <div className="img">
                    <img src="https://i.ibb.co/sgP7Qch/banner-images-162476992964842.jpg" alt="" />
                </div>

                <div className="text-div">
                    <h2>Woner : Fozle Rabbi</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quo!</p>
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
    );
};

export default Home;




{/* banner = 
      https://i.ibb.co/sgP7Qch/banner-images-162476992964842.jpg 
      https://i.ibb.co/x2ZpSvR/download.jpg
      https://i.ibb.co/fq7HV9y/103d4f8f5392942092414077d6b0637a918dc35e.jpg

      */}