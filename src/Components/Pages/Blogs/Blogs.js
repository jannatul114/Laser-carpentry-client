import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center text-4xl text-orange-500 font-bold my-3'>Our Blogs</h1>

            <div class="blogs__wraper py-20 px-10">

                <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">

                    <div class="blogs bg-orange-200 mr-5">

                        <div class="p-5">
                            <h1 class="text-2xl font-bold text-green-800 py-3">How will you improve the performance of a React Application?</h1>
                            <p class="text-black">To Optimizing performance in a React application we should Keeping component state local where necessary, Memoize React components to prevent unnecessary re-renders, Code-splitting in React using dynamic import. We can use also Lazy loading images in React.</p>

                        </div>
                    </div>


                    <div class="blogs bg-orange-200 mr-5">

                        <div class="p-5">
                            <h1 class="text-2xl font-bold text-green-800 py-3">What are the different ways to manage a state in a React application?</h1>
                            <p class="text-md text-black">There are many ways to manage react state. Some of then are: Local state, Global state, Server state, URL state</p>


                        </div>
                    </div>

                    <div class="blogs bg-orange-200 mr-5">

                        <div class="p-5">
                            <h1 class="text-2xl font-bold text-green-800 py-3">How does prototypical inheritance work?</h1>
                            <p class=" text-black">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. In prototypical inheritance, you can define properties inside the function and attact methods to te prototype of the function  </p>
                        </div>
                    </div>
                    <div class="blogs bg-orange-200 mr-5">

                        <div class="p-5">
                            <h1 class="text-2xl font-bold text-green-800 py-3">Why you do not set the state directly in React?</h1>
                            <p class=" text-black">We should never set a state directly. Because if we do we won't be able to modify it the way we would be. If you set it directly, calling setProducts() later to update, may not replace the update you made. This will cause us to lose control of that state.</p>
                        </div>
                    </div>
                    <div class="blogs bg-orange-200 mr-5">

                        <div class="p-5">
                            <h1 class="text-2xl font-bold text-green-800 py-3">What is a unit test? Why should write unit tests?</h1>
                            <p class=" text-black">The A unit test is a software testing method to test individual units of source code to determine if they are all good to be used. We use unit testing because by Unit testing we ensure that our code is quality standard to be deployed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;