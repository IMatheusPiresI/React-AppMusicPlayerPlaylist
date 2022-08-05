import React, { useEffect, useState } from "react";
import { useMusicContext } from "../../contexts/MusicContext";
import { currentPercentageBackground } from "../../helpers/currentPercentageBackground";
import { formatDurationMusic } from "../../helpers/formatDurationMusic";
import * as S from "./styles";

const PlayerCurrentDuration = () => {
  const { music, changeDuration } = useMusicContext();
  const [currentTime, setCurrentTime] = useState<number>(0);

  const handleChangeDuration = (duration: number) => {
    changeDuration(duration);
  };

  const getPercentage = () => {
    return currentPercentageBackground({
      currentTime,
      durationTime: music.audio.duration,
    });
  };

  if (music.audio) {
    music.audio.ontimeupdate = () => {
      setCurrentTime(music.audio.currentTime);
    };
  }

  return (
    <S.BoxTime>
      <p>{formatDurationMusic(currentTime)}</p>
      <div>
        <input
          type="range"
          value={currentTime}
          onChange={(e) => handleChangeDuration(e.target.valueAsNumber)}
          min={0}
          max={music?.audio?.duration ? music?.audio?.duration : 0}
          style={{
            background:
              "linear-gradient(to right, #EED8AE 0%, #FFE7BA " +
              getPercentage() +
              "%, #E8E8E8 " +
              getPercentage() +
              "%, #E8E8E8 100%)",
          }}
        />
      </div>
      <p>{formatDurationMusic(music.audio.duration)}</p>
    </S.BoxTime>
  );
};

export default PlayerCurrentDuration;
