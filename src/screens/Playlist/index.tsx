import { useState } from "react";
import { PlayList } from "../../mocks/playlists";
import { Title } from "../Presentation/styles";
import * as S from "./styles";
import BoxPlaylists from "../../components/BoxPlaylists";
import PlaylistDatails from "../../components/PlaylistDatails";

const Playlist = () => {
  const [currentPlaylist, setCurrentPlaylist] = useState<PlayList>(
    {} as PlayList
  );

  return (
    <>
      <S.Container>
        <Title>PLAYLISTS</Title>
        <S.ContainerContent>
          <BoxPlaylists setCurrentPlaylist={setCurrentPlaylist} />
          <PlaylistDatails currentPlaylist={currentPlaylist} />
        </S.ContainerContent>
      </S.Container>
    </>
  );
};

export default Playlist;
