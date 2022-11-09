import React from "react";
import {
  Brand,
  Button,
  ButtonLink,
  HeroStyles,
  Img,
  Links,
  Main,
  P,
} from "./Hero.styles";
import Google from "../images/google-icon.svg";
import Apple from "../images/apple-icon.svg";
import HeroImg from "../images/Group 5.png";

export default function Hero() {
  return (
    <HeroStyles>
      <Main>
        <Brand>The Better Way to Save & Invest.</Brand>
        <P>
          PiggyVest helps over 4 million customers achieve their financial goals
          by helping them save and invest with ease.
        </P>
        <Button>Create free account</Button>
        <Links>
          <ButtonLink>
            <Img src={Apple} alt="apple" />
            <P>Get on iPhone</P>
          </ButtonLink>
          <ButtonLink>
            <Img src={Google} alt="google" />
            <P>Get on Android</P>
          </ButtonLink>
        </Links>
      </Main>
      <img src={HeroImg} alt="hero" />
    </HeroStyles>
  );
}
