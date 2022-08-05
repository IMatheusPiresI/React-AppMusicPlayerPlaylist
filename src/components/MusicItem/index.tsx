import * as S from "./styles";
import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";
import { useEffect, useState } from "react";
import { useMusicContext } from "../../contexts/MusicContext";
type MusicItemProps = {
  id: number;
  name: string;
  time: string;
  img: string;
  audio: string;
  playlist?: boolean;
};

const MusicItem = ({
  id,
  name,
  time,
  audio,
  img,
  playlist = false,
}: MusicItemProps) => {
  const { music, setMusic, play, pause, reset, isPlaying, setPlayList } =
    useMusicContext();
  const [playing, setPlaying] = useState<boolean>(false);

  const handleStart = () => {
    if (music.name === name) {
      play();
      setPlaying(true);
    } else {
      if (music.audio) {
        reset();
        setMusic({
          id,
          audio: new Audio(audio),
          name,
          img,
          playlist,
        });
      } else {
        setMusic({
          id,
          audio: new Audio(audio),
          name,
          img,
          playlist,
        });
      }
    }
  };

  const handleStop = () => {
    setPlaying(false);
    pause();
  };

  useEffect(() => {
    if (name !== music.name || (!music.audio && !music.name)) {
      setPlaying(false);
    } else {
      setPlaying(true);
    }
  }, [music]);

  useEffect(() => {
    if (music.name === name) {
      !isPlaying ? setPlaying(false) : setPlaying(true);
    }
  }, [isPlaying]);

  return (
    <>
      <S.Container isPlaying={playing}>
        <S.Music>
          {!playing ? (
            <IoMdPlay onClick={handleStart} />
          ) : (
            <IoMdPause onClick={handleStop} />
          )}
          <img src={img} alt="Capa da música" />
          <S.Autor>
            <p>{name.length > 13 ? name.slice(0, 13) + "..." : name}</p>
            <p>The Real Ones</p>
          </S.Autor>
          <S.Time>{time}</S.Time>
        </S.Music>
      </S.Container>
    </>
  );
};

export default MusicItem;
