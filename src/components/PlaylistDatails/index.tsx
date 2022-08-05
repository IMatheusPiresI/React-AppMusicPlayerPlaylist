import { PlayList } from "../../mocks/playlists";
import BoxPlaylistsMusics from "../BoxPlaylistsMusics";
import UnSelectedPlaylist from "../UnSelectedPlaylist";
import * as S from "./styles";

type PlaylistDatailsProps = {
  currentPlaylist: PlayList;
};
const PlaylistDatails = ({ currentPlaylist }: PlaylistDatailsProps) => {
  return (
    <S.BoxPlaylistSelected>
      {currentPlaylist.musics ? (
        <>
          <S.InfoPlayList>
            <img src={currentPlaylist?.image} alt="Imagem da playlist" />
            <h3>{currentPlaylist?.name}</h3>
            <p>{currentPlaylist?.musics?.length} - músicas</p>
          </S.InfoPlayList>
          <BoxPlaylistsMusics currentPlaylist={currentPlaylist} />
        </>
      ) : (
        <>
          <UnSelectedPlaylist />
        </>
      )}
    </S.BoxPlaylistSelected>
  );
};

export default PlaylistDatails;
