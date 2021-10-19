import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6rem;
  font-size: 1.6rem;
  background: #eee;
  padding-left: 1rem;
  padding-right: 1rem;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 7;
  border-bottom: 3px solid #027b93;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex: 6;
  height: 100%;
  list-style-type: none;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    position: absolute !important;
    top: 0;
    left: 0;
    background: #fff;
    width: 70%;
    height: 100vh;
    border-right: #ccc 1px solid;
    opacity: 1;
    transform: translateX(-500px);
    transition: transform 0.5s ease-in-out;
    z-index: 8;
    padding-top: 2rem;
  }

  @media (max-width: 480px) {
    width: 85%;
  }
`;

const NavListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  &:hover {
    background: #fff;
    color: #027b93;
  }

  @media (max-width: 768px) {
    max-height: 4rem;
  }
`;

const NavListLink = styled.a`
  display: inline-block;
  font-size: 1.8rem;
  text-decoration: none;
  color: #555;
  font-weight: bolder;
  width: 100%;
  height: 100%;
  text-align: center;
  /*To center vertically, we need line height to be equal to height of navbar*/
  line-height: 6rem;
  margin: auto;

  &:hover {
    background: #fff;
    color: #027b93;
  }

  @media (max-width: 768px) {
    line-height: 4rem;
    color: #000;
  }
`;

const LogoWrapper = styled.div`
  height: 100%;
  padding: 0.8rem;
  flex: 5;
`;

const MenuWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Navbar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const menuToggler = () =>
    document.querySelector(".main-menu").classList.toggle("show");

  useEffect(() => {
    console.log(NavList);
  }, [isMenuVisible]);

  return (
    <Nav>
      <Link href="/" passHref>
        <LogoWrapper>Pistios</LogoWrapper>
      </Link>

      <MenuWrapper onClick={() => setMenuVisible(!isMenuVisible)}>
        <Image src="/menu.png" alt="Menu toggler" width={48} height={48} />
      </MenuWrapper>

      <NavList>
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
