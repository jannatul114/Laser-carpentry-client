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
                        <p className='text-xl mt-4'>Educational background: <span className='text-orange-500 font-bold'>Class 8</span></p>
                        <button class="block mt-8 mx-auto md:mx-0 text-1xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400">Download Resume</button>
                    </div>
                </div>
            </section>


            <div>
                <h1 className='text-center text-orange-600 font-bold text-4xl'>My Skills</h1>
                <div class="blogs__wraper py-20 px-10">
                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                        <div className='blogs bg-base-200 shadow-lg mr-5 p-2 border-secondary'>
                            <h1 className='text-2xl font-bold text-orange-500 text-center mb-5'>Front-End</h1>
                            <div className='flex justify-center'>
                                <div>
                                    <p>HTML: <progress class="progress   progress-warning w-56" value="90" max="100"></progress></p>
                                    <p>CSS: <progress class="progress   progress-warning w-56" value="80" max="100"></progress></p>
                                    <p>JS: <progress class="progress   progress-warning w-56" value="50" max="100"></progress></p>
                                    <p>React: <progress class="progress   progress-warning w-56" value="50" max="100"></progress></p>
                                </div>
                            </div>
                        </div>
                        <div className='blogs  bg-base-200 shadow-lg mr-5 p-2'>
                            <h1 className='text-2xl font-bold text-orange-500 text-center mb-5'>Backend</h1>
                            <div className='flex justify-center'>
                                <div>
                                    <p>Mongodb: <progress class="progress   progress-warning w-56" value="45" max="100"></progress></p>
                                    <p>Express: <progress class="progress   progress-warning w-56" value="33" max="100"></progress></p>
                                    <p>Node: <progress class="progress   progress-warning w-56" value="35" max="100"></progress></p>
                                    <p>JS: <progress class="progress   progress-warning w-56" value="35" max="100"></progress></p>
                                </div>
                            </div>
                        </div>
                        <div className='blogs  bg-base-200 shadow-lg mr-5 p-2'>
                            <h1 className='text-2xl font-bold text-orange-500 text-center mb-5'>Frameworks</h1>
                            <div className='flex justify-center'>
                                <div>
                                    <p>Tailwind: <progress class="progress   progress-warning w-56" value="85" max="100"></progress></p>
                                    <p>Bootstrap: <progress class="progress   progress-warning w-56" value="99" max="100"></progress></p>
                                    <p>DaisyUi: <progress class="progress   progress-warning w-56" value="35" max="100"></progress></p>
                                    <p>Material-UI: <progress class="progress   progress-warning w-56" value="35" max="100"></progress></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div>
                <h1 className='text-center text-4xl text-orange-500 font-bold my-3'>My projects</h1>

                <div>
                    <div className='flex justify-center m-3'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                            <div class="card w-80 bg-base-100 shadow-xl">
                                <figure><img src="https://i.ibb.co/GQsN1gZ/project-ssss.png" alt="Shoes" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title">Photographic Place</h2>
                                    <p>An Independent service providers website</p>
                                    <div className='flex'>
                                        <a href="https://github.com/jannatul114/photographic-place" target='_blank'><span className='badge badge-warning'>Github</span></a>
                                        <a href="https://photographic-place.web.app/" target='_blank'><span className='ml-3 badge badge-warning'>Livelink</span></a>
                                    </div>

                                </div>
                            </div>
                            <div class="card w-80 bg-base-100 shadow-xl">
                                <figure><img src="https://i.ibb.co/vvGHGfw/project-ssss-2.png" alt="Shoes" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title">Fruits Valley</h2>
                                    <p>Warehouse management website</p>
                                    <div className='flex'>
                                        <a href="https://github.com/jannatul114/warehouse-management" target='_blank'><span className='badge badge-warning'>client</span></a>
                                        <a href="https://github.com/jannatul114/warehouse-management-server" target='_blank'><span className='badge badge-warning ml-3'>server</span></a>
                                        <a href="https://fruits-valley.web.app/" target='_blank'><span className='ml-3 badge badge-warning'>Livelink</span></a>
                                    </div>

                                </div>
                            </div>
                            <div class="card w-80 bg-base-100 shadow-xl">
                                <figure><img src="https://i.ibb.co/0J1PBdF/project-ssss-3.png" alt="Shoes" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title">Todo-app</h2>
                                    <p>Simple todo app with server</p>
                                    <div className='flex'>
                                        <a href="https://github.com/jannatul114/todo-app-client-side" target='_blank'><span className='badge badge-warning'>Github</span></a>
                                        <a href="https://github.com/jannatul114/todo-app-server-side" target='_blank'><span className='badge badge-warning ml-3'>Server</span></a>
                                        <a href="https://todo-app-client-side.web.app/" target='_blank'><span className='ml-3 badge badge-warning'>Livelink</span></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default MyPortfolio;