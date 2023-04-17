import styled from "styled-components";

type passwordBarProps = {
  passwordLength: number;
  passwordPower: number;
};

export const PasswordBar = styled.span`
  display: block;
  width: ${({ passwordLength, passwordPower }: passwordBarProps) =>
    passwordLength >= passwordPower ? "200px" : `${passwordLength * 20}px`};
  height: 5px;

  margin: 0.2em 0;

  background-color: ${({ passwordPower, passwordLength }: passwordBarProps) =>
    passwordLength >= passwordPower ? "LightGreen " : "red"};
`;
