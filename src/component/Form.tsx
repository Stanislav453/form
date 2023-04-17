import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormSlider } from "./FormSlider";
import { SubmitText } from "./styled/SubmitText";
import { FormStyle } from "./styled/FormStyle";
import { FormRegistration } from "./styled/FormRegistration";
import { FormSliderContainer } from "./styled/FormSliderContainer";
import { InputContainer } from "./styled/InputContainer";
import { CheckBoxContainer } from "./styled/CheckBoxContainer";
import { Container } from "./styled/Container";
import { Select } from "./styled/Select";
import { Button } from "./styled/Button";
import { Section } from "./styled/Section";
import { PasswordBar } from "./styled/PasswordBar";

export const Form = () => {
  //HOOKS
  const [form, setForm] = useState(false);
  const [passwordType, setPasswordType] = useState(true);

  //VARIABLES_FOR_FORM_VALIDATION
  const passwordLength = 20;
  const passwordPower = 10;
  const nameError = "Name must be 20 characters or less";
  const nameRequired = "Name is required";
  const emailError = "Invalid email address";
  const emailRequired = "Email is required";
  const passwordError = `Password must have min ${passwordPower} characters or less`;
  const passwordRequired = "Password is required";
  const confirmPasswordError = "Password must match";
  const confirmPasswordRequired = "Password must match";
  const checkInfoError = "Please accept the terms of service";

  //FORM_TYPE
  type FormType = {
    name: string;
    email: string;
    country: string;
    password: string;
    confirmPassword: string;
    checkInfo: boolean;
  };

  //VALIDATION_FORM
  const formik = useFormik<FormType>({
    initialValues: {
      name: "",
      email: "",
      country: "",
      password: "",
      confirmPassword: "",
      checkInfo: false,
    },

    validationSchema: Yup.object({
      name: Yup.string().max(passwordLength, nameError).required(nameRequired),
      email: Yup.string().email(emailError).required(emailRequired),
      password: Yup.string()
        .min(passwordPower, passwordError)
        .required(passwordRequired),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), "Password confirm"], confirmPasswordError)
        .required(confirmPasswordRequired),
      checkInfo: Yup.boolean().oneOf([true], checkInfoError),
    }),
    onSubmit: (values) => {
      if (
        formik.values.email &&
        formik.values.name &&
        formik.values.confirmPassword &&
        formik.values.password
      ) {
        setForm(true);
      }
    },
  });

  //CLEAR_FORM_INPUT
  const formSubmit = () => {
    formik.values.name = "";
    formik.values.email = "";
    formik.values.checkInfo = false;
    formik.values.password = "";
    formik.values.confirmPassword = "";
    setForm(false);
  };

  //FORM
  if (form) {
    return (
      <Section>
        <FormStyle onSubmit={formik.handleSubmit}>
          <FormSliderContainer>
            <FormSlider />
          </FormSliderContainer>
          <FormRegistration>
            <h1>Registration successful</h1>
            <SubmitText>
              Thank you, <span>{formik.values.name}</span> for registering. We
              sand you email to you adress <span>{formik.values.email}</span>
            </SubmitText>
            <Button onClick={() => formSubmit()}>Registration</Button>
          </FormRegistration>
        </FormStyle>
      </Section>
    );
  } else {
    return (
      <Section>
        <FormStyle onSubmit={formik.handleSubmit}>
          <FormSliderContainer>
            <FormSlider />
          </FormSliderContainer>
          <FormRegistration id="formRegistration">
            <h1>Registration</h1>
            <InputContainer
              error={formik.touched.name && formik.errors.name ? "error" : ""}
            >
              <label htmlFor="name">
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : "Name"}
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
            </InputContainer>
            <InputContainer
              error={formik.touched.email && formik.errors.email ? "error" : ""}
            >
              <label htmlFor="email">
                {" "}
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "Email"}
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
            </InputContainer>
            <InputContainer error={""}>
              <label htmlFor="country">Country</label>
              <Select name="country">
                <option>Slovakia</option>
                <option>Czech Republic</option>
                <option>Poland</option>
                <option>Austria</option>
                <option>Germany</option>
              </Select>
            </InputContainer>
            <InputContainer
              error={
                formik.touched.password && formik.errors.password ? "error" : ""
              }
            >
              <label htmlFor="password">
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : "Password"}
                {/* PASSWORD_BAR */}
                {formik.values.password && (
                  <PasswordBar
                    passwordLength={formik.values.password.length}
                    passwordPower={passwordPower}
                  />
                )}
              </label>
              <input
                type={passwordType ? "password" : "text"}
                name="password"
                placeholder="Select your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>

              {passwordType ? (
                formik.values.password && (
                  <BiShow onClick={() => setPasswordType(!passwordType)} />
                )
              ) : (
                <BiHide onClick={() => setPasswordType(!passwordType)} />
              )}
            </InputContainer>
            <InputContainer
              error={
                formik.touched.password && formik.errors.confirmPassword
                  ? "error"
                  : ""
              }
            >
              <label htmlFor="confirmPassword">
                {formik.touched.password && formik.errors.confirmPassword
                  ? formik.errors.confirmPassword
                  : "Confirm password"}
              </label>
              <input
                type={passwordType ? "password" : "text"}
                name="confirmPassword"
                placeholder="Repeat your password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
            </InputContainer>
            <Container>
              <CheckBoxContainer
                error={
                  formik.touched.checkInfo && formik.errors.checkInfo
                    ? "error"
                    : ""
                }
              >
                <input
                  type="checkbox"
                  name="checkInfo"
                  value="checked"
                  onChange={formik.handleChange}
                  onClick={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="checkInfo">
                  <p>I agree to the processing of personal data.</p>
                </label>
              </CheckBoxContainer>

              <CheckBoxContainer error={""}>
                <input type="checkbox" name="check-email" value="checked" />
                <label htmlFor="check-email">
                  <p>
                    I agree to receive a questionnaire about customer
                    satisfaction and information on products that are on
                    promotion (recommended) via our website.
                  </p>
                </label>
              </CheckBoxContainer>
            </Container>
            <Button>Submit</Button>
          </FormRegistration>
        </FormStyle>
      </Section>
    );
  }
};
