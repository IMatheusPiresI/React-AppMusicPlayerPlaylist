import { Outlet } from "react-router-dom";
import MusicPlayer from "../../components/MusicPlayer";
import { useMusicContext } from "../../contexts/MusicContext";
import * as S from "./styles";

const Home = () => {
  const { music } = useMusicContext();
  return (
    <>
      <S.Container>
        <S.ShadowImage />
        <Outlet />
        {music?.audio && <MusicPlayer />}
      </S.Container>
    </>
  );
};

export default Home;
