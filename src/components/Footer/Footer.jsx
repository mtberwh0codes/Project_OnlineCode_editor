import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: hsl(0 0% 95%);
  font-family: "Nunito", sans-serif;
  font-weight: 900px;
  font-style: normal;
  margin: 0px;
`;

function Footer() {
  return (
    <FooterContainer>
      <p style={{ margin: "0px" }}>
        Developed by Vivek Samadhiya.
      </p>
    </FooterContainer>
  );
}

export default Footer;
