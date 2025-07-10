import React from 'react'
import {useSong} from '../Context/FavouriteContext.jsx'

const FavSong = () => {
  const {SongInfo} = useSong()
  return (
    <div>
      {SongInfo.song}
    </div>
  )
}

export default FavSong
