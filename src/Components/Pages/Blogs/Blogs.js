import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center text-4xl text-orange-500 font-bold my-3'>Our Blogs</h1>

            <div class="blogs__wraper py-20 px-10">

                <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">

                    <div class="blogs bg-orange-200 mr-5">

                        <div class="p-5">
                            <h1 class="text-2xl font-bold text-green-800 py-2">Lorem ipsum dolor sit amet</h1>
                            <p class=" text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis vitae qui distinctio ex soluta? Voluptates, ea! Esse, natus. Quas possimus laboriosam consectetur deserunt ea sapiente. Dicta ipsam atque voluptatem provident!</p>
                            <a href="" class="py-2 px-3 mt-4 px-6 text-white bg-green-500 inline-block rounded">Read More</a>
                        </div>
                    </div>


                    <div class="blogs bg-orange-200 mr-5">

                        <div class="p-5">
                            <h1 class="text-2xl font-bold text-green-800 py-2">Lorem ipsum dolor sit amet</h1>
                            <p class=" text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis vitae qui distinctio ex soluta? Voluptates, ea! Esse, natus. Quas possimus laboriosam consectetur deserunt ea sapiente. Dicta ipsam atque voluptatem provident!</p>
                            <a href="" class="py-2 px-3 mt-4 px-6 text-white bg-green-500 inline-block rounded">Read More</a>
                        </div>
                    </div>

                    <div class="blogs bg-orange-200 mr-5">

                        <div class="p-5">
                            <h1 class="text-2xl font-bold text-green-800 py-2">Lorem ipsum dolor sit amet</h1>
                            <p class=" text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis vitae qui distinctio ex soluta? Voluptates, ea! Esse, natus. Quas possimus laboriosam consectetur deserunt ea sapiente. Dicta ipsam atque voluptatem provident!</p>
                            <a href="" class="py-2 px-3 mt-4 px-6 text-white bg-green-500 inline-block rounded">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;