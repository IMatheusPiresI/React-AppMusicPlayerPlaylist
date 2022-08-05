import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../assets/styles/global";
import Header from "../components/Header";
import { MusicProvider } from "../contexts/MusicContext";
import Home from "../screens/Home";
import Music from "../screens/Music";
import Playlist from "../screens/Playlist";
import Presentation from "../screens/Presentation";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MusicProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Presentation />} />
            <Route path="/musics" element={<Music />} />
            <Route path="/playlists" element={<Playlist />} />
          </Route>
        </Routes>
        <GlobalStyle />
      </MusicProvider>
    </BrowserRouter>
  );
};
