import Image from 'next/image'
import React from 'react'

export default function Services() {
    return (
        <div className="bg-white">
            <div className="container-width py-[3rem]">
                <div className="space-y-1">
                    <h2 className="subtitle-text">Services</h2>
                    <p className="title-text uppercase">Featured Services</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[15px] gap-[40px] mt-[3rem]">
                    <div className="service-item">
                        <div className="overflow-hidden cursor-pointer rounded-xl">
                            <Image src="/images/services-1.jpg" alt="about" width={1000} height={1000} className="w-full h-fit rounded-xl transition-transform duration-150 hover:scale-110" />
                        </div>
                        <div className="details position-relative">
                            <div className="icon">
                                <i className="bi bi-activity"></i>
                            </div>
                            <a href="service-details.html" className="stretched-link">
                                <h3>Nesciunt Mete</h3>
                            </a>
                            <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="overflow-hidden cursor-pointer rounded-xl">
                            <Image src="/images/services-2.jpg" alt="about" width={1000} height={1000} className="w-full h-fit rounded-xl transition-transform duration-150 hover:scale-110" />
                        </div>
                        <div className="details position-relative">
                            <div className="icon">
                                <i className="bi bi-activity"></i>
                            </div>
                            <a href="service-details.html" className="stretched-link">
                                <h3>Nesciunt Mete</h3>
                            </a>
                            <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="overflow-hidden cursor-pointer rounded-xl">
                            <Image src="/images/services-3.jpg" alt="about" width={1000} height={1000} className="w-full h-fit rounded-xl transition-transform duration-150 hover:scale-110" />
                        </div>
                        <div className="details position-relative">
                            <div className="icon">
                                <i className="bi bi-activity"></i>
                            </div>
                            <a href="service-details.html" className="stretched-link">
                                <h3>Nesciunt Mete</h3>
                            </a>
                            <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
