import * as S from "./styles";
import LogoTheReal from "../../../public/images/logo.jpg";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <S.Container onClick={() => navigate("/")}>
      <S.Logo src={LogoTheReal} alt="Logo The Real Ones" />
      <S.TextLogo translate="no">THE REAL ONES</S.TextLogo>
    </S.Container>
  );
};

export default Logo;
