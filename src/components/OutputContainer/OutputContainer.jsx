import React from "react";
import styled from "styled-components";
import axios from "axios";
import { LANGUAGE_VERSIONS } from "../../constants.js";

const Container = styled.div`
  background: hsl(0 0% 5%);
  box-sizing: border-box;
  padding: 20px 0px 20px 20px;
  height: 100vh;
`;

const Button = styled.button`
border: 1px solid white;
background: hsl(0 0% 10%);
font-size: 20px;
color: white;
text-align: center;
padding: 5px;
gap : 2px;
margin-bottom: 30px;
width: 120px;
height: 50px;
cursor: pointer;
&:hover{
background: hsl(0 0% 0%);
}
`;

const Output = styled.p`
 color: green;
 font-size: 18px;
`;

function OutputContainer({ CodeSnippet, language }) {
  const [isCompiling, setIsCompiling] = React.useState(false);
  const [output, setIsOutput] = React.useState();
  React.useEffect(() => {
    if(isCompiling){

      const response = async (language, CodeSnippet) => {
        try {
          const result = await axios.post(
            "https://emkc.org/api/v2/piston/execute",
            {
              language: language,
              version: LANGUAGE_VERSIONS[language],
              files: [
                {
                  content: CodeSnippet,
                },
              ],
            }
          );
          const {run} = result.data;
          setIsOutput(run.output);
        } catch (error) {
          console.log(error);
        }
      };
       response(language,CodeSnippet);
    }
  }, [isCompiling]);

  function handleRun(){
    setIsCompiling(prevState => !prevState);
  }
  return (
    <Container>
      <Button onClick={handleRun}>
        Run Code
      </Button>
      <Output>{output ? output : 'Click "Run Code" to see the output'}</Output>
    </Container>
  );
}

export default OutputContainer;
