import { PlayList } from "../../mocks/playlists";
import MusicItem from "../MusicItem";
import * as S from "./styles";

type BoxPlaylistsMusicsProps = {
  currentPlaylist: PlayList;
};

const BoxPlaylistsMusics = ({ currentPlaylist }: BoxPlaylistsMusicsProps) => {
  return (
    <S.BoxMusics>
      {currentPlaylist?.musics?.map((music) => {
        return (
          <MusicItem
            key={Math.floor(Math.random() * 99999)}
            id={music.id}
            name={music.name}
            audio={music.audio}
            img={music.img}
            time={music.time}
            playlist={true}
          />
        );
      })}
    </S.BoxMusics>
  );
};

export default BoxPlaylistsMusics;
