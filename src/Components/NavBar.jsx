import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <>
   <div>
  <div
    id="nav"
    className="flex  bg-[#F7F7F7] flex-col md:flex-row items-center justify-between font-bold h-auto md:h-20 shadow-sm text-gray-500 shadow-gray-500 px-4 py-3"
  >
    <div id="left" className="mb-2 md:mb-0">
      <Link to="/" className='text-2xl'>VibeStream</Link>
    </div>
    <div
      id="right"
      className="flex flex-col md:flex-row gap-4 md:gap-8 items-center mr-40 "
    >
      <Link to="/" className='p-6'>Home</Link>
      <Link to="/playlist" className='p-6'>Playlist</Link>
      <Link to="/fav" className='p-6'> Favourites</Link>
    </div>
  </div>
</div>
</>
  )
}

export default NavBar
