import React from 'react'
import MainHome from './home'
import About from './about'

export default function Main() {

    return (
        <div className="lg:ml-[300px] bg-white">
            <MainHome />
            <About />
        </div>
    )
}
