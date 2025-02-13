import React from 'react'

export default function RegisterUser() {
    return (
        <>
            {/* <div className="fixed inset-0 z-50 flex items-center justify-center text-2xl font-semibold bg-primary-darker text-white">Loading...</div> */}
            <div className='bg-gray-100 text-gray-900 min-h-screen p-4 space-y-4 flex flex-col items-center justify-center'>
                <a href="#" className='inline-block mb-6 text-3xl font-bold tracking-wider uppercase text-primary-dark'>Dashboard</a>
                <main className='w-full'>
                    <div className="w-full mx-auto max-w-sm bg-white px-4 py-6 rounded-md space-y-6">
                        <h1 className='text-xl font-semibold text-center'>Register</h1>
                        <form action="#" className='space-y-6'>
                            <input type="text" className='w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-primary-100' name="username" placeholder='Username' required />
                            <input type="email" className='w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-primary-100' 
                            name="email" placeholder='Email address' required />
                            <input type="password" className='w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-primary-100' name="password" placeholder='Password' required />
                            <input type="password" className='w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-primary-100'
                                name="confirm_password" placeholder='Confirm Password' required />
                            <div className="flex items-center justify-between">
                                {/* Remember toggle */}
                                <label htmlFor="" className='flex items-center'>
                                    <div className="relative inline-flex items-center">
                                        <input type="checkbox" name="accept_terms" className='w-10 h-4 transition bg-gray-200 border-non shadow-inner outline-none appearance-none focus:outline-none rounded-full checked:bg-primary-light disabled:bg-gray-200' />
                                        <span className='absolute top-0 left-0 w-4 h-4 transition-all transform scale-150 bg-white rounded-full shadow-sm'>
                                        </span>
                                    </div>
                                    <span className='ml-3 text-sm font-normal text-gray-500'>
                                        I accept the <a href="#" className='text-sm text-blue-600 hover:underline'>Terms and Conditions</a>
                                    </span>
                                </label>
                            </div>
                            <div className="">
                                <button type='submit' className='w-full px-4 py-3 font-medium text-center text-white transition-colors duration-200 rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1'>
                                    Register
                                </button>
                            </div>
                        </form>

                        {/* or */}
                        <div className="flex items-center justify-center space-x-2 flex-nowrap">
                            <span className='w-20 h-px bg-gray-300'></span>
                            <span>OR</span>
                            <span className='w-20 h-px bg-gray-300'></span>
                        </div>

                        {/* Social links */}
                        <a href="#" className='bg-black rounded-md text-white flex items-center justify-center px-4 py-2 space-x-2 transition-all duration-200 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1'>
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465 c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338 c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028 c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93 c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021 c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021 c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922 c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479 C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"
                                ></path>
                            </svg>
                            <span>Register using github</span>
                        </a>

                        {/* Login link */}
                        <div className="text-sm text-gray-600">
                            Already have an account? <a href="#" className='text-blue-600 hover:underline'>
                                Login
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
