import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import swal from 'sweetalert';

const ManageSingleOrder = ({ refetch, orders, index }) => {
    const { name, price, order, _id } = orders;

    const handleDeleteOrders = id => {
        swal({
            title: "Are you sure you want to delete?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/manageorder/${id}`, {
                        method: 'DELETE',
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            refetch()
                            swal({
                                title: "Tool successfully deleted",
                                icon: "success",
                            })
                        })
                } else {

                }
            });



    }
    return (
        <tr className='border border-slate-600'>
            <td className='border border-slate-600'>{index + 1}</td>

            <td className='border border-slate-600'>{name}</td>
            <td className='border border-slate-600'>{price}</td>
            <td className='border border-slate-600'>{order}</td>
            <td className='border border-slate-600'> <button onClick={() => handleDeleteOrders(_id)} className='btn btn-xs bg-red-500 ml-4'><FontAwesomeIcon icon={faTrashCan} /></button></td>
        </tr>

    );
};

export default ManageSingleOrder;