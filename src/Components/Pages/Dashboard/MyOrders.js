import { faRemove, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/orders?email=${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    console.log(orders);
    return (
        <div>
            {
                orders?.length === 0 ? <h1 className='text-center mt-12 text-4xl font-bold'>No Orders yet</h1> : <div class="overflow-x-auto">
                    <div className='flex justify-center'>
                        <table class="table ml-7">
                            <thead>
                                <tr>
                                    <th>1</th>
                                    <th>Name</th>
                                    <th>tools</th>
                                    <th>Quantity</th>
                                    <th>Email</th>
                                    <th>payment</th>
                                    <th>price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    orders?.map(order => <tr>
                                        <th>{1}</th>
                                        <td>{order?.name}</td>
                                        <td>{order?.tool}</td>
                                        <td>{order?.order}</td>
                                        <td>{order?.email}</td>
                                        <td>{order?.price}</td>
                                        <td>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}> <button className='btn btn-xs btn-success'>pay</button></Link>}

                                            {(order.price && order.paid) && <span className='text-success'>paid</span>}</td>

                                        <td><FontAwesomeIcon icon={faTrashCan} /></td>
                                    </tr>

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

export default MyOrders;