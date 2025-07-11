import { createContext, useContext, useState, useEffect } from "react";

const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [SongInfo, setSongInfo] = useState(() => {
    const storedInfo = localStorage.getItem("SongInfo");
    return storedInfo ? JSON.parse(storedInfo) : [];
  });

  useEffect(() => {
    if (SongInfo) {
      localStorage.setItem("SongInfo", JSON.stringify(SongInfo));
    } else {
      localStorage.removeItem("SongInfo");
    }
  }, [SongInfo]);

  return (
    <SongContext.Provider value={{ SongInfo, setSongInfo }}>
      {children}
    </SongContext.Provider>
  );
};

export const useSong = () => useContext(SongContext);
