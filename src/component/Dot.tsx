import { DotStyle } from "./styled/DotStyle";
import { DotContainer } from "./styled/DotContainer";

type dotProps = {
  dotCount: number;
  slideIndex: number;
  setSlideIndex: any;
};

export const Dot = ({ dotCount, slideIndex, setSlideIndex }: dotProps) => {
  return (
    <DotContainer>
      {Array(dotCount)
        .fill(1)
        .map((_, index) => {
          return (
            <DotStyle
              key={index}
              isActive={slideIndex === index ? "active" : ""}
              onClick={() => setSlideIndex(index)}
            />
          );
        })}
    </DotContainer>
  );
};
