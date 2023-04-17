import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  min-height: 800px;

  position: relative;
  top: 0;
  left: 0;

  @media (max-width: 50em /* 800px */) {
    height: 100vh;
  }
`;
