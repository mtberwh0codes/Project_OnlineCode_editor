import React from "react";
import CodeEditor from "../codeEditor/codeEditor";
import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  background: hsl(0 0% 0%);
  margin: 0px 0px;
  padding: 0px;
  height: 100vh;
  width: 100vw;
`;

export default function App() {
  return (
    <Container>
      <Header />
      <CodeEditor />
      <Footer />
    </Container>
  );
}
