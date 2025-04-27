import Image from 'next/image'
import React from 'react'

export default function Clients() {
    return (
        <div className="bg-[#F0F3F9]">
            <div className="container-width py-[3rem]">
                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-[20px]">
                    <div className="flex items-center justify-center">
                        <Image src="/images/clients/client-1.png" className="client-img" alt="" height={70} width={70}></Image>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/images/clients/client-2.png" className="client-img" alt="" height={70} width={70}></Image>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/images/clients/client-3.png" className="client-img" alt="" height={70} width={70}></Image>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/images/clients/client-4.png" className="client-img" alt="" height={70} width={70}></Image>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/images/clients/client-5.png" className="client-img" alt="" height={70} width={70}></Image>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <Image src="/images/clients/client-6.png" className="client-img" alt="" height={70} width={70} ></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}
