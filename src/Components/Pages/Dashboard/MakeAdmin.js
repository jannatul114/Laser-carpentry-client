import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SingleUser from './SingleUser';

const MakeAdmin = () => {
    const [user] = useAuthState(auth);
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/users`, {
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
                users?.length === 0 ? <h1 className='text-center mt-12 text-4xl font-bold'>No Orders yet</h1> : <div class="overflow-x-auto">
                    <div className='flex justify-center'>
                        <table class="table ml-7">
                            <thead>
                                <tr>
                                    <th className='text-center'>1</th>
                                    <th className='text-center'>Email</th>
                                    <th className='text-center'>role</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    users?.map((user, index) => <SingleUser user={user} key={user._id} index={index} refetch={refetch}></SingleUser>

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

export default MakeAdmin;