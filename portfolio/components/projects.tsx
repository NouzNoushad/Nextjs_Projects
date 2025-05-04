import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Projects() {
    return (
        <main className='mt-16 mb-10' id='project'>
            <div className="container-md">
                <h1 className="text-center md:text-start  text-[2rem] font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] text-white">My Projects</h1>
                <div className="my-5 grid lg:grid-cols-3 md:grid-cols-2 md:w-full md:mx-0 sm:w-[400px] sm:mx-auto xs:w-[400px] xs:mx-auto grid-cols-1 gap-4">
                    <div className="bg-white rounded-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                        <div className="flex flex-row items-center justify-center gap-1 py-2 px-2 bg-blue-200 rounded-tl-lg rounded-tr-lg border-4 border-white h-[240px] overflow-hidden">
                            <Image src={'https://play-lh.googleusercontent.com/gTQVG1NjggxWvvfBGPLqLmqhD3MdBYQieESGmrjO5tsfNz8DqbtsW1S81vrSSIz5CA=w526-h296-rw'} height={100} width={100} alt='' className='w-full h-full' />
                            <Image src={'https://play-lh.googleusercontent.com/LIZQ2BG_oQ_ouZSjrA5Zose4ECmd2h8BuZAwRLk1J7mrbM7C2QhDnvSYz6Cw16w4tg=w526-h296-rw'} height={100} width={100} alt='' className='w-full h-full' />
                            <Image src={'https://play-lh.googleusercontent.com/SjwQFJYFwiNEH9hUbgsFnJAZY8HTk5dx0CnoxdAGXW5WlqJvhaytPYD3qzU4O4nFKv4=w526-h296-rw'} height={100} width={100} alt='' className='w-full h-full' />
                        </div>
                        <Link href={'https://play.google.com/store/apps/details?id=com.innerix.wiselearning&hl=en_IN'} className='px-3 py-2 flex flex-row items-center justify-between font-[500]'>
                            Wise Learning app
                            <Image src={'/playstore.png'} height={20} width={20} alt='' />
                        </Link>
                    </div>
                    <div className="bg-white rounded-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                        <div className="flex flex-row items-center justify-center gap-1 py-2 px-2 bg-purple-400 rounded-tl-lg rounded-tr-lg border-4 border-white h-[240px] overflow-hidden">
                            <Image src={'https://play-lh.googleusercontent.com/FKqSYr78y253xWxrnna7pYNxOESRI91Gy-L_rS-9HZyFK9yZX4vxpEM5b97kbT1R6vE=w526-h296-rw'} height={100} width={100} alt='' className='w-full h-full' />
                            <Image src={'https://play-lh.googleusercontent.com/IaF5IxCrJnPGAQT6aIG8XQZlaQB_kpn_JafduLwRsWm0MSNFCVVLbwhsWw7w2FtCuAQ=w526-h296-rw'} height={100} width={100} alt='' className='w-full h-full' />
                            <Image src={'https://play-lh.googleusercontent.com/q1bosZDTnpi27CdI2ohwIwB_MEhjfVSMJGw_bMYg3-rfV7lLnoADW7sJgxl3kYQe-fA=w526-h296-rw'} height={100} width={100} alt='' className='w-full h-full' />
                        </div>
                        <Link href={'https://play.google.com/store/apps/details?id=com.elearn.eduon&hl=en_IN'} className='px-3 py-2 flex flex-row items-center justify-between font-[500]'>
                            Eduon Learning app
                            <Image src={'/playstore.png'} height={20} width={20} alt='' />
                        </Link>
                    </div>
                    <div className="bg-white rounded-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                        <div className="flex flex-row items-center justify-center gap-1 py-2 px-2 bg-orange-300 rounded-tl-lg rounded-tr-lg border-4 border-white h-[240px] overflow-hidden">
                            <Image src={'https://play-lh.googleusercontent.com/E1Lwya_0VGsRcEClDAOMuLbfd2YGkhpCwrgmMstFZba9szxjh-fiQYTCJAPI65yIWeo=w526-h296-rw'} height={100} width={100} alt='' className='w-full h-full' />
                            <Image src={'https://play-lh.googleusercontent.com/pfa7iuy8s-iEgdI-5MXEm-lchZPCubJ7lEsZ4CDVGdiean-jLUPvQ2vJ00KOFvn0sw=w526-h296-rw'} height={100} width={100} alt='' className='w-full h-full' />
                            <Image src={'https://play-lh.googleusercontent.com/-GbzQ_suL7BQsHGzKmcn2toAfe9gxh3M1sFyv2XaMA1rPQIkt6JvfcpbvHE2Z6svbK4=w526-h296-rw'} height={100} width={100} alt='' className='w-full h-full' />
                        </div>
                        <Link href={'https://play.google.com/store/search?q=lifescool%20app&c=apps&hl=en_IN'} className='px-3 py-2 flex flex-row items-center justify-between font-[500]'>
                            Lifescool Learning app
                            <Image src={'/playstore.png'} height={20} width={20} alt='' />
                        </Link>
                    </div>
                    <div className="bg-white rounded-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                        <div className="flex flex-row items-center justify-center gap-1 py-2 px-2 bg-violet-300 rounded-tl-lg rounded-tr-lg border-4 border-white h-[240px] overflow-hidden">
                            <Image src={'https://play-lh.googleusercontent.com/3LAJQq5-DNvAemPg3f0uYkGkqB6ne-f_59rb5Ed1Yk-DlI-1Q2YTuXs1qIroY5YFoQ=w526-h296-rw'} height={100} width={100} alt='' className='w-full h-full' />
                            <Image src={'https://play-lh.googleusercontent.com/rQjKSbeXeLshzRbRKaHMbudo-yyPETrxDTr7I4kUDrFbnYm9o8ObKoNYUPYEC8NPGpA=w526-h296-rw'} height={100} width={100} alt='' className='w-full h-full' />
                            <Image src={'https://play-lh.googleusercontent.com/lol8N2-Ov_H5GiHUjIqLan2S55k8QDDY6T60EoSJnntsvvqZcOkOBQ-eHTzfJn0Qdnk=w526-h296-rw'} height={100} width={100} alt='' className='w-full h-full' />
                        </div>
                        <Link href={'https://play.google.com/store/apps/details?id=com.majoc.basari&hl=en_IN'} className='px-3 py-2 flex flex-row items-center justify-between font-[500]'>
                            Majoc app
                            <Image src={'/playstore.png'} height={20} width={20} alt='' />
                        </Link>
                    </div>
                    <div className="bg-white rounded-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                        <div className="flex flex-row items-center justify-center gap-1 py-2 px-2 bg-pink-200 rounded-tl-lg rounded-tr-lg border-4 border-white h-[240px] overflow-hidden">
                            <Image src={'https://play-lh.googleusercontent.com/Rw3BDxRKDstUtL2wPIGYfC3vEOf_1yoX8Jifj4JbbsywiA1wAUsHdqesJsEgXbyU1MU=w526-h296-rw'} height={100} width={100} alt='' className='w-full h-full' />
                            <Image src={'https://play-lh.googleusercontent.com/FKQIRe-99mSB97GfP3Ll7x-jYHfVyy_g7QACiJB9krNvQOYO2Gy937Po6lj_AxotZvY=w526-h296-rw'} height={100} width={100} alt='' className='w-full h-full' />
                            <Image src={'https://play-lh.googleusercontent.com/GtTrC5pE-hnZ4Wagx4Sc953nbl7KBvfHdwcDhV-qqgnC_buTL8O9S84PwhSFkbqXkw=w526-h296-rw'} height={100} width={100} alt='' className='w-full h-full' />
                        </div>
                        <Link href={'https://play.google.com/store/apps/details?id=com.xctllp.xxxx&hl=en_IN'} className='px-3 py-2 flex flex-row items-center justify-between font-[500]'>
                            Birthday Calendar
                            <Image src={'/playstore.png'} height={20} width={20} alt='' />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}