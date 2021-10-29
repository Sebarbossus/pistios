import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Logo from "./Logo";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70px;
  padding: 0 25px;
  align-items: center;
  color: ${({ theme }) => theme.palette.text};
`;

const NavList = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
  list-style-type: none;
  flex-direction: row;
  justify-content: end;

  @media (max-width: 768px) {
    display: ${({ isMenuVisible }) => (isMenuVisible ? "flex" : "none")};
    position: absolute;
    top: 70px;
    left: 0;
    margin: 0;
    height: 200px;
    padding-bottom: 3px;
    padding-top: 3px;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.palette.accent};
    color: ${({ theme }) => theme.palette.textAlternative};
    z-index: 999;
  }
`;

const NavListItem = styled.li`
  display: flex;
  height: inherit;
  font-size: 1.6rem;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  margin-right: 7px;
  margin-left: 7px;

  &:hover {
    background: ${({ theme }) => theme.palette.background};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin: 0;

    &:hover > a {
      color: ${({ theme }) => theme.palette.text};
    }
  }
`;

const NavListLink = styled.a`
  padding-bottom: 5px;
  font-family: ${({ theme }) => theme.fonts.title}, cursive;
  color: ${({ theme }) => theme.palette.accent};

  @media (max-width: 768px) {
    color: ${({ theme }) => theme.palette.textAlternative};
  }
`;

const MenuWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0;
    flex-direction: row;
    justify-content: end !important;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Navbar = ({ className }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const links = ["Blog", "Contact"];
  const router = useRouter();

  return (
    <Nav>
      <Logo logoVariation="black" height={32} />

      <MenuWrapper
        onClick={() => {
          setMenuVisible(!isMenuVisible);
        }}
      >
        <Image src="/menu.png" alt="Menu toggler" width={48} height={48} />
      </MenuWrapper>

      <NavList isMenuVisible={isMenuVisible} className={className}>
        {links.map((link, index) => (
          <NavListItem key={index}>
            <Link href={`/${link.toLowerCase()}`} passHref key={index}>
              <NavListLink
                className={
                  router.pathname.startsWith(`/${link.toLowerCase()}`)
                    ? "active"
                    : ""
                }
              >{`${link}`}</NavListLink>
            </Link>
          </NavListItem>
        ))}
      </NavList>
    </Nav>
  );
};

const StyledNavbar = styled(Navbar)`
  .active {
    border-bottom: 4px solid ${({ theme }) => theme.palette.darkPrimary};
  }
`;

export default StyledNavbar;
