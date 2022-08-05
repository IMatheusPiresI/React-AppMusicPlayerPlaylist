import { useEffect } from "react";
import * as S from "./styles";
import { PlayList, playlists } from "../../mocks/playlists";
import { useMusicContext } from "../../contexts/MusicContext";

type BoxPlaylistsProps = {
  setCurrentPlaylist: (playlists: PlayList) => void;
};

const BoxPlaylists = ({ setCurrentPlaylist }: BoxPlaylistsProps) => {
  const { setPlayList, playlist } = useMusicContext();
  const handleChangePlaylist = (playlist: PlayList) => {
    setPlayList(playlist);
    setCurrentPlaylist(playlist);
  };

  useEffect(() => {
    setCurrentPlaylist(playlist);
  }, [playlist]);
  return (
    <S.BoxPlayList>
      {playlists?.map((playlistInfo) => (
        <S.CardPlaylist
          key={playlistInfo.id}
          currentPlaylist={playlistInfo.name === playlist.name}
          onClick={() => handleChangePlaylist(playlistInfo)}
        >
          <img src={playlistInfo.image} alt="" />
          <div>
            <h2>{playlistInfo.name}</h2>
          </div>
        </S.CardPlaylist>
      ))}
    </S.BoxPlayList>
  );
};

export default BoxPlaylists;
