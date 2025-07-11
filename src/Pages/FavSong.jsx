import React from "react";
import { useSong } from "../Context/FavouriteContext.jsx";
import NavBar from "../Components/NavBar.jsx";

const FavSong = () => {
  const { SongInfo,setSongInfo} = useSong();
  console.log(SongInfo);
  const remove = (song)=> {
    const updatedSongs = SongInfo.filter((s) => s.audio !== song.audio)
    setSongInfo(updatedSongs)
  }
  return (
    <>
      <NavBar />
      <div className="mt-5 ml-4">
        <h2 className="text-3xl font-semibold font-serif mb-6">Your Favourite Songs</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SongInfo.map((song, index) => (
            <li
              key={index}
              className="p-4  shadow-md mt-2 border border-gray-200 rounded-md flex flex-col items-center"
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
              <button onClick={() =>{remove(song)}}className="rounded-xl mt-2 h-10 w-40 bg-cyan-400 hover:bg-cyan-800">Dislike</button>
            </li>
            
          ))}
        </ul>
      </div>
    </>
  );
};

export default FavSong;
