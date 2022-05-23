import { faRemove, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/orders?email=${user.email}`).then(res => res.json()));

    console.log(orders);
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <div className='flex justify-center'>
                    <table class="table ml-7">
                        <thead>
                            <tr>
                                <th>1</th>
                                <th>Name</th>
                                <th>tools</th>
                                <th>Quantity</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                orders?.map(order => <tr>
                                    <th>{1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.tool}</td>
                                    <td>{order.order}</td>
                                    <td>{order.email}</td>
                                    <td><FontAwesomeIcon icon={faTrashCan} /></td>
                                </tr>

                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyOrders;