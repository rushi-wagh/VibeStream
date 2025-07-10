import { createContext, useContext, useState, useEffect } from "react";

const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [SongInfo, setSongInfo] = useState(() => {
    const storedInfo = localStorage.getItem("songInfo");
    return storedInfo ? JSON.parse(storedInfo) : { song: "channa mereya" };
  });

  useEffect(() => {
    if (SongInfo) {
      localStorage.setItem("Song", JSON.stringify(SongInfo));
    } else {
      localStorage.removeItem("Song");
    }
  }, [SongInfo]);

  return (
    <SongContext.Provider value={{ SongInfo, setSongInfo }}>
      {children}
    </SongContext.Provider>
  );
};

export const useSong = () => useContext(SongContext);
