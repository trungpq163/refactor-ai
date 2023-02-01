import Head from "next/head";
import { Button } from "ui";
import dedent from "dedent";
import {
  Container,
  EditorArea,
  EditorContent,
  EditorStyled,
  EditorAreaContainer,
} from "./index.styles";
import { highlight, languages } from "prismjs";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState(dedent`
    import React from "react";
    import ReactDOM from "react-dom";
    function App() {
      return (
        <h1>Hello world</h1>
      );
    }
    ReactDOM.render(<App />, document.getElementById("root"));
    `);
  const handleChangeCode = (code: string) => {
    setCode(code);
  };
  return (
    <>
      <Head>
        <title>Web - Turborepo Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <EditorContent>
          <h1>refactor-ai</h1>
          <p>
            A powerful and intuitive code cleaner and refactorer to streamline
            your development process."
          </p>
          <a
            className="button"
            href="https://github.com/react-simple-code-editor/react-simple-code-editor"
          >
            GitHub
          </a>
          <EditorAreaContainer>
            <EditorArea>
              <EditorStyled
                placeholder="Type some code…"
                value={code}
                onValueChange={handleChangeCode}
                highlight={(code) => highlight(code, languages.js, "js")}
                padding={10}
              />
            </EditorArea>
            <EditorArea>
              <EditorStyled
                placeholder="Type some code…"
                value={code}
                onValueChange={handleChangeCode}
                highlight={(code) => highlight(code, languages.js, "js")}
                padding={10}
              />
            </EditorArea>
          </EditorAreaContainer>
        </EditorContent>
      </Container>
    </>
  );
}
