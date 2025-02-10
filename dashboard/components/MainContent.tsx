import React from 'react'

export default function MainContent() {
    return (
        <main className='w-full'>
            <div className="flex items-center justify-between px-4 py-4 border-b lg:py-6 w-full">
                <h1 className='text-2xl font-semibold'>Dashboard</h1>
                <a href="#" className='px-4 py-2 text-sm text-white rounded-md bg-primary hover:bg-[#0e7490] focus:outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offse-white'>View on github</a>
            </div>
            <div className="mt-2">
                <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-8 p-4">
                    <div className="flex items-center justify-between bg-white rounded-md p-4">
                        <div className="">
                            <h6 className='text-xs font-medium leading-none tracking-wider text-gray-500 uppercase'>Value</h6>
                            <span className='text-xl font-semibold'>$30,000</span>
                            <span className='inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md'>+4.4%</span>
                        </div>
                        <div className="">
                            <span>
                                <svg
                                    className="w-12 h-12 text-gray-300 dark:text-primary-dark"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between bg-white rounded-md p-4">
                        <div className="">
                            <h6 className='text-xs font-medium leading-none tracking-wider text-gray-500 uppercase'>Users</h6>
                            <span className='text-xl font-semibold'>$50,021</span>
                            <span className='inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md'>+2.6%</span>
                        </div>
                        <div className="">
                            <span>

                                <svg
                                    className="w-12 h-12 text-gray-300 dark:text-primary-dark"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between bg-white rounded-md p-4">
                        <div className="">
                            <h6 className='text-xs font-medium leading-none tracking-wider text-gray-500 uppercase'>Orders</h6>
                            <span className='text-xl font-semibold'>$45,000</span>
                            <span className='inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md'>+3.1%</span>
                        </div>
                        <div className="">
                            <span>
                                <svg
                                    className="w-12 h-12 text-gray-300 dark:text-primary-dark"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between bg-white rounded-md p-4">
                        <div className="">
                            <h6 className='text-xs font-medium leading-none tracking-wider text-gray-500 uppercase'>Tickets</h6>
                            <span className='text-xl font-semibold'>$20,000</span>
                            <span className='inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md'>+3.3%</span>
                        </div>
                        <div className="">
                            <span>
                                <svg
                                    className="w-12 h-12 text-gray-300 dark:text-primary-dark"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-3 p-4 space-y-8 lg:gap-8
                 lg:space-y-0">
                    <div className="col-span-2 bg-white rounded-md">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h4 className='text-lg font-smeibold text-gray-500'>Bar Chart</h4>
                            <div className="flex items-center space-x-2">
                                <span className='text-sm text-gray-500'>Last year</span>
                                <button className='relative focus:outline-none'>
                                    <div className="w-12 h-6 transition rounded-full outline-none bg-primary-100"></div>
                                    <div className="absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 bg-white shadow-sm rounded-full transition-all duration-200 translate-x-0"></div>
                                </button>
                            </div>
                        </div>
                        <div className="relative p-4 h-72">
                            Bar Chart
                        </div>
                    </div>

                    {/* Doughnut chart */}
                    <div className="bg-white rounded-md">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h4 className='text-lg font-semibold text-gray-500'>
                                Doughnut Chart
                            </h4>
                            <div className="flex items-center">
                                <button className='relative focus:outline-none'>
                                    <div className="w-12 h-6 transition rounded-full outline-none bg-primary-100"></div>
                                    <div className="absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 bg-white shadow-sm rounded-full transition-all duration-200 translate-x-0"></div>
                                </button>
                            </div>
                        </div>
                        <div className="relative p-4 h-72">
                            Doughnut chart
                        </div>
                    </div>
                 </div>
                 {/* Two grid columns */}
                 <div className="grid lg:grid-cols-3 grid-cols-1 p-4 space-y-8 lg:gap-8 lg:space-y-0">
                    <div className="col-span-1 bg-white rounded-md">
                        <div className="p-4 border-b">
                            <h4 className='text-lg font-semibold text-gray-500'>Active users right now</h4>
                        </div>
                        <p className='p-4'>
                            <span className='text-2xl font-medium text-gray-500'>0</span>
                            <span className='text-sm font-medium text-gray-500 ml-1'>Users</span>
                        </p>
                        <div className="relative p-4 h-52">
                            Chart
                        </div>
                    </div>

                    {/* Line chart  */}
                    <div className="col-span-2 bg-white rounded-md">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h4 className='text-lg font-semibold text-gray-500'>Line Chart</h4>
                            <div className="flext items-center">
                                <button className='relative focus:outline-none'>
                                    <div className="w-12 h-6 transition rounded-full outline-none bg-primary-100"></div>
                                    <div className="absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 bg-white shadow-sm rounded-full transition-all duration-200 translate-x-0"></div>
                                </button>
                            </div>
                        </div>
                        <div className="relative p-4 h-52">
                            Line Chart
                        </div>
                    </div>
                 </div>
            </div>
        </main>
    )
}
