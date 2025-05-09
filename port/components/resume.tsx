import React from 'react'

export default function Resume() {
    return (
        <section>
            <div className="py-[3rem] px-3">
                <div className="">
                    <h2 className='main-text'>Resume</h2>
                    <p className='pt-[20px]'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className="mt-8 grid lg:grid-cols-2 grid-cols-1 gap-[20px]">
                    <div className="">
                        <h3 className="text-[26px] font-bold">Sumary</h3>
                        <div className="pl-[20px] mt-[10px] relative before:absolute before:w-[16px] before:h-[16px] before:rounded-[50px] before:left-[-9px] before:top-0 before:bg-[#149DDD]" style={{ borderLeft: '2px solid #149DDD' }}>
                            <h4 className='text-[18px] font-medium uppercase pb-[10px] text-gray-500'>Brandon Johnson</h4>
                            <p className='pb-[1rem]'><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                            <div className='pl-[20px]'>
                                <li className='pb-[10px]'>Portland par 127,Orlando, FL</li>
                                <li className='pb-[10px]'>(123) 456-7891</li>
                                <li className='pb-[10px]'>alice.barkley@example.com</li>
                            </div>
                        </div>

                        <h3 className="text-[26px] font-bold mb-[20px] pt-5">Education</h3>
                        <div className="pl-[20px] mt-[10px] relative before:absolute before:w-[16px] before:h-[16px] before:rounded-[50px] before:left-[-9px] before:top-0 before:bg-[#149DDD]" style={{ borderLeft: '2px solid #149DDD' }}>
                            <h4 className='text-[18px] font-medium uppercase pb-[10px] text-gray-500'>Master of Fine Arts &amp; Graphic Design</h4>
                            <h5 className='pb-[5px] px-[15px] text-[16px] font-semibold'>2015 - 2016</h5>
                            <p className='pb-[1rem]'><em>Rochester Institute of Technology, Rochester, NY</em></p>
                            <p className='pb-[1rem]'>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                        </div>

                        <div className="pl-[20px] relative before:absolute before:w-[16px] before:h-[16px] before:rounded-[50px] before:left-[-9px] before:top-0 before:bg-[#149DDD]" style={{ borderLeft: '2px solid #149DDD' }}>
                            <h4 className='text-[18px] font-medium uppercase pb-[10px] text-gray-500'>Bachelor of Fine Arts &amp; Graphic Design</h4>
                            <h5 className='pb-[5px] px-[15px] text-[16px] font-semibold'>2010 - 2014</h5>
                            <p className='pb-[1rem]'><em>Rochester Institute of Technology, Rochester, NY</em></p>
                            <p className='pb-[1rem]'>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[26px] font-bold">Professional Experience</h3>
                        <div className="pl-[20px] mt-[10px] relative before:absolute before:w-[16px] before:h-[16px] before:rounded-[50px] before:left-[-9px] before:top-0 before:bg-[#149DDD]" style={{ borderLeft: '2px solid #149DDD' }}>
                            <h4 className='text-[18px] font-medium uppercase pb-[10px] text-gray-500'>Senior graphic design specialist</h4>
                            <h5 className='pb-[5px] px-[15px] text-[16px] font-semibold'>2019 - Present</h5>
                            <p className='pb-[1rem]'><em>Experion, New York, NY </em></p>
                            <div className='pl-[20px]'>
                                <li className='pb-[10px]'>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                <li className='pb-[10px]'>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                <li className='pb-[10px]'>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                <li className='pb-[10px]'>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                            </div>
                        </div>

                        <div className="pl-[20px] relative before:absolute before:w-[16px] before:h-[16px] before:rounded-[50px] before:left-[-9px] before:top-0 before:bg-[#149DDD]" style={{ borderLeft: '2px solid #149DDD' }}>
                            <h4 className='text-[18px] font-medium uppercase pb-[10px] text-gray-500'>Graphic design specialist</h4>
                            <h5 className='pb-[5px] px-[15px] text-[16px] font-semibold'>2017 - 2018</h5>
                            <p className='pb-[1rem]'><em>Stepping Stone Advertising, New York, NY</em></p>
                            <div className='pl-[20px]'>
                                <li className='pb-[10px]'>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                                <li className='pb-[10px]'>Managed up to 5 projects or tasks at a given time while under pressure</li>
                                <li className='pb-[10px]'>Recommended and consulted with clients on the most appropriate graphic design</li>
                                <li className='pb-[10px]'>Created 4+ design presentations and proposals a month for clients and account managers</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
