import React from 'react'

function Stories() {
    return (
        <div>
            <div className="hidden sm:block relative w-full bg-gray-300">
                <div className="text-center px-4 py-2 sm:px-6 lg:px-8">
                    <span className="font-semibold font-serif text-red-400 tracking-wider sm:text-2xl text-md ">MARKET STORIES</span>
                </div>
            </div>
            <div className="sm:hidden relative w-full bg-blue-950">
                <div className="text-center px-4 py-2 sm:px-6 lg:px-8">
                    <span className="font-semibold font-serif text-white tracking-wider sm:text-2xl text-md ">MARKET STORIES</span>
                </div>
            </div>
            <div className=" grid grid-cols-1 gap-6 bg-white p-5">
                {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="mx-auto sm:w-[250px] w-full rounded-md border-2">
                        <img
                            src="https://images.unsplash.com/photo-1491554150239-a9062e24de5c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Laptop"
                            className="h-[150px] w-full rounded-t-md object-cover"
                        />
                        <div className="p-4">
                            <h6 className="mt-1 font-medium">The Coldest Sunset</h6>
                            <p className="mt-1 text-sm text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stories