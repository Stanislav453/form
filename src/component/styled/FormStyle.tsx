import styled from "styled-components";

export const FormStyle = styled.form`
  width: 100%;
  max-width: 1200px;
  height: auto;

  display: flex;

  @media (max-width: 50em) {
    flex-direction: column;
  }
`;
