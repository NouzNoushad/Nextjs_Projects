import React from 'react'
import { CompletedIcon, DoItNowIcon, HomeIcon, ImportantIcon, SignOutIcon } from './svgs'
import Image from 'next/image'

export default function Sidebar() {
  return (
      <div className="lg:w-1/6 w-0 border-0 h-full bg-panel rounded-lg lg:border-2 lg:border-[#282828] hidden lg:flex flex-col justify-between">
          <div className="flex flex-row items-center justify-center
                        gap-3 py-4">
              <div className="h-[70px] w-[70px] rounded-full bg-yellow-300 flex items-center justify-center">
                  <Image src={'/happy-face.png'} height={50} width={50} alt="profile" />
              </div>
              <h1 className="text-[1rem] font-bold">John</h1>
          </div>
          <ul className="space-y-2">
              <li className="relative"><a href="#" className="sidebar-link">
                  <HomeIcon className="size-5" />
                  <span className="text-[0.9rem] font-[500] flex-1">All Tasks</span>
              </a></li>
              <li className="relative"><a href="#" className="sidebar-link">
                  <ImportantIcon className="size-5" />
                  <span className="text-[0.9rem] font-[500] flex-1">Important</span>
              </a></li>
              <li className="relative"><a href="#" className="sidebar-link">
                  <CompletedIcon className="size-5" />
                  <span className="text-[0.9rem] font-[500] flex-1">Completed</span>
              </a></li>
              <li className="relative"><a href="#" className="sidebar-link">
                  <DoItNowIcon className="size-5" />
                  <span className="text-[0.9rem] font-[500] flex-1">Do it Now</span>
              </a></li>
          </ul>
          <div className="flex flex-row items-center justify-center gap-3 ps-8 py-4">
              <SignOutIcon className="size-5 transition-transform rotate-90" />
              <span className="flex-1 font-bold text-[0.9rem]">Sign Out</span>
          </div>
      </div>
  )
}
