import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ManageSingleOrder from './ManageSingleOrder';

const ManageAllOrders = () => {
    const { data: allOrders, isLoading, refetch } = useQuery('manageAllOrder', () => fetch(`http://localhost:5000/manageorder`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            {
                allOrders?.length === 0 ? <h1 className='text-center mt-12 text-4xl font-bold'>No Tools yet</h1> : <div class="overflow-x-auto">
                    <div className='flex justify-center'>
                        <table class="table ml-7 border-collapse border border-slate-500">
                            <thead className='border-collapse border border-slate-500'>
                                <tr>
                                    <th className='text-center'>1</th>

                                    <th className='text-center'>Name</th>
                                    <th className='text-center'>Price</th>
                                    <th className='text-center'>Quantity</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='border-separate border border-slate-500'>

                                {
                                    allOrders?.map((order, index) => <ManageSingleOrder orders={order} key={order._id} index={index} refetch={refetch}></ManageSingleOrder>

                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            }

        </div>
    );
};

export default ManageAllOrders;