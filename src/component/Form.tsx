import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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
  //HOOKS
  const [form, setform] = useState(false);

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
  const passwordRules: any = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
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
      name: Yup.string()
        .max(20, "Name must be 20 characters or less")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email adres")
        .required("Email is required"),
      password: Yup.string()
        .min(
          8,
          "Password must have min 8 characters or less, one number, one capital letter"
        )
        .matches(
          passwordRules,
          "Password must have min 8 characters or less, one number, one capital letter"
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), "Password confirm"], "Password must match")
        .required("Password must match"),
      checkInfo: Yup.boolean().required("Box must be checked"),
    }),
    onSubmit: (values) => {
      if (
        formik.values.email &&
        formik.values.name &&
        formik.values.confirmPassword &&
        formik.values.password
      ) {
        setform(true);
      }
    },
  });

  console.log(true);

    return (
      <Section>
        <FormStyle onSubmit={formik.handleSubmit}>
          <FormRegistration>
            <h1>Registration</h1>
            {/* totot */}
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
              </label>
              <input
                type="password"
                name="password"
                placeholder="Select your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
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
                type="password"
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
                  // onChange={formik.handleChange}
                  // onClick={formik.handleChange}
                  // onBlur={formik.handleBlur}
                />
                <label htmlFor="checkInfo">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ex, quidem eius repellendus nisi quia fugiat aliquam.
                  </p>
                </label>
              </CheckBoxContainer>
              <CheckBoxContainer error={""}>
                <input type="checkbox" name="check-email" />
                <label htmlFor="check-email">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ex, quidem eius repellendus nisi quia fugiat aliquam.
                  </p>
                </label>
              </CheckBoxContainer>
            </Container>

            <Button>Submit</Button>

            {/* toto */}
          </FormRegistration>
          <FormSliderContainer>
            <FormSlider />
          </FormSliderContainer>
        </FormStyle>
      </Section>
    );
};
