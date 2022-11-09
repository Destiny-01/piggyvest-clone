import styled from "styled-components";
import { PRIMARY_COLOR } from "../utils/constants";
import { ButtonLink as ButtonLinks } from "./Hero.styles";

const SecurityContainer = styled.div`
  margin-top: 12rem;
`;

const SecurityStyles = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 17px;
  max-width: 90%;
  margin-bottom: 10rem;
`;

const H1 = styled.h1`
  color: ${PRIMARY_COLOR};
  font-weight: 700;
  font-size: 33px;
  padding-bottom: 16px;
  font-family: "u8", sans-serif;
  &.larger {
    font-size: 38px;
  }
  &.investment {
    font-size: 51px;
  }
`;

const H6 = styled(H1)`
  font-size: 13px;
  display: inline;
  margin-left: 9px;
`;

const H3 = styled(H1)`
  font-size: 20px;
  padding-top: 28px;
`;

const A = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: #0d60d8;
`;

const Button = styled.button`
  padding: 16px;
  font-weight: 700;
  font-size: 20px;
  /* width: 240px; */
  border: none;
  border-radius: 12px;
  color: white;
  /* margin-top: 12px; */
  background-color: rgba(12, 24, 37, 1);
`;

const P = styled.p`
  color: #353535;
  line-height: 1.6;
  padding-bottom: 24px;
  font-weight: 400;
  font-size: 16px;
  &.min-h {
    font-size: 17px;
    min-height: 120px;
  }
  svg + & {
    padding-top: 3px;
    padding-left: 9px;
    font-weight: 500;
  }
`;

const Img = styled.img`
  height: 7.5rem;
  margin-right: 3rem;
  margin-left: auto;
`;

const TinyImg = styled.img`
  /* border-radius: ; */
`;

const Second = styled.div`
  max-width: 60%;
`;

const Flex = styled.div`
  display: flex;
  align-items: flex-start;
  &.center {
    min-width: 100%;
    p {
      padding: 8px 0 0 7px;
    }
  }
`;

const UserImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const PFlex = styled(Flex)`
  flex-wrap: wrap;
  max-width: 88%;
  margin: 0 auto;
  justify-content: space-between;
  /* margin-right: -15px;
  margin-left: -15px; */
`;

const IconFlex = styled(Flex)`
  max-height: 30px;
  transition: margin-left 0.2s ease-out;
`;

const Svg = styled.svg`
  /* position: static; */
  /* vertical-align: bottom; */
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 45px 45px;
  max-width: 65%;
`;

const Card = styled.div`
  background-color: #f9f9f9;
  padding: 30px;
  padding-right: 15px;
  border-radius: 20px;
  max-width: 100%;
  &:hover > .ic {
    margin-left: 12px;
  }
`;

const Build = styled.div`
  max-width: 24%;
`;

const InvestmentContainer = styled(Flex)`
  max-width: 90%;
  margin: 9rem auto;
  /* justify-content: space-around; */
  img {
    margin-left: 3.2rem;
  }
`;

const Investment = styled.div`
  margin-left: 3.3rem;
  max-width: 40%;
  p {
    max-width: 460px;
  }
  a {
    color: #7913e5;
    font-size: 18px;
  }
`;

const Returns = styled.div`
  border-radius: 40px;
  background-color: #f7f0ff;
  padding: 12px;
  font-size: 17px;
  padding-left: 19px;
  font-weight: 700;
  max-width: 190px;
  margin: 4rem 0 2rem 0;
  color: #7913e5;
`;

const Saver = styled.div`
  background-color: #0d60d8;
  max-width: 60%;
  padding: 5rem 11.5rem 4rem 6rem;
  color: white;
  h1 {
    color: white;
    padding-right: 3rem;
  }
  p {
    padding-right: 4rem;
    padding-bottom: 2.5rem;
    &.meet {
      color: white;
    }
  }
`;

const Empty = styled.div`
  background-image: url("https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/PHOTO_2022_08_02_17_33_57_af95edcdcb/PHOTO_2022_08_02_17_33_57_af95edcdcb.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 322px;
`;

const Featured = styled(Flex)`
  justify-content: space-around;
  background-color: #f9f9f9;
  padding: 0 5rem;
  margin: 4rem auto;
  align-items: center;
`;

const Icons = styled(Featured)`
  min-width: 75%;
`;

const Customer = styled(Flex)`
  max-width: 90%;
  margin: auto;
  position: relative;
  &.sticky {
    position: static;
  }
  /* padding-bottom: 3rem; */
  /* align-items: center; */
  /* align-items: flex-end; */
`;

const ButtonLink = styled.div`
  height: 3rem;
  padding: 0 12px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: ${PRIMARY_COLOR};
  &:hover {
    top: -5px;
    border: 1px solid #bbb !important;
  }
  img {
    margin-top: 8px;
  }
  p {
    font-weight: 700;
    display: inline;
    font-size: 14px !important;
    position: relative;
    top: -5px;
  }
`;

const Other = styled.div`
  max-width: 45%;
  margin-top: 8rem;
  .other-p {
    max-width: 82%;
    font-size: 17px !important;
  }
`;

const ScrollContainer = styled.div`
  margin-top: 6rem;
  height: 400px;
  overflow-y: hidden;
  &.static {
    position: static;
  }
  &::before,
  &::after {
    left: 0;
    background: linear-gradient(180deg, #fff 0, hsla(0, 0%, 100%, 0));
    content: "";
    height: 50px;
    position: absolute;
    width: 100%;
    z-index: 2;
  }
  &::after {
    bottom: 0;
    transform: rotate(180deg);
  }
`;

const Scroll = styled.div`
  max-width: 500px;
  animation: 35s linear 0s infinite normal none running anime;
  @keyframes anime {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-675px);
    }
  }
  p {
    font-size: 12px;
    padding-bottom: 0 !important;
  }
`;

const Single = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  max-width: 80%;
  background-color: #f9f9f9;
`;

const Date = styled.p`
  float: right;
  /* font-size: 12px; */
  color: #727272;
`;

export {
  Date,
  SecurityContainer,
  SecurityStyles,
  Returns,
  Button,
  P,
  H1,
  H3,
  A,
  Img,
  Second,
  PFlex,
  Build,
  Grid,
  Icons,
  Card,
  TinyImg,
  IconFlex,
  Svg,
  ScrollContainer,
  Investment,
  InvestmentContainer,
  Saver,
  Flex,
  Empty,
  Featured,
  UserImg,
  Customer,
  Other,
  Scroll,
  Single,
  H6,
  ButtonLink,
};
