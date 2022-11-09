import styled, { createGlobalStyle } from "styled-components";
import Rectangle from "../images/Rectangle 1 (1).png";

export const Globals = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
  }
`;

export const AppStyles = styled.div`
  /* background-image: url(${Rectangle});
  background-repeat: "no-repeat";
  background-position: "93% 0";
  background-size: "380px 100%";
  min-height: "100vh";
  padding-bottom: "1px"; */
  /* margin: 12px; */
`;
