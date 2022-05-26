import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const Tools = () => {
    const [tools, setTools] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const url = `https://fierce-sands-20967.herokuapp.com/tools`;
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                if (data?.length >= 6) {
                    const newTools = data.slice(0, 6);
                    setTools(newTools)
                }
                else {
                    setTools(data)
                }
            })

    }, [])


    const handlePurchase = (id) => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div>
            <h1 className='text-center text-orange-500 my-6 text-5xl font-bold'>Our Tools</h1>
            <div className='flex justify-center'>
                {
                    tools[0]?.img ? <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 '>
                        {
                            tools.map(tool =>
                                <div data-aos="fade-up" className=''>
                                    <div class="card w-80 min-h-96 bg-base-100 shadow-xl m-3 p-2 border-2 border-orange-400">
                                        <figure className=''>
                                            <img src={tool.img} className='h-28' alt="Shoes" />
                                        </figure>
                                        <div class="card-body">
                                            <h2 class="card-title text-3xl">
                                                {tool.name}

                                            </h2>
                                            <div class="badge bg-orange-400 text-lg p-3 my-2">price: ${tool.price}</div>
                                            <p>{tool.description}</p>
                                            <div class="card-actions justify-start gap-2">
                                                <div class=" text-xl">quantity: ${tool.quantity}</div>
                                                <div class=" text-xl">minimun order: ${tool.order}</div>
                                            </div>
                                            <button onClick={() => handlePurchase(tool._id)} className='w-ful btn bg-orange-500'>Book Now!</button>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </div> : <Loading />
                }
            </div>
        </div>
    );
};

export default Tools;