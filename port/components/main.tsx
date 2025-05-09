import React from 'react'
import MainHome from './home'
import About from './about'
import Stats from './stats'
import Skills from './skills'
import Resume from './resume'
import Portfolio from './portfolio'

export default function Main() {

    return (
        <div className="xl:ml-[300px] bg-white">
            <MainHome />
            <About />
            <Stats />
            <Skills />
            <Resume />
            <Portfolio />
        </div>
    )
}
