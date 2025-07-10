import axios from "axios";
import { useSongs } from "../Context/SongsContext.jsx";

const moodToQuery = {
  Happy: "happy bollywood songs",
  Sad: "emotional hindi songs",
  Energetic: "bollywood dance hits",
  Chill: "hindi lofi chill songs",
  Focus: "instrumental bollywood",
  Motivational: "motivational bollywood songs",
  Classic: "old hindi songs",
};

export const useFetchSongs = () => {
  const { setSongs, setLoading, setError } = useSongs();

  const fetchSongs = async (mood) => {
    const searchTerm = moodToQuery[mood] || mood;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("https://shazam.p.rapidapi.com/search", {
        params: {
          term: searchTerm,
          locale: "hi-IN",
          offset: "0",
          limit: "5",
        },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
        },
      });
      console.log(response);
      const tracks = response.data?.tracks?.hits || [];

      const extractedSongs = tracks.map((item) => ({
        title: item.track?.title,
        subtitle: item.track?.subtitle,
        image: item.track?.images?.coverart,
        audio: item.track?.hub?.actions?.[1]?.uri,
      }));

      setSongs(extractedSongs);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch songs");
    } finally {
      setLoading(false);
    }
  };

  return { fetchSongs };
};
