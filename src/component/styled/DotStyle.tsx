import styled from "styled-components";

type DotStyleProps = {
  isActive: string;
};
export const DotStyle = styled.div`
  width: 15px;
  height: 15px;

  opacity: ${({ isActive }: DotStyleProps) =>
    isActive === "active" ? "1" : ".6"};

  border-radius: 10px;
  background-color: #fff;

  transform: scale(1);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }
`;
