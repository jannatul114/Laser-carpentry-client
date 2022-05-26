import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const SingleUser = ({ refetch, user, index }) => {
    const { role, email } = user;

    const makeAdmin = () => {
        fetch(`https://fierce-sands-20967.herokuapp.com/users/admin/${email}`, {
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
                refetch()
                if (data?.modifiedCount > 0) {
                    toast.success('successfully make an admin!')

                }
            })
    }

    const handleDeleteUsers = (id) => {
        console.log(id);
        swal({
            title: "Are you sure you want to delete user?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("successfully deleted", {
                        icon: "success",
                    });

                    fetch(`https://fierce-sands-20967.herokuapp.com/users/${id}`, {
                        method: 'DELETE',
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            refetch()
                        })
                } else {

                }
            });
    }
    return (
        <tr>
            <td >{index + 1}</td>

            <td>{user?.email}</td>
            <td>
                <div>
                    {user.role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs bg-green-600 ml-4'>Make Admin</button>}
                </div>
            </td>
            <td><button className='btn btn-xs bg-red-500 ml-4'><FontAwesomeIcon onClick={() => handleDeleteUsers(user._id)} icon={faTrashCan} /></button></td>
        </tr>
    );
};

export default SingleUser;