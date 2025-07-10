
import React, { useEffect } from "react";
import { useSongs } from "../Context/SongsContext";
import { useFetchSongs } from "../Api/useFetchSongs";
import { useMood } from "../Context/MoodContext";

const Playlist = () => {
  const { songs, Loading, error } = useSongs();
  const { fetchSongs } = useFetchSongs();
  const {currentMood} = useMood()

  useEffect(() => {
    fetchSongs(currentMood); 
  }, []);

  if (Loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Songs for {currentMood}</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            <p>
              {song.title} - {song.subtitle}
            </p>
            <img src={song.image} alt={song.title} width={100} />
            <audio controls src={song.audio} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
