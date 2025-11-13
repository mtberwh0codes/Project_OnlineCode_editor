import React from "react";
import { Editor } from "@monaco-editor/react";
import Languages from "../Languages/Languages";
import styled from "styled-components";
import OutputContainer from "../OutputContainer/OutputContainer";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import InputContainer from "../InputContainer/InputContainer";

const EditorBox = styled.div`
  display: flex;
  flex-direction: column;
  background: hsl(0 0% 5%);
`;

const OutputBox = styled.div`
  border-left: 1px solid white;
  height: 100%;
  overflow: auto;
`;

const SelectionPane = styled.div`
  display: flex;
  box-sizing: border-box;
  margin: 0.5vh 0px;
  padding: 0;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

function CodeEditor() {
  const editorRef = React.useRef();
  const [value, setValue] = React.useState(``);
  const [language, setLanguage] = React.useState("");
  const [userInput, setUserInput] = React.useState("");
  const [srcDoc, setSrcDoc] = React.useState("");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  React.useEffect(() => {
    if (language.toLowerCase() === "html") {
      const timeout = setTimeout(() => {
        const doc = `
        <!DOCTYPE html>
        <html lang="en">
          ${value}
        </html>
      `;
        setSrcDoc(doc);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [value, language]);

  return (
    <>
      <PanelGroup autoSaveId="horizontal-layout" direction="horizontal">
        <Panel defaultSize={60}>
          <EditorBox>
            <SelectionPane>
              <Languages
                language={language}
                setLanguage={setLanguage}
                value={value}
                setValue={setValue}
              />
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
                cursorStyle: "line",
              }}
            />
          </EditorBox>
        </Panel>
        <PanelResizeHandle
          style={{
            background: "white",
          }}
        />
        <Panel
          defaultSize={40}
          style={{
            borderLeft: "1px solid",
          }}
        >
          {language.toLowerCase() === "html" ? (
            <iframe
              srcDoc={srcDoc}
              title="HTML Output"
              sandbox="allow-scripts allow-same-origin"
              width="100%"
              height="100%"
              style={{
                backgroundColor: "white",
                border: "2px solid white",
              }}
            />
          ) : (
            <ResultContainer>
              <PanelGroup
                direction="vertical"
                autoSaveId="vertical-layout"
                style={{
                  height: "100%",
                }}
              >
                <Panel defaultSize={50}>
                  <OutputBox>
                    <OutputContainer
                      CodeSnippet={value}
                      language={language}
                      userInput={userInput}
                    />
                  </OutputBox>
                </Panel>
                <PanelResizeHandle
                  style={{
                    backgroundColor: "blue",
                    // border: "5px solid blue"
                  }}
                />

                <Panel defaultSize={50}>
                  <InputContainer
                    userInput={userInput}
                    setUserInput={setUserInput}
                  />
                </Panel>
              </PanelGroup>
            </ResultContainer>
          )}
        </Panel>
      </PanelGroup>
    </>
  );
}

export default CodeEditor;
