import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMood } from "../Context/MoodContext";

const Hero = () => {
  const { currentMood, setCurrentMood } = useMood();
  const moods = ["Sad", "Energetic", "Focus", "Chill"];
  const navigate = useNavigate();
  const NavigateToPlaylist = () => {
    navigate('playlist');
  };

  return (
    <div className="min-h-screen bg-white px-4">
      <div className="mt-10  ml-15 mr-15 rounded-sm min-h-[300px] bg-gradient-to-br md:h-120 from-orange-600 via-green-600 to-teal-500 flex flex-col items-center justify-center gap-3 p-6">
        <h2 className="font-bold text-xl text-gray-900 text-center">
          Select your Mood
        </h2>
        <p className="font-bold text-gray-900  text-center">
          Vibe Music according to mood with VibeStream
        </p>
        <button className="rounded-full bg-blue-400 h-10 w-32 text-white">
          {currentMood}
        </button>
        <button className="rounded-full bg-blue-400 h-10 w-32 text-white" onClick={NavigateToPlaylist}>
          Go to Playlist
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 w-full max-w-md mx-auto">
        {moods.map((mood, index) => (
          <button
            key={index}
            className="rounded-xl ml-3 bg-blue-400 h-10 w-28 text-white hover:bg-blue-500 transition-colors"
            onClick={() => {
              setCurrentMood(mood);
            }}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
