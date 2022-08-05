import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
      <Link to={href} translate="no">
        {children}
      </Link>
    </S.LinkNav>
  );
};

export default NavLink;
