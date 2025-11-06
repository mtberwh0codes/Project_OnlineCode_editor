import React from 'react';
import styled from 'styled-components';
import { 
  Sun,
Moon
 } from 'react-feather';

 const HeaderContainer = styled.div`
 display: flex;
 justify-content: space-between;
 padding: 20px;
 align-items: center;
 margin: 0px;
 `;

 const Logo = styled.h1`
 color: hsl(0 0% 95%);
 font-family: "Nunito", sans-serif;
 font-weight: 900px;
 font-style: normal;
 margin-left: 50px;
 `;

 const Button = styled.button`
 background-color : transparent;
 border-radius: 10px;
 height: 40px;
 width: 40px;
 border: 1px solid white;
 margin-right: 50px;
 `;

function Header() {
  return (
    <HeaderContainer>
    <Logo style={{fontFamily : '"poppins". sans-serif',
      fontWeight: '800'
    }}>CodeIt</Logo>
    <Button><Sun size={25} color='hsl(0 0% 95%)'/></Button>
    </HeaderContainer>
  );
}

export default Header;
