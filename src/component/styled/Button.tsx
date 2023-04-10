import styled from "styled-components";

export const Button = styled.button`
  font-weight: 900;
  font-size: 1.5em;

  padding: 0.5em 1em;
  align-self: center;

  border: none;

  color: #fff;
  background-color: #051937;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #082653;
    transition: background-color 0.3s ease-in-out;
  }
`;
