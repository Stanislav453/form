import styled from "styled-components";
import { Button } from "./Button";

export const ButtonSlider = styled(Button)`
  display: none;
  text-transform: uppercase;
  font-size: 2em;

  @media (max-width: 50em) {
    display: block;
  }
`;
