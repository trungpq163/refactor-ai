import Head from "next/head";
import dedent from "dedent";
import {
  Container,
  ContainerContent,
  ContainerEditorArea,
  EditorStyled,
} from "./index.styles";
import { highlight, languages } from "prismjs";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [code, setCode] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const handleChangeCode = (code: string) => {
    setCode(code);
  };
  const [loading, setLoading] = useState(false);

  const handleRefactorCode = async () => {
    const removeSpaceInCode = code.replace(/\s/g, "");
    if (!removeSpaceInCode) {
      window.alert("Please enter some code");
      return;
    }

    if (removeSpaceInCode.length > 2048) {
      window.alert("Please enter less than 2048 characters");
      return;
    }

    setLoading(true);

    const res = await axios.post("/api/refactor-code", {
      message: removeSpaceInCode,
    });

    setResult(res.data.result);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Web - Turborepo Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <ContainerContent>
          <h1>refactor-ai</h1>
          <p>
            A powerful and intuitive code cleaner and refactorer to streamline
            your development process."
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "5rem",
            }}
          >
            <ContainerEditorArea>
              <EditorStyled
                placeholder="Type some code…"
                value={code}
                onValueChange={handleChangeCode}
                highlight={(code) => highlight(code, languages.js, "js")}
                padding={10}
                onResize={() => {}}
              />
            </ContainerEditorArea>
            <ContainerEditorArea>
              <EditorStyled
                placeholder="Type some code…"
                value={result}
                onValueChange={handleChangeCode}
                highlight={(code) => highlight(code, languages.js, "js")}
                padding={10}
              />
            </ContainerEditorArea>
          </div>
          <a className="button" onClick={handleRefactorCode}>
            {loading ? "loading..." : "convert"}
          </a>
        </ContainerContent>
      </Container>
    </>
  );
}
