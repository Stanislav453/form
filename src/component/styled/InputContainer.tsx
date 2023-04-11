import styled from "styled-components";

type InputContainerProps = {
  error: string;
};

export const InputContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 0.5em;

  padding: 0 3em;

  label {
    color: ${({ error }: InputContainerProps) =>
      error === "error" ? "red" : "white"};
    font-size: 1.2em;
  }

  input {
    font-size: 1em;
    padding: 0.7em;

    border: none;

    outline: ${({error}: InputContainerProps) => error === "error" ? "2px solid red" : ""};
    outline-offset: 2px;

    &:focus {
      outline: 2px solid #639ef8;
      outline-offset: 2px;
    }
  }
`;
