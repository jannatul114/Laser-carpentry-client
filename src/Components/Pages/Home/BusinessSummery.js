import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faThumbsUp, faUsers, faLaptop } from '@fortawesome/free-solid-svg-icons'


const BusinessSummery = () => {
    return (
        <div>

            <section class="bg-white dark:bg-gray-900">
                <div class="container px-6 py-10 mx-auto">
                    <h1 class="text-3xl font-semibold text-orange-500 capitalize lg:text-5xl dark:text-white text-center ">Millions bussiness trust us <br /> </h1>
                    <h1 class="text-xl font-semibold text-gray-500 capitalize lg:text-xl dark:text-white text-center my-4">Try to understand users Expectations <br /> </h1>

                    <div class="mt-2">
                        <span class="inline-block w-40 h-1 rounded-full text-orange-300 "></span>
                        <span class="inline-block w-3 h-1 ml-1 rounded-full text-orange-300 "></span>
                        <span class="inline-block w-1 h-1 ml-1 rounded-full text-orange-300 "></span>
                    </div>

                    <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
                        <div data-aos="fade-right" class="w-full lg:w-1/2 grid grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2">
                            <div class="space-y-4 bg-orange-100 p-4 rounded-3xl">
                                <div className='flex justify-center'>
                                    <span class="inline-block p-5 text-6xl text-orange-500 bg-orange-200 rounded-xl dark:text-white dark:text-orange-300 ">
                                        <FontAwesomeIcon icon={faFlag} />
                                    </span>
                                </div>
                                <div className='flex justify-center'>
                                    <div>
                                        <h1 class="text-5xl font-semibold text-gray-700 capitalize dark:text-white ">79+</h1>

                                        <p class="text-gray-500 dark:text-gray-300 text-center">
                                            Countries
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-3 bg-orange-100 p-4 rounded-3xl">
                                <div className='flex justify-center'>
                                    <span class="inline-block p-5 text-6xl text-orange-500 bg-orange-200 rounded-xl dark:text-white dark:text-orange-300 ">
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                    </span>
                                </div>
                                <div className='flex justify-center'>
                                    <div>
                                        <h1 class="text-5xl font-semibold text-gray-700 capitalize dark:text-white ">654+</h1>

                                        <p class="text-gray-500 dark:text-gray-300 text-center">
                                            Feedbacks
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div class="space-y-3 bg-orange-100 p-4 rounded-3xl">
                                <div className='flex justify-center'>
                                    <span class="inline-block p-5 text-6xl text-orange-500 bg-orange-200 rounded-xl dark:text-white dark:text-orange-300 ">
                                        <FontAwesomeIcon icon={faUsers} />
                                    </span>
                                </div>
                                <div className='flex justify-center'>
                                    <div>
                                        <h1 class="text-5xl font-semibold text-gray-700 capitalize dark:text-white ">743+</h1>

                                        <p class="text-gray-500 dark:text-gray-300 text-center">
                                            Happy Clients
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-3 bg-orange-100 p-4 rounded-3xl">
                                <div className='flex justify-center'>
                                    <span class="inline-block p-5 text-6xl text-orange-500 bg-orange-200 rounded-xl dark:text-white dark:text-orange-300 ">
                                        <FontAwesomeIcon icon={faLaptop} />
                                    </span>
                                </div>
                                <div className='flex justify-center'>
                                    <div>
                                        <h1 class="text-5xl font-semibold text-gray-700 capitalize dark:text-white ">543+</h1>

                                        <p class="text-gray-500 dark:text-gray-300 text-center">
                                            Complete projects
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="hidden lg:flex lg:w-1/2 lg:justify-center mask mask-hexagon ">
                            <img class="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://unitedsilicone.com/wp-content/uploads/2020/01/for-web-landing-page-power-tool-housings-790x680.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default BusinessSummery;