import Editor from "react-simple-code-editor";
import tw from "twin.macro";
import styled from "styled-components";

export const EditorStyled = styled(Editor)`
  font-size: 12px;
  font-variant-ligatures: common-ligatures;
  background-color: #fafafa;
  border-radius: 3px;
  width: 440px;

  textarea {
    outline: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const ContainerContent = styled.div`
  padding: 10px;
  text-align: center;
`;

export const ContainerEditorArea = styled.div`
  tab-size: 4ch;
  max-height: 400px;
  overflow: auto;
  margin: 1.67em 0;
`;
