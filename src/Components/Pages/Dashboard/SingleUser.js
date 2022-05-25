import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';

const SingleUser = ({ refetch, user, index }) => {
    const { role, email } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                res.json()
            })
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('successfully make an admin!')
                    refetch()
                }
            })
    }
    return (
        <tr>
            <td ></td>
            <td>{user?.name || user.displayName}</td>
            <td>{user?.email}</td>
            <td>
                <div>
                    {user.role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs bg-green-600 ml-4'>Make Admin</button>}
                </div>
            </td>
            <td> <button className='btn btn-xs bg-red-500 ml-4'><FontAwesomeIcon icon={faTrashCan} /></button></td>
        </tr>
    );
};

export default SingleUser;