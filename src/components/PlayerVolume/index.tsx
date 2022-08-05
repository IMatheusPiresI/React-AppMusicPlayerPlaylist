import { useState } from "react";
import * as S from "./styles";

import { MdVolumeOff, MdVolumeUp } from "react-icons/md";
import { useMusicContext } from "../../contexts/MusicContext";
import { currentPercentageBackground } from "../../helpers/currentPercentageBackground";

const PlayerVolume = () => {
  const { music, mute, unMuted } = useMusicContext();
  const [volume, setVolume] = useState<number>(50);

  const handleMute = () => {
    mute();
    setVolume(0);
  };

  const handleUnMuted = () => {
    unMuted();
    setVolume(10);
  };

  const handleChangeVolume = (volume: number) => {
    music.audio.volume = volume / 100;
    setVolume(volume);
  };

  return (
    <S.ContainerVolume>
      {volume === 0 ? (
        <MdVolumeOff onClick={handleUnMuted} />
      ) : (
        <MdVolumeUp onClick={handleMute} />
      )}
      <S.Volume
        type="range"
        value={volume}
        min={0}
        max={100}
        onChange={(e: any) => handleChangeVolume(e.target.valueAsNumber)}
        currentVolume={currentPercentageBackground({
          currentTime: volume,
          durationTime: 100,
        })}
      />
    </S.ContainerVolume>
  );
};

export default PlayerVolume;
