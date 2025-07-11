import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <>
   <div>
  <div
    id="nav"
    className="flex flex-col md:flex-row items-center justify-between text-xl h-auto md:h-20 shadow-sm shadow-gray-500 px-4 py-3"
  >
    <div id="left" className="mb-2 md:mb-0">
      <Link to="/">VibeStream</Link>
    </div>
    <div
      id="right"
      className="flex flex-col md:flex-row gap-4 md:gap-8 items-center"
    >
      <Link to="/">Home</Link>
      <Link to="/playlist">Playlist</Link>
      <Link to="/fav">See Favourites</Link>
    </div>
  </div>
</div>
</>
  )
}

export default NavBar
