import React from 'react';

const MyPortfolio = () => {
    return (
        <div>

            <section class="max-h-full bg-white p-6 grid">

                <nav class="w-full grid justify-end">
                    <ul class="hidden md:flex space-x-8 font-bold text-gray-700">
                        <li><a href="#">Works</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div class="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-700 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </nav>


                <div class="container mx-auto mt-5 md:mt-0 md:space-x-10 md:grid grid-cols-2 justify-center md:py-35">
                    <div class="grid justify-center items-center order-1 col-span-1">
                        <img class="lg:h-96 w-96 md:h-64 h-40 rounded-full" src="https://img.freepik.com/free-photo/portrait-young-beautiful-businesswoman_53419-3859.jpg?size=626&ext=jpg&ga=GA1.2.1414048673.1648368713" alt="" />
                    </div>
                    <div class="mt-8 md:mt-0 lg:justify-end col-span-1">
                        <h1 class="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">Hi, I am Mithila, Junior web-developer</h1>
                        <p class="text-xl text-gray-800 text-center md:text-left">Hello there, I am Jannatul ferdaous mithila. learning web-development over 5+ months. And I know well about HTML, CSS, Javascript, Bootstrap, tailwing, mongodb etc </p>
                        <button class="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400">Download Resume</button>
                    </div>
                </div>
            </section>
            <div className='my-5 flex justify-center'>
                <div >
                    <h1 className='text-center text-orange-500 text-4xl'>My Skills</h1>
                </div>
            </div>




        </div>
    );
};

export default MyPortfolio;