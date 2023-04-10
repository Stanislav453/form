import React from "react";
import { FormSlider } from "./FormSlider";
import { FormStyle } from "./styled/FormStyle";
import { FormRegistration } from "./styled/FormRegistration";
import { FormSliderContainer } from "./styled/FormSliderContainer";
import { InputContainer } from "./styled/InputContainer";
import { CheckBoxContainer } from "./styled/CheckBoxContainer";
import { Container } from "./styled/Container";
import { Select } from "./styled/Select";
import { Button } from "./styled/Button";
import { Section } from "./Section";

export const Form = () => {
  return (
    <Section> 
      <FormStyle>
        <FormRegistration>
          <h1>Registration</h1>
          <InputContainer>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Your name"></input>
          </InputContainer>
          <InputContainer>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Your email"></input>
          </InputContainer>
          <InputContainer>
            <label htmlFor="country">Country</label>
            <Select name="country">
              <option>Slovakia</option>
              <option>Czech Republic</option>
              <option>Poland</option>
              <option>Austria</option>
              <option>Germany</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Select your password"
            ></input>
          </InputContainer>
          <InputContainer>
            <label htmlFor="repeatPassword">Repeat password</label>
            <input
              type="password"
              name="repeatPassword"
              placeholder="Repeat your password"
            ></input>
          </InputContainer>
          <Container>
            <CheckBoxContainer>
              <input type="checkbox" name="check-info" />
              <label htmlFor="check-info">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                  quidem eius repellendus nisi quia fugiat aliquam.
                </p>
              </label>
            </CheckBoxContainer>
            <CheckBoxContainer>
              <input type="checkbox" name="check-email" />
              <label htmlFor="check-email">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                  quidem eius repellendus nisi quia fugiat aliquam.
                </p>
              </label>
            </CheckBoxContainer>
          </Container>

          <Button>Submit</Button>
        </FormRegistration>
        <FormSliderContainer>
          <FormSlider />
        </FormSliderContainer>
      </FormStyle>
    </Section>
  );
};
