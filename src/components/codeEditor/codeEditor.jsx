import React from "react";
import { Editor } from "@monaco-editor/react";
import Languages from "../Languages/Languages";
import styled from "styled-components";
import OutputContainer from "../OutputContainer/OutputContainer";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const EditorBox = styled.div`
  display: flex;
  flex-direction: column;
  background: hsl(0 0% 5%);
`;

const OutputBox = styled.div`
  border-left: 1px solid white;
`;

const SelectionPane = styled.div`
display: flex;
box-sizing: border-box;
margin: 0;
padding: 0;
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
    <>
      <PanelGroup autoSaveId="example" direction="horizontal"
      style={{
        display: "flex",
        alignContent: "stretch"
      }}
      >
        <Panel defaultSize={50}>
          <EditorBox>
            <SelectionPane>
              <Languages language={language} setLanguage={setLanguage} />
            </SelectionPane>
            
            <Editor
              height="95vh"
              theme="vs-dark"
              language={language}
              value={value}
              onChange={(value) => setValue(value)}
              onMount={onMount}
              options={{
                cursorBlinking: "expand",
                readOnly: false,
                cursorStyle: 'line',
              }}
            />
          </EditorBox>
        </Panel>
        <PanelResizeHandle
          style={{
            background: "white",
          }}
        />
        <Panel defaultSize={50}>
          <OutputBox>
            <OutputContainer CodeSnippet={value} language={language} />
          </OutputBox>
        </Panel>
      </PanelGroup>
    </>
  );
}

export default CodeEditor;
