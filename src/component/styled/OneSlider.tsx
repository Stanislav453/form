
import styled from "styled-components"

export const OneSlider = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;

  background-color: rgba(0, 0, 0, 0.4);

  h2,
  p {
    width: 100%;
    max-width: 550px;
    display: block;

    text-align: center;

    color: #fff;
  }

  h2 {
    font-size: clamp(2em, 10vw, 3em);
  }

  p {
    font-size: clamp(1em, 10vw, 1.5em);
    line-height: 1.5em;
  }
`;