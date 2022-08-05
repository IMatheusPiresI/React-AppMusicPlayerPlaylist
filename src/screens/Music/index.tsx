import * as S from "./styles";
import { Title } from "../Presentation/styles";
import MusicItem from "../../components/MusicItem";
import { musics } from "../../mocks/musics";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export type ActiveSong = {
  name: string;
  image: string;
  audio: HTMLAudioElement;
};

const Music = () => {
  const [musicName, setMusicName] = useState<string>("");
  // prettier-ignore
  const filteredMusics = musicName.length > 0 
      ? musics.filter((music) => music.name.toLowerCase().includes(musicName.toLocaleLowerCase().trim())) 
      : [];

  return (
    <>
      <S.Container>
        <Title>MÚSICAS</Title>
        <S.FilterMusic>
          <S.InputSearch
            value={musicName}
            onChange={(e) => setMusicName(e.target.value)}
            autoComplete="off"
            spellCheck="false"
          />
          <FaSearch />
        </S.FilterMusic>
        <S.BoxMusics>
          {musicName.length > 0
            ? filteredMusics.map((music) => (
                <MusicItem
                  key={music.id}
                  id={music.id}
                  name={music.name}
                  img={music.img}
                  time={music.time}
                  audio={music.audio}
                />
              ))
            : musics.map((music) => (
                <MusicItem
                  key={music.id}
                  id={music.id}
                  name={music.name}
                  img={music.img}
                  time={music.time}
                  audio={music.audio}
                />
              ))}
        </S.BoxMusics>
      </S.Container>
    </>
  );
};

export default Music;
