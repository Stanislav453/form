import styled from "styled-components";

export const FormRegistration = styled.div`
  min-height: 800px;

  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1em;

  padding-bottom: 1em;

  color: #fff;
  background-image: linear-gradient(
    to top,
    #767872,
    #51625a,
    #284b4d,
    #003346,
    #051937
  );
  border-radius: 0 10px 10px 0;

  h1 {
    display: block;
    text-align: center;
    padding: 0.5em 0;
    font-size: clamp(1.5em, 10vw, 3.5em);
  }
`;
