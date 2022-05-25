import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { data: updatedUser, isLoading, refetch } = useQuery(['dbuser'], () => fetch(`http://localhost:5000/users/${user.email}`).then(res =>
        res.json())
    )

    console.log(updatedUser);

    if (isLoading) {
        return <Loading />
    }
    const handleEditUser = event => {
        event.preventDefault()
        const email = user.email || updatedUser?.email || '';
        const name = event.target.name.value || updatedUser.name || '';
        const education = event.target.education.value || updatedUser.education || '';
        const phone = event.target.phone.value || updatedUser.phone || '';
        const linkedin = event.target.linkedin.value || updatedUser.linkedin || '';
        const city = event.target.city.value || updatedUser.city || '';
        const users = { name, email, education, city, phone, linkedin };

        fetch(`http://localhost:5000/users/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                toast.success('successfully updated')

            })

    }



    return (
        <div>
            <div class="container mx-auto mt-12 md:mt-12 md:space-x-10 md:grid grid-cols-2 justify-center md:py-35">
                <div className='flex justify-center items-center'>
                    <div class="card w-96 min-h-52 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class=" text-3xl">Name: {updatedUser?.name ? updatedUser.name : user.displayName || user.name}</h2>
                            <p className=''><span className='text-orange-400 font-bold'>email: </span>{user?.email}</p>

                            <p><span className='text-orange-400 font-bold'>city: </span>{updatedUser?.city ? updatedUser.city : 'Not Available'}</p>
                            <p><span className='text-orange-400 font-bold'>education: </span>{updatedUser?.education ? updatedUser.education : 'Not Available'}</p>
                            <p><span className='text-orange-400 font-bold'>phone: </span>{updatedUser?.phone ? updatedUser.phone : 'Not Available'}</p>
                            <p><span className='text-orange-400 font-bold'>linkedin: </span>{updatedUser?.linkedin ? updatedUser.linkedin : 'Not Available'}</p>
                        </div>
                    </div>
                </div>
                <div class="mt-8 md:mt-0 lg:justify-end col-span-1">
                    <h1 class="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">Edit Profile</h1>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-3 border-2 border-gray-500 ">
                        <form onSubmit={handleEditUser}>
                            <div class="card-body">

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Education</span>
                                    </label>
                                    <input type="text" name='education' placeholder="education" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">city</span>
                                    </label>
                                    <input type="text" placeholder="city" name='city' class="input input-bordered" />

                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Phone</span>
                                    </label>
                                    <input type="number" placeholder="Phone" name='phone' class="input input-bordered" />

                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Linkedin</span>
                                    </label>
                                    <input type="text" placeholder="linkedin" name='linkedin' class="input input-bordered" />

                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Update</button>
                                </div>


                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;