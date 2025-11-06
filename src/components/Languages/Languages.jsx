import React from "react";
import styled from "styled-components";

const List = styled.select`
  border-radius: 10px;
  border: 2px solid white;
  height: 40px;
  margin: 5px 0px;
  padding-left: 10px;
  font-size: 18px;
  background: hsl(0 0% 10%);
  color: #ffffff;
  width: 250px;
  &:hover{
 background:  hsl(0 0% 0%);
  }
`;

const data = [
  {
    language: "javascript",
    version: "18.15.0",
  },
  {
    language: "php",
    version: "8.2.3",
  },
  {
    language: "python",
    version: "3.10.0",
  },
  {
    language: "swift",
    version: "5.3.3",
  },
  {
    language: "typescript",
    version: "5.0.3",
  },
  {
    language: "java",
    version: "15.0.2",
  },
  {
    language: "cpp",
    version: "10.2.0",
  },
  {
    language: "c",
    version: "10.2.0",
  },
];

function Languages({ language, setLanguage }) {
  return (
    <List
      value={language}
      onChange={(event) => {
        setLanguage(event.target.value);
      }}
    >
      <option value="">Select Language</option>
      <optgroup label="Languages">
        {data.map(({ language, version }) => (
          <option key={crypto.randomUUID()} value={language}>
            {language} {""} {`version(${version})`}
          </option>
        ))}
      </optgroup>
    </List>
  );
}

export default Languages;
