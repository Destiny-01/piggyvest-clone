import React from "react";
import {
  Component,
  First,
  Flex,
  FooterStyles,
  Img,
  P,
  Second,
} from "./Footer.styles";
import Logo from "../images/logo.svg";
import Image from "../images/compliance.webp";

export default function Footer() {
  return (
    <FooterStyles>
      <First>
        <Component>
          <Img src={Logo} alt="logo" width="191" height="41" />
          <Img src={Image} alt="compliance" width="140" height="100" />
        </Component>
        <Component>
          <P>Products</P>
          <P>Piggybank</P>
          <P>Invest</P>
          <P>Safelock</P>
          <P>Target Savings</P>
          <P>Flex Naira</P>
        </Component>
        <Component>
          <P>Company</P>
          <P>About</P>
          <P>FAQs</P>
          <P>Blog</P>
        </Component>
        <Component>
          <P>Legal</P>
          <P>Terms</P>
          <P>Privacy</P>
          <P>Security</P>
        </Component>
        <Component>
          <Flex>
            <i class="fab fa-facebook-square fa-2x"></i>
            <i class="fab fa-twitter-square fa-2x"></i>
            <i class="fab fa-instagram-square fa-2x"></i>
          </Flex>
          <P></P>
          <P>
            Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
            Nigeria.
          </P>
          <P>contact@piggyvest.com</P>
          <P>+234 700 933 933 933</P>
        </Component>
      </First>
      <Second>
        <P></P>
        <P>
          Piggyvest (formerly piggybank.ng) is the leading online savings &
          investing platform in Nigeria. For over 6 years, our customers have
          saved and invested billions of Naira that they would normally be
          tempted to spend
        </P>
        <P>2016 - 2022 PiggyTech Global Limited - RC 1405222</P>
      </Second>
    </FooterStyles>
  );
}
