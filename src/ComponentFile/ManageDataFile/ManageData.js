
import React from 'react';
import { Table } from 'react-bootstrap';
import useDataLoad from '../HookFile/useDataLoad';
import './ManageData.css';

const ManageData = () => {
    const [data, setData] = useDataLoad();

    const deleteFun = id =>{
        console.log(id)
    }
    
    return (
        <div className='data-manage-style'>
            <h2>this is manage data page</h2>

            <div className="all-data-style">
                <Table className='teble-style' striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>image</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>quentity</th>
                            <th>suppliername</th>
                            <th className='edit-text'>Edit</th>
                            <th className='delete-text'>delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map(Sdata =>
                                <tr key={Sdata._id}>
                                    <td> <img src={Sdata?.image} alt="" /> </td>
                                    <td>{Sdata?.name}</td>
                                    <td>{Sdata?.price} : Lakh</td>
                                    <td>{Sdata?.quentity}</td>
                                    <td>{Sdata?.suppliername}</td>
                                    <td> <button className='edit-button'>edit</button></td>
                                    <td> <button onClick={()=> deleteFun(Sdata._id)} className='delete-button'>X</button></td>
                                </tr>)
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageData;