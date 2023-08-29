import React from 'react'
import { BsSearch } from 'react-icons/bs'

export const Searchbar = () => {
  return (
    <div className='searchbar__container'>
        <button className='searchbar__button'>
            <BsSearch />
        </button>
        <input
            type="text"
            placeholder="Search high-resolution images"
            className="searchbar searchbar--large"
        />
    </div>
  )
}
