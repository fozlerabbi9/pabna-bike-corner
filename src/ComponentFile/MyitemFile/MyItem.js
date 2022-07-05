import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useDataLoad from '../HookFile/useDataLoad';
import './Myitem.css';

const MyItem = () => {
    // const [data, setData] = useDataLoad([]);
    const [user] = useAuthState(auth);
    const [myData, setMyData] = useState([]);
    const filterData = myData.filter(myfilterData => myfilterData.email === user.email);
    // console.log(filterData);
    // console.log(user.email);
    useEffect(() => {
        fetch(`http://localhost:5000/bikeData`)
            .then(res => res.json())
            .then(mydata => setMyData(mydata))
    }, [])
    // const { name, image, description, price, quentity, suppliername } = dynamicData;
    return (
        <div className="main-my-items-style">
            <div className="my-items-style">
                {/* {
                    myData?.map(myData => <li>
                        {myData?.email}
                    </li>)
                } */}
                {
                    filterData?.map(myData => <li style={{display : 'flex' , justifyContent : 'space-around' , margin: '15px'}}>
                        {/* {myData?.email} */}
                        <p> name : {myData?.name}</p>
                        <img style={{width : '100px'}} src={myData?.image} alt="" />
                        <p>price : {myData?.price}</p>
                        <p>quentity : {myData?.quentity}</p>
                    </li>)
                }
            </div>
        </div>
    );
};

export default MyItem;