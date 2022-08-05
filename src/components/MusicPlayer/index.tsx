import * as S from "./styles";
import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";
import { MdVolumeUp } from "react-icons/md";
import { MdVolumeOff } from "react-icons/md";
import { useEffect, useState } from "react";
import { useMusicContext } from "../../contexts/MusicContext";

import { musics } from "../../mocks/musics";
import { currentPercentageBackground } from "../../helpers/currentPercentageBackground";
import PlayerCurrentDuration from "../PlayerCurrentDuration";
import PlayerPlayPause from "../PlayerPlayPlause";
import PlayerVolume from "../PlayerVolume";

const MusicPlayer = () => {
  const { music, isPlaying, play, reset, nextMusic, nextPlaylist } =
    useMusicContext();

  useEffect(() => {
    if (music.audio) {
      music.audio.onplaying = () => {
        return null;
      };
      return play();
    }
    if (music.name !== musics[music.id - 1].name) {
      return reset();
    }
    return () => {
      reset();
    };
  }, [music.audio]);

  useEffect(() => {
    if (music.audio) {
      music.audio.onended = () => {
        if (music.playlist) {
          nextPlaylist();
        } else {
          nextMusic();
        }
      };
    }
  }, [music.audio]);

  return (
    <S.Container>
      <S.ContainerPlayer isPlaying={isPlaying}>
        {music.audio && (
          <S.Player>
            <PlayerPlayPause />
            <img src={music.img} alt="Imagem música" />
            <S.Autor>
              <p>{music.name}</p>
              <p>The Real Ones</p>
            </S.Autor>
            <PlayerCurrentDuration />
            <PlayerVolume />
          </S.Player>
        )}
      </S.ContainerPlayer>
    </S.Container>
  );
};

export default MusicPlayer;
