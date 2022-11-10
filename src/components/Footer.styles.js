import styled from "styled-components";

const FooterStyles = styled.footer``;

const First = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 87%;
  align-items: flex-start;
  margin: 6rem auto;
`;

const Component = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  p:hover {
    color: #0d60d8;
  }
  &:last-of-type {
    max-width: 20%;
    p {
      max-width: 100%;
      text-align: right;
    }
    align-items: flex-end;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  i {
    margin-right: 8px;
  }
`;

const P = styled.p`
  font-size: 13px;
  padding: 7px 0;
  font-weight: 500;
  color: #353535;
  line-height: 1.7;
  &:first-of-type {
    padding-bottom: 9px;
    font-family: "u8", sans-serif;
    font-weight: 700;
  }
`;

const Img = styled.img`
  &:last-of-type {
    margin-top: 1.5rem;
    border: 2px solid whitesmoke;
    border-radius: 10px;
    padding: 10px;
  }
`;

const Second = styled.div`
  text-align: center;
  max-width: 55%;
  margin: 0 auto;
  p:last-of-type {
    margin-top: 8px;
    margin-bottom: 5rem;
    color: #3296ff;
  }
`;

export { FooterStyles, Component, P, Img, Flex, First, Second };
