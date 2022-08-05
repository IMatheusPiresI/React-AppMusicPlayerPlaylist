import React, { ReactNode, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import * as S from "./styles";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

const NavLink = ({ href, children, ...rest }: NavLinkProps) => {
  const [active, setActive] = useState(true);
  const { pathname } = useLocation();

  const activeLink = () => {
    setActive(pathname === href ? true : false);
  };

  useEffect(() => {
    activeLink();
  }, [pathname]);

  return (
    <S.LinkNav {...rest} active={active}>
      <Link to={href}>{children}</Link>
    </S.LinkNav>
  );
};

export default NavLink;
