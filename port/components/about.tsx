import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <section className='bg-white'>
            <div className="py-[3rem] px-3">
                <div className="">
                    <h2 className='text-3xl font-bold pb-[20px] inline-block relative after:absolute after:left-0 after:bottom-0 after:h-[0.2rem] after:w-[50px] after:bg-[#149DDD]'>About</h2>
                    <p className='pt-[20px]'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className="mt-8 grid grid-cols-12 gap-5">
                    <div className="md:col-span-4 col-span-12">
                        <Image src="/images/my-profile-img.jpg" alt="about" width={1000} height={1000} className="w-full h-fit" />
                    </div>
                    <div className="md:col-span-8 col-span-12">
                        <h2 className='text-2xl font-bold'>UI/UX Designer &amp; Web Developer.</h2>
                        <p className="italic py-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <div className="mt-3 grid grid-cols-12 gap-5">
                            <div className="md:col-span-6 col-span-12">
                                <ul className='space-y-[20px]'>
                                    <li><i className="bi bi-chevron-right text-[#149DDD] text-base mr-[5px]"></i> <strong className='mr-[10px]'>Birthday:</strong> <span>1 May 1995</span></li>
                                    <li><i className="bi bi-chevron-right text-[#149DDD] text-base mr-[5px]"></i> <strong className='mr-[10px]'>Website:</strong> <span>www.example.com</span></li>
                                    <li><i className="bi bi-chevron-right text-[#149DDD] text-base mr-[5px]"></i> <strong className='mr-[10px]'>Phone:</strong> <span>+123 456 7890</span></li>
                                    <li><i className="bi bi-chevron-right text-[#149DDD] text-base mr-[5px]"></i> <strong className='mr-[10px]'>City:</strong> <span>New York, USA</span></li>
                                </ul>
                            </div>
                            <div className="md:col-span-6 col-span-12">
                                <ul className='space-y-[20px]'>
                                    <li><i className="bi bi-chevron-right text-[#149DDD] text-base mr-[5px]"></i> <strong className='mr-[10px]'>Age:</strong> <span>30</span></li>
                                    <li><i className="bi bi-chevron-right text-[#149DDD] text-base mr-[5px]"></i> <strong className='mr-[10px]'>Degree:</strong> <span>Master</span></li>
                                    <li><i className="bi bi-chevron-right text-[#149DDD] text-base mr-[5px]"></i> <strong className='mr-[10px]'>Email:</strong> <span>email@example.com</span></li>
                                    <li><i className="bi bi-chevron-right text-[#149DDD] text-base mr-[5px]"></i> <strong className='mr-[10px]'>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        <p className="pt-8">
                            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
