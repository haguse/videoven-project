import React from "react";
import { Nav, Brand, NavItems, Buttons, Hamburger } from "./ScNavbar";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <Nav>
      <Brand>
        <h1>Videoven</h1>
      </Brand>
      <NavItems>
        <p>Bize Katıl</p>
        <p>Stratejiler</p>
        <p>Plan</p>
        <p>Blog</p>
        <p>Yardım</p>
      </NavItems>
      <Buttons>
        <button>Oturum Aç</button>
        <button>Ücretsiz Dene</button>
      </Buttons>
      <Hamburger>
        <GiHamburgerMenu />
      </Hamburger>
    </Nav>
  );
};

export default Navbar;
