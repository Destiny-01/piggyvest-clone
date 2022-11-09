import React from "react";
import Logo from "../images/logo.svg";
import { Brand, Button, Img, Nav, Navbar, P } from "./Navbar.styles";

export default function MyNav() {
  return (
    <Navbar id="nav">
      <Nav>
        <Brand>
          <Img src={Logo} alt="logo" />
          <P>Save</P>
          <P>Invest</P>
          <P>Stories</P>
          <P>FAQs</P>
          <P>Blog</P>
        </Brand>
        <div>
          <Button>Sign In</Button>
          <Button className="login">Create free account</Button>
        </div>
      </Nav>
    </Navbar>
  );
}
