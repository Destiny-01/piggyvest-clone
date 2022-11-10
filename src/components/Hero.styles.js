import styled from "styled-components";
import { PRIMARY_COLOR } from "../utils/constants";

const HeroStyles = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 87%;
  align-items: center;
  margin: 6rem auto;
`;

const Brand = styled.h1`
  font-family: "u8";
  font-weight: 700;
  color: ${PRIMARY_COLOR};
  font-size: 65px;
`;

const Button = styled.button`
  padding: 16px;
  font-weight: 700;
  font-size: 17px;
  border: none;
  border-radius: 12px;
  color: white;
  background-color: rgba(12, 24, 37, 1);
  transition: background-color 0.8s;
  cursor: pointer;
  &:hover {
    background-color: #0d60d8;
  }
`;

const Main = styled.div`
  max-width: 45%;
`;

const P = styled.p`
  color: #353535;
  font-size: 17px;
  margin: 12px 0 24px;
  line-height: 1.6;
  font-weight: 400;
  button & {
    font-size: 14px;
    padding-top: 12px;
    font-weight: 500;
  }
`;

const Links = styled.div`
  display: flex;
  margin-top: 28px;
  justify-content: space-between;
  max-width: 60%;
`;

const ButtonLink = styled(Button)`
  height: 3rem;
  padding: 18px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: ${PRIMARY_COLOR};
  transition: top ease 0.5s !important;
  position: static;
  &:hover {
    background-color: white;
    top: -5px;
    border: 1px solid #bbb !important;
  }
`;

const Img = styled.img`
  height: 24px;
  padding-right: 6px;
`;

export { HeroStyles, Brand, Button, P, Links, ButtonLink, Img, Main };
