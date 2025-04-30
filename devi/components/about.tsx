import { CheckIcon, PlayIcon } from '@/lib/icons'
import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <section id='about' className="bg-white">
            <div className="container-width py-[5rem]">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-[20px] lg:gap-[40px] font-medium">
                    <div className="space-y-5">
                        <h3 className="text-[28px] leading-9 font-bold text-[#273D4E]">Voluptatem dignissimos provident laboris nisi ut aliquip ex ea commodo</h3>
                        <Image src="/images/about.jpg" alt="about" width={1000} height={1000} className="w-full h-fit rounded-2xl" />
                        <p>Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod nisi et. Placeat debitis quia recusandae odit et consequatur voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.</p>
                        <p>Temporibus nihil enim deserunt sed ea. Provident sit expedita aut cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus nobis tempore doloribus debitis explicabo similique sit. Accusantium sed ut omnis beatae neque deleniti repellendus.</p>
                    </div>
                    <div className="space-y-5">
                        <p className="italic text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex flex-row items-center gap-2">
                                <div><CheckIcon className="size-5" /></div>
                                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></li>
                            <li className="flex flex-row items-center gap-2">
                                <div><CheckIcon className="inline-block size-5" /></div>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p></li>
                            <li className="flex flex-row items-start gap-2">
                                <div><CheckIcon className="inline-block size-5" /> </div>
                                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p></li>
                        </ul>
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                        </p>
                        <div className="relative">
                            <Image src="/images/about-2.jpg" height={1000} width={1000} alt="" className="w-full h-fit rounded-2xl" />
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-full">
                                <PlayIcon className="md:size-18 size-12" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
