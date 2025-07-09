import {React,useState} from 'react'

const Hero = () => {
    const [mood,setMood] = useState("Happy")
    const moods = ['Sad','Energetic','Focus','Chill']
  return (
    <div className='h-140 bg-white' >
        <div className=" h-100 bg-gradient-to-br from-orange-600 via-green-600 to-teal-500 flex items-center justify-center flex-col gap-3">
            <h2 className='font-bold text-xl text-gray-900 '>Select your Mood</h2>
            <p className='font-bold text-gray-900'>We will curate playlist based on it</p>
            <button className='rounded-full text-xl bg-blue-400 h-10 w-30 text-white'>{mood}</button>
            <button className='rounded-full bg-blue-400 h-10 w-30 text-white'>Go to Playlist</button>
        </div>
        <div className=' h-40'>
           {moods.map((mood,index)=>{ return
            (<button key={index} className='rounded-full bg-blue-400 h-10 w-20 text-white'>{mood}</button>)
           })} 
        </div>
      </div>
  )
}

export default Hero
