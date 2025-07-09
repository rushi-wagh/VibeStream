import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Landing from './Pages/Landing.jsx'
import Playlist from './Pages/Playlist.jsx'
import FavSong from './Pages/FavSong.jsx'
import Mission from './Pages/Mission.jsx'
import Vision from './Pages/Vision.jsx'
const App = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Landing />} />
      <Route path ='/playlist' element={<Playlist />} />
      <Route path ='/fav' element={<FavSong />} />
      <Route path ='/mission' element={<Mission />} />
      <Route path ='/vision' element={<Vision/>} />
     </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
