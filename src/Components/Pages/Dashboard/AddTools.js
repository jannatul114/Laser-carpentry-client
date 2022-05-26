import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddTools = () => {
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit } = useForm();


    const imgKey = '0ec541e48a677692bf1fb48cf5ed3edb';

    const onToolSubmit = handleSubmit(async (data, event) => {
        console.log('data', data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const tools = {
                        name: data.name,
                        email: data.email,
                        img: img,
                        price: JSON.parse(data.price),
                        order: JSON.parse(data.order),
                        quantity: JSON.parse(data.quantity),
                        description: data.description
                    }
                    fetch(`http://localhost:5000/tools`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(tools)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success('successfully added')
                            event.target.reset()
                        })
                }

            })

    });

    return (
        <div>
            <form onSubmit={onToolSubmit} className='lg:w-1/2 w-full mx-auto shadow-lg p-4 rounded-xl bg-white'>
                <h1 className="text-3xl font-bold pb-3 text-center text-orange-400">Add Tools</h1>
                <div className=''>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" value={user?.email} readOnly {...register("email")} className="input input-bordered w-full" />
                    </div>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Tools Name</span>
                    </label>

                    <input type="text" placeholder=" Tool Name" {...register("name", { required: true })} className="input input-bordered w-full" />

                    <label className="label">
                        <span className="label-text-alt text-error">{errors.ToolsName?.type === 'required' && "Tools Name is required"}</span>
                    </label>
                </div>

                <div className="form-control w-full">
                    <div className='lg:flex justify-between'>
                        <div>
                            <label className="label">
                                <span className="label-text">minimun order Quantity</span>
                            </label>

                            <input type="number" placeholder="minimum order" {...register("order", { required: true })} className="input input-bordered w-full" />

                            <label className="label">
                                <span className="label-text-alt text-error">{errors.order?.type === 'required' && "order is required"}</span>
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>

                            <input type="number" placeholder="Available Quantity" {...register("quantity", { required: true })} className="input input-bordered w-full" />

                            <label className="label">
                                <span className="label-text-alt text-error">{errors.quantity?.type === 'required' && "Quantity is required"}</span>
                            </label>
                        </div>

                    </div>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>

                    <textarea type="text" placeholder="tool description" {...register("description", { required: true })} className="textarea textarea-bordered w-full" />

                    <label className="label">
                        <span className="label-text-alt text-error">{errors.ToolsName?.type === 'required' && "Tools Name is required"}</span>
                    </label>
                </div>


                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>

                    <input type="number"  {...register("price", {
                        required: true,


                    })} className="input input-bordered w-full" />

                    <label className="label">
                        <span className="label-text-alt text-error">
                            {errors.price?.type === 'required' && "price Quantity is required"}
                            {errors?.price?.message}
                        </span>
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Tool Image</span>
                    </label>
                    <input type="file" readOnly {...register("image", {
                        required: {
                            value: true,
                            message: 'Image Require'
                        }
                    })} className="input input-bordered w-full" />
                    <label className="label">
                        <span className="label-text-alt text-error">
                            {errors.image?.type === 'required' && "Order Quantity is required"}
                            {errors?.image?.message}
                        </span>
                    </label>
                </div>

                <input type="submit" disabled={errors?.order} className="btn w-full btn-primary" value="Purchase" />

            </form>
        </div>
    );
};

export default AddTools;