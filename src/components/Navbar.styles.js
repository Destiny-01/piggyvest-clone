import styled from "styled-components";
import * as globals from "../utils/constants";

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 6px;
  transition: all ease-in 0.2s;
  &.white {
    background-color: white;
    box-shadow: rgb(206, 211, 218) 0px 0px 7px 0px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  color: #0c1825;
  font-size: 17px;
  align-items: center;
  max-width: 87%;
  margin: 0 auto;
  margin-bottom: 12px;
  &.white {
    max-width: 100%;
    background-color: white;
  }
`;

const Brand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  min-width: 55%;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 16px 20px;
  font-weight: 700;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 17px;
  border-radius: 12px;
  margin-top: 18px;
  transition: background-color 0.8s, border-color 0.8s, color 0.8s;
  cursor: pointer;
  &:hover {
    border-color: #0d60d8;
    color: #0d60d8;
  }
  &.login {
    color: white;
    margin-left: 12px;
    background-color: ${globals.PRIMARY_COLOR};
    &:hover {
      background-color: #0d60d8;
    }
  }
`;

const P = styled.p`
  color: #353535;
  font-weight: 500;
  cursor: pointer;
`;

const Img = styled.img`
  padding-bottom: 5px;
  cursor: pointer;
`;

export { Navbar, Brand, Button, P, Img, Nav };
