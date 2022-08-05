import React from "react";
import Logo from "../Logo";

import NavLink from "../NavLink";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Container>
      <Logo />
      <S.NavLinks>
        <ul>
          <NavLink href="/musics">Músicas</NavLink>
          <NavLink href="/playlists">Playlists</NavLink>
        </ul>
      </S.NavLinks>
    </S.Container>
  );
};

export default Header;
