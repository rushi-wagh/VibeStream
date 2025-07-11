import React from 'react'
import { Link } from 'react-router-dom'
import {FaHeart} from 'react-icons/fa'

const NavBar = () => {
  return (
    <div>
        <div id='nav' className='flex justify-between  text-xl h-20  shadow-sm shadow-gray-500'>
            <div id='left' className='ml-4 mt-6'>
                <Link to='/' >VibeStream</Link>
            </div>
            <div id='right' className='flex gap-8 mr-12 mt-6'>
                <Link to='/'>Home</Link>
                <Link to='/playlist'>Playlist</Link>
                <Link to='/fav' >See Favourites</Link>
            </div>
        </div>
      
    </div>
  )
}

export default NavBar
