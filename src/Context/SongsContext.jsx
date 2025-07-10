import { createContext, useContext, useState } from "react";

const SongContext = createContext();

export const SongsProvider = ({ children }) => {
  const [Loading, setLoading] = useState(false);
  const [error,setError] = useState(null)
  const [songs,setSongs] = useState([])

  return (
    <SongContext.Provider value={{songs,setSongs, Loading, setLoading , error,setError}}>
      {children}
    </SongContext.Provider>
  );
};

export const useSongs = ()=> useContext(SongContext)
