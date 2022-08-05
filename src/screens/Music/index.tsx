import * as S from "./styles";
import { Title } from "../Presentation/styles";
import MusicItem from "../../components/MusicItem";
import { musics } from "../../mocks/musics";
import MusicPlayer from "../../components/MusicPlayer";
import { useMusicContext } from "../../contexts/MusicContext";

export type ActiveSong = {
  name: string;
  image: string;
  audio: HTMLAudioElement;
};

const Music = () => {
  return (
    <>
      <S.Container>
        <Title>MÚSICAS</Title>
        <S.BoxMusics>
          {musics.map((music) => (
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
