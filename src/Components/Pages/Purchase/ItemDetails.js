import React from 'react';

const ItemDetails = ({ item }) => {
    const { _id, name, img, quantity, order, description, price } = item;
    return (
        <div>

            <div>

                <div class="flex flex-col justify-center ">
                    <div
                        class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto  bg-white border-2 border-orange-400">
                        <div class="w-full md:w-1/3 bg-white grid place-items-center">
                            <img src={img} alt="tailwind logo" class="rounded-xl" />
                        </div>
                        <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">

                            <h3 class="font-black text-gray-800 md:text-3xl text-xl">{name}</h3>
                            <p class="md:text-lg text-gray-500 text-base">{description}</p>
                            <p className=''><span className='font-bold'>price:</span> ${price}</p>
                            <p className=''><span className='font-bold'>Quantity:</span> ${quantity}</p>
                            <p className=''><span className='font-bold'>Minimum-order:</span> {price}</p>
                            <p className=''><span className='font-bold'>Product ID:</span> {price}</p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;