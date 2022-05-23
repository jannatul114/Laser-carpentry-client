import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import ItemDetails from './ItemDetails';

const Purchase = () => {
    const { id } = useParams();
    const [item, setItem] = useState([])
    const url = `https://fierce-sands-20967.herokuapp.com/tools/${id}`
    useEffect(() => {
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item])
    return (
        <div>
            <h2 className='text-center text-4xl text-orange-500 font-bold my-5'>You are booking for: </h2>
            <div>

                {
                    item?.img ? <ItemDetails item={item} /> : <Loading />
                }
            </div>
        </div>
    );
};

export default Purchase;