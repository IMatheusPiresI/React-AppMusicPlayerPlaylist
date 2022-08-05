import Card from "../../components/Card";
import * as S from "./styles";

const Presentation = () => {
  return (
    <S.Presentation>
      <S.Title>THE REAL ONES</S.Title>

      <S.ContainerCard>
        <Card
          title="Músicas"
          text="Escolha qual música deseja ouvir e escute todas que quiser."
          href="/musics"
        />
        <Card
          title="Playlist"
          text="Coloque para tocar as playlists mais queridas por você."
          href="/playlists"
        />
      </S.ContainerCard>
    </S.Presentation>
  );
};

export default Presentation;
