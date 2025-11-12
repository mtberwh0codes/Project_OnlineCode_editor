import React from "react";
import styled from "styled-components";
const InputDiv = styled.div`
  box-sizing: borderbox;
  margin: 0;
  padding: 0;
  border: 1px solid white;
  background: hsl(0 0% 5%);
  width: 100%;
  height: 100%;
`;
const InputArea = styled.textarea`
  box-sizing: borderbox;
  margin: 0;
  padding: 0;
  background: hsl(0 0% 5%);
  height: 100%;
  width: 100%;
  padding: 20px;
`;

function InputContainer({userInput,setUserInput}) {
  return (
    <InputDiv>
      <InputArea 
      placeholder="Enter input here"
      value={userInput}
      onChange={(event) => {
        setUserInput(event.target.value);
      }}
      ></InputArea>
    </InputDiv>
  );
}

export default InputContainer;
