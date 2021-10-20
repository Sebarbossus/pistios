import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 70px;
  padding: 0 25px;
  align-items: center;
  background: ${({ theme }) => theme.palette.darkPrimary};
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
    height: 400px;
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
  font-size: 1.3rem;
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
  display: flex;
  width: 100%;
  min-width: 100px;
  height: inherit;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.palette.text};

  @media (max-width: 768px) {
    color: ${({ theme }) => theme.palette.textAlternative};
  }
`;

const LogoWrapper = styled.a`
  font-size: 1.3rem;
`;

const MenuWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0;
    flex-direction: row;
    justify-content: end;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Navbar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <Nav>
      <Link href="/" passHref>
        <LogoWrapper>Pistios</LogoWrapper>
      </Link>

      <MenuWrapper
        onClick={() => {
          setMenuVisible(!isMenuVisible);
        }}
      >
        <Image src="/menu.png" alt="Menu toggler" width={48} height={48} />
      </MenuWrapper>

      <NavList isMenuVisible={isMenuVisible}>
        <NavListItem>
          <Link href="/blog" passHref>
            <NavListLink>Blog</NavListLink>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/community" passHref>
            <NavListLink>Community</NavListLink>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/support" passHref>
            <NavListLink>Support</NavListLink>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/contact" passHref>
            <NavListLink>Contact</NavListLink>
          </Link>
        </NavListItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
