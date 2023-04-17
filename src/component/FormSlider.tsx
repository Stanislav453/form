import React, { useState, useEffect } from "react";
import { Data } from "../Data";
import { SliderContainer } from "./styled/SliderContainer";
import { OneSlider } from "./styled/OneSlider";
import { OneSliderContainer } from "./styled/OneSliderContainer";
import { Dot } from "./Dot";
import { ButtonSlider } from "./styled/ButtonSlider";
import { ButtonSliderContainer } from "./styled/ButtonSliderContainer";

export const FormSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const time = 3000;
    const timer = setTimeout(() => {
      slideIndex >= Data.length - 1
        ? setSlideIndex(0)
        : setSlideIndex(slideIndex + 1);
    }, time);

    return () => clearInterval(timer);
  }, [slideIndex]);

  return (
    <SliderContainer>
      {Data.map((item, key) => {
        const { img, title, desc } = item;
        return (
          <OneSliderContainer
            key={key}
            img={img}
            isActive={slideIndex === key ? "active" : ""}
          >
            <OneSlider>
              <h2>{title}</h2>
              <p>{desc}</p>
            </OneSlider>
          </OneSliderContainer>
        );
      })}
      <ButtonSliderContainer>
        <ButtonSlider>
          {" "}
          <a href="#formRegistration">registration </a>
        </ButtonSlider>
      </ButtonSliderContainer>
      <Dot
        dotCount={Data.length}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />
    </SliderContainer>
  );
};
