import React from 'react'

function Discussion() {
    return (
        <div >
            <div className="hidden sm:block relative w-full bg-gray-300">
                <div className="text-center px-4 py-2 sm:px-6 lg:px-8">
                    <span className="font-semibold font-serif text-red-400 tracking-wider sm:text-2xl text-md ">DISSCUSSION FOURM</span>
                </div>
            </div>
            <div className="sm:hidden relative w-full bg-blue-900">
                <div className="text-center px-4 py-2 sm:px-6 lg:px-8">
                    <span className="font-semibold font-serif text-white tracking-wider sm:text-2xl text-md ">DISSCUSSION FOURM</span>
                </div>
            </div>
            <div className=" grid grid-cols-1 gap-6 p-4 sm:px-20">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="mx-auto w-max rounded-lg p-1 border inline-flex bg-white cursor-pointer transition ease-in-out duration-500 hover:shadow-2xl hover:scale-105">
                        <img
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                            alt="Laptop"
                            className="rounded-full w-10 h-10 object-cover sm:m-4 m-2"
                        />
                        <div className="p-3">
                            <h1 className="inline-flex justify-between w-full">
                                <p className="sm:text-lg text-md font-semibold w-max" >Lorem Ipsum
                                    <span className='sm:text-xs text-xs mx-3 text-white bg-blue-900 rounded-2xl sm:px-4 px-2 sm:py-1 py-0.5'>Sector 2</span>
                                </p>

                                <p className='text-xs text-blue-700'>2 min ago</p>
                            </h1>
                            <p className="py-3 pe-1 text-sm sm:max-w-lg max-w-xs text-gray-600">
                                Lorem Lorem ipsum dolor sit, amet nihil laudantium maiores itaque. ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                            </p>
                            <div className="flex flex-wrap justify-between max-w-md">
                                <div className="w-auto p-1.5 inline-flex items-center">
                                    <a href="#">
                                        <div className="flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-5' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                        </div>
                                    </a>
                                    <span className='font-semibold sm:text-sm text-xs sm:px-2 px-1'>2K</span>
                                </div>
                                <div className="w-auto p-1.5 inline-flex items-center">
                                    <a href="#">
                                        <div className="flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                        </div>
                                    </a>
                                    <span className='font-semibold sm:text-sm text-xs sm:px-2 px-1'>2K</span>
                                </div>
                                <div className="w-auto p-1.5 inline-flex items-center">
                                    <a href="#">
                                        <div className="flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                        </div>
                                    </a>
                                    <span className='font-semibold sm:text-sm text-xs sm:px-2 px-1'>2K Comments</span>
                                </div>
                                <div className="w-auto p-1.5 inline-flex items-center">
                                    <a href="#">
                                        <div className="flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share-2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                        </div>
                                    </a>
                                    <span className='font-semibold sm:text-sm text-xs sm:px-2 px-1'>Share</span>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Discussion