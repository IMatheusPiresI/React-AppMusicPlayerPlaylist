import * as S from "./styles";
import music from "../../../public/images/thereal.jpg";
import { useNavigate } from "react-router-dom";

type CardProps = {
  title: string;
  text: string;
  href: string;
};

const Card = ({ title, text, href }: CardProps) => {
  const navigate = useNavigate();

  return (
    <S.Card onClick={() => navigate(href)}>
      <h2>{title}</h2>
      <div>
        <img src={music} alt="The Real Ones" />
      </div>
      <p>{text}</p>
    </S.Card>
  );
};

export default Card;
