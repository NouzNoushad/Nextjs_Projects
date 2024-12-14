'use client'

import React, { useState } from 'react'
import { DropdownDownIcon, Earth } from '../lib/svgs'
import { languages } from '../lib/constants'

export default function Localization() {
    const [showDropdown, setShowDropdown] = useState(false)
    const [globalLanguage, setGlobalLanguage] = useState(languages[0])

    const handleGlobalLanguage = (language: string) => {
        setGlobalLanguage(language)
        setShowDropdown(false)
    }

  return (
      <div className="relative">
          <button onClick={() => setShowDropdown(!showDropdown)} className='flex flex-row items-center gap-2 rounded-md px-2 py-2 text-gray-500'>
              <Earth className='size-5' />
              <span>{globalLanguage}</span>
              <DropdownDownIcon className='size-3' />
          </button>
          {showDropdown ? <ul className="absolute top-[2.5rem] left-0 bg-white shadow-lg rounded-md py-1 px-1 w-[250px] h-[300px] overflow-y-auto">
              {
                  languages.map((language, index) => (
                      <button onClick={() => handleGlobalLanguage(language)} key={index} className='dropdown-text'>{language}</button>
                  ))
              }
          </ul> : null}
      </div>
  )
}
