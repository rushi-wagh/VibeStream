import React, { useEffect, useState } from "react";
import { useSongs } from "../Context/SongsContext";
import { useFetchSongs } from "../Api/useFetchSongs";
import { useMood } from "../Context/MoodContext";
import { themeByMood } from "../themeBymood/themeByMood";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import NavBar from "../Components/NavBar.jsx";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useSong } from "../Context/FavouriteContext.jsx";


const Playlist = () => {
  const { songs, Loading, error } = useSongs();
  const { fetchSongs } = useFetchSongs();
  const { currentMood } = useMood();
  const {SongInfo,setSongInfo} = useSong();
  const theme = themeByMood[currentMood] || themeByMood.default;


 

  useEffect(() => {
    fetchSongs(currentMood);
    
  }, []);

  const toggleFav = (song) => {
    if (SongInfo.some((s) => s.audio === song.audio)){
      setSongInfo(SongInfo.filter(s => s.audio !== song.audio));
    } else {
      setSongInfo([...SongInfo, song]);
    } 
  };

   useEffect(()=>{
    //  console.log(likedSongs);
    //  setSongInfo([...SongInfo,likedSongs])
     console.log(SongInfo)
   },[SongInfo])
 
  if (Loading) return <p className="font-semibold">Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <NavBar />
      <div className={`min-h-screen ${theme.bg} ${theme.text} p-6`}>
        <h2 className="text-2xl font-bold mb-6">Songs Based on Your Mood 🎵</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {songs.map((song, index) => (
            <li
              key={index}
              className={`p-4 rounded-xl shadow-md ${theme.accent} flex flex-col items-center`}
            >
              <img
                src={song.image}
                alt={song.title}
                width={120}
                className="rounded-xl mb-2"
              />
              <h2 className="font-semibold text-lg">{song.title}</h2>
              <h3 className="text-sm text-gray-600">By {song.subtitle}</h3>
              <audio className="mt-2 w-full" controls src={song.audio} />

              
              <span
                onClick={() => toggleFav(song)}
                className={`text-3xl mt-2 cursor-pointer transition-colors ${
                  SongInfo.includes(song) ? "text-red-500" : "text-gray-400"
                }`}
              >
                {SongInfo.includes(song) ? <FaHeart /> : <CiHeart />}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Playlist;
