import { createContext, useContext, useState } from "react";

const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
  const [currentMood, setCurrentMood] = useState("Happy");

  return (
    <MoodContext.Provider value={{ currentMood, setCurrentMood }}>
      {children}
    </MoodContext.Provider>
  );
};

export const useMood = ()=> useContext(MoodContext)
