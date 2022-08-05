import { IoMdPause, IoMdPlay } from "react-icons/io";
import { useMusicContext } from "../../contexts/MusicContext";

const PlayerPlayPause = () => {
  const { isPlaying, play, pause } = useMusicContext();

  return (
    <>
      {!isPlaying ? <IoMdPlay onClick={play} /> : <IoMdPause onClick={pause} />}
    </>
  );
};

export default PlayerPlayPause;
