import styled from "styled-components"

export const InputContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 0.5em;

  padding: 0 3em;

  label {
    font-size: 1.2em;
  }

  input {
    font-size: 1em;
    padding: 0.7em;

    border: none;
  }
`;