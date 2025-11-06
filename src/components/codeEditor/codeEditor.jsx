import React from "react";
import { Editor } from "@monaco-editor/react";
import Languages from "../Languages/Languages";
import styled from "styled-components";
import OutputContainer from "../OutputContainer/OutputContainer";

const EditorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px;
  background: hsl(0 0% 0%);
`;

const EditorBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 500px;
  border-radius: 20px;
  background: hsl(0 0% 5%);
  padding: 20px;
  margin: auto 20px;
  gap: 20px;
`;

const OutputBox = styled.div`
margin: auto 20px;
`;
function CodeEditor() {
  const editorRef = React.useRef();
  const [value, setValue] = React.useState(``);
  const [language, setLanguage] = React.useState("Javascript");
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  return (
    <EditorContainer>
      <EditorBox>
        <Languages language={language} setLanguage={setLanguage} />

        <div
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            height: "500px",
            width: "600px",
          }}
        >
          <Editor
            height="100%"
            width="100%"
            theme="vs-dark"
            language={language}
            value={value}
            onChange={(value) => setValue(value)}
            onMount={onMount}
          />
        </div>
      </EditorBox>
       <OutputBox>
        <OutputContainer CodeSnippet={value} language={language} />
       </OutputBox>
      
    </EditorContainer>
  );
}

export default CodeEditor;
