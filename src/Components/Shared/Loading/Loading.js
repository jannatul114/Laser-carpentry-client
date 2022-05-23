import React from 'react';
import loader from '../../../images/loading.gif';
const Loading = () => {
    return (
        <div className='flex justify-center'>
            <div className='w-80 h-80'>
                <img src={loader} className='' alt="" />
            </div>
        </div>
    );
};

export default Loading;