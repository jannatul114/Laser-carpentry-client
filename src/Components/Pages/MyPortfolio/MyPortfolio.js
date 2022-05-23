import React from 'react';

const MyPortfolio = () => {
    return (
        <div>

            <section class="max-h-full bg-white p-6 grid">


                <div class="container mx-auto mt-12 md:mt-12 md:space-x-10 md:grid grid-cols-2 justify-center md:py-35">
                    <div class="grid justify-center items-center order-1 col-span-1">
                        <img class="lg:h-96 w-96 md:h-64 h-40 rounded-full" src="https://img.freepik.com/free-photo/portrait-young-beautiful-businesswoman_53419-3859.jpg?size=626&ext=jpg&ga=GA1.2.1414048673.1648368713" alt="" />
                    </div>
                    <div class="mt-8 md:mt-0 lg:justify-end col-span-1">
                        <h1 class="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">Hi, I am Mithila, Junior web-developer</h1>
                        <p class="text-xl text-gray-800 text-center md:text-left">Hello there, I am Jannatul ferdaous mithila. learning web-development over 5+ months. And I know well about HTML, CSS, Javascript, Bootstrap, tailwing, mongodb etc </p>
                        <button class="block mt-8 mx-auto md:mx-0 text-1xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400">Download Resume</button>
                    </div>
                </div>
            </section>


            <div class="container mx-auto mt-12 md:mt-12 md:space-x-10 md:grid grid-cols-2 justify-center md:py-35">
                <div className='flex justify-center'>
                    <div >
                        <h1 className='text-4xl text-orange-600 text-center mb-5'>My Skills</h1>
                        <p>HTML: <progress class="progress progress-warning w-56" value="90" max="100"></progress></p>
                        <p>CSS: <progress class="progress progress-warning w-56" value="80" max="100"></progress></p>
                        <p>JS: <progress class="progress progress-warning w-56" value="80" max="100"></progress></p>

                        <p>bootstrap: <progress class="progress progress-warning w-56" value="90" max="100"></progress></p>
                        <p>Tailwind: <progress class="progress progress-warning w-56" value="50" max="100"></progress></p>
                        <p>React: <progress class="progress progress-warning w-56" value="50" max="100"></progress></p>
                        <p>React: <progress class="progress progress-warning w-56" value="40" max="100"></progress></p>

                    </div>
                </div>
                <div class="mt-8 md:mt-0 lg:justify-end col-span-1">
                    <h1 class="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">My Education</h1>
                    <p class="text-xl text-gray-800 text-center md:text-left">I am in class 8 in Hollyhock school ang college</p>

                </div>
            </div>






        </div>
    );
};

export default MyPortfolio;