import * as S from "./styles";
import { BsMusicPlayer } from "react-icons/bs";

const UnSelectedPlaylist = () => {
  return (
    <S.Container>
      <BsMusicPlayer />
      <h2>
        Escolha qual playlist combina mais com sua vibe e coloque para tocar.
      </h2>
    </S.Container>
  );
};

export default UnSelectedPlaylist;
