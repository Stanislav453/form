import styled from "styled-components";

type OneSliderContainerProps = {
  img: string;
  isActive: any;
};

export const OneSliderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  opacity: ${({ isActive }: OneSliderContainerProps) =>
    isActive === "active" ? "1" : "0"};
  transition: opacity 1s ease-in-out;

  background-position: center center;
  background-image: url(${({ img }: OneSliderContainerProps) => img});
`;
