import Editor from "react-simple-code-editor";
import tw from "twin.macro";
import styled from "styled-components";

export const EditorStyled = styled(Editor)`
  ${tw`block font-mono bg-gray-100 rounded-md`}

  textarea {
    ${tw`outline-none`}
  }

  font-variant-ligatures: common-ligatures;
`;

export const EditorContent = styled.div`
  ${tw`mx-auto text-center`}
  tab-size: 4ch;
`;

export const EditorArea = styled.div`
  ${tw`mt-4 overflow-auto max-h-96`}
`;

export const Container = styled.div`
  ${tw`flex items-center justify-center w-full h-full`}
`;

export const EditorAreaContainer = styled.div`
  ${tw`flex flex-row items-center justify-center gap-6`}
`;
