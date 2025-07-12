import {React,useState} from "react";
import { useSong } from "../Context/FavouriteContext.jsx";
import NavBar from "../Components/NavBar.jsx";

const FavSong = () => {
  const { SongInfo, setSongInfo } = useSong();
  console.log(SongInfo);
  const remove = (song) => {
    const updatedSongs = SongInfo.filter((s) => s.audio !== song.audio);
    setSongInfo(updatedSongs);
  };
  const [playingIndex,setPlayingIndex] = useState(null)
  return (
    <>
      <NavBar />
      <div className="mt-5 ml-4">
        <h2 className="text-3xl font-semibold font-serif mb-4 text-gray-700">
          🎵 Your Favourite Songs
        </h2>
        {SongInfo?.length === 0 && <h3 className="text-2xl font-semibold text-gray-600 italic m-6">
          No Favourite Song added yet...
        </h3>}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SongInfo.map((song, index) => (
            <li
              key={index}
              className="p-4  shadow-md mt-2 border border-gray-200 rounded-md flex flex-col items-center hover:scale-110"
            >
              <img
                src={song.image}
                alt={song.title}
                width={120}
                className="rounded-xl mb-2"
              />
              <h2 className="font-semibold text-lg">{song.title}</h2>
              <h3 className="text-sm text-gray-600">By {song.subtitle}</h3>
              <div
                className={`p-2 rounded w-full transition-all duration-300 relative overflow-hidden ${
                  playingIndex === index ? "bg-white" : "bg-white"
                }`}
              >
                {playingIndex === index && (
                  <div className="absolute inset-0 z-0 animate-spin-slow rounded-full blur-md opacity-70 bg-[conic-gradient(red,_green,_blue,_yellow,_gray,_red)]"></div>
                )}

                <audio
                  className="w-full"
                  controls
                  src={song.audio}
                  onPlay={() => setPlayingIndex(index)}
                  onPause={() => setPlayingIndex(null)}
                />
              </div>
              <button
                onClick={() => {
                  remove(song);
                }}
                className="rounded-xl mt-2 h-10 w-40 bg-cyan-400 hover:bg-cyan-800"
              >
                Dislike
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FavSong;
