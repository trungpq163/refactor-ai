import Editor from "react-simple-code-editor";
import tw from "twin.macro";
import styled from "styled-components";

export const EditorStyled = styled(Editor)`
  font-size: 12px;
  font-variant-ligatures: common-ligatures;
  background-color: #fafafa;
  border-radius: 3px;
  width: 440px;
  height: 200px;

  textarea {
    outline: 0;
  }
`;

export const EditorContent = styled.div`
  padding: 10px;
  text-align: center;
`;

export const EditorArea = styled.div`
  tab-size: 4ch;
  overflow: auto;
  margin: 1.67em 0;
`;

export const Container = styled.div`
  ${tw`flex items-center justify-center`}
`;

export const EditorAreaContainer = styled.div`
  ${tw`flex flex-row items-center justify-center gap-6`}
`;
