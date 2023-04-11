import styled from "styled-components";

type CheckBoxContainerProps = {
  error: string;
};

export const CheckBoxContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  gap: 0.9em;

  padding: 0 3em;

  input[type="checkbox"] {
    width: 1.9em;
    height: 1.2em;

    display: grid;
    place-content: center;

    appearance: none;

    margin: 0;

    border: 0.15em solid currentColor;
    border-radius: 0.15em;

    color: currentColor;
    background-color: currentColor;

    outline: ${({ error }: CheckBoxContainerProps) =>
      error === "error" ? "2px solid red" : ""};

    cursor: pointer;

    &:before {
      content: "";
      width: 0.65em;
      height: 0.65em;

      transform: scale(0);
      transform-origin: bottom left;
      transition: 120ms transform ease-in-out;

      background-color: #000;

      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }

    &:checked::before {
      transform: scale(1);
    }

    &:focus {
      outline: max(2px, 0.15em) solid currentColor;
      outline-offset: max(2px, 0.15em);
    }

    &:disabled {
      color: #fff;
    }
  }

  */ label > p {
    line-height: 1.5;
  }
`;
