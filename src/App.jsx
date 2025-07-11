import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing.jsx";
import Playlist from "./Pages/Playlist.jsx";
import FavSong from "./Pages/FavSong.jsx";

import { MoodProvider } from "./Context/MoodContext.jsx";
import { SongProvider } from "./Context/FavouriteContext.jsx";
import { SongsProvider } from "./Context/SongsContext.jsx";

const App = () => {
  return (
    <>
      <SongProvider>
        <SongsProvider>
          <MoodProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/playlist" element={<Playlist />} />
                <Route path="/fav" element={<FavSong />} />
                
              </Routes>
            </BrowserRouter>
          </MoodProvider>
        </SongsProvider>
      </SongProvider>
    </>
  );
};

export default App;
