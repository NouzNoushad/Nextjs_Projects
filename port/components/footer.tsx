import React from 'react'

export default function Footer() {
    return (
        <footer className='xl:ml-[300px] bg-[#F4FAFD]'>
            <div className="py-[40px] px-3 text-center text-sm" style={{borderTop: '1px solid lightGrey'}}>
                <div className="text-center mb-1">
                    <p>© <span>Copyright</span> <strong className="font-bold mx-1">iPortfolio</strong> <span>All Rights Reserved</span></p>
                </div>
                <div className="">
                    Designed by <a href="#">TailwindMade</a> Distributed by <a href="#">Noboman</a>
                </div>
            </div>
        </footer>
    )
}
