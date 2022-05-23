import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../../images/not-found.gif';
const NotFound = () => {
    return (
        <>
            <div className='flex justify-center items-center '>
                <img src={notfound} alt="" />
            </div>
            <div className='flex justify-center'>
                <Link to={'/home'}><button className='btn btn-outline'>Go Home</button></Link>
            </div>
        </>
    );
};

export default NotFound;