import styled from "styled-components";

export const FormStyle = styled.form`
  width: 100%;
  max-width: 1200px;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 1em;

  
  @media ( max-width: 50em ) {
    flex-direction: column;
  }
`;
