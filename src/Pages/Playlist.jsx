import React from 'react'
import { useMood } from '../Context/MoodContext'

const Playlist = () => {
  const {currentMood} = useMood()
  return (
    <div>
      Current Mood : {currentMood}
    </div>
  )
}

export default Playlist
