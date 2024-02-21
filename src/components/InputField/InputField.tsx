"use client";
import React, { useState } from "react";
import { useField, Form, FormikProps, Formik } from "formik";
import { ReactNode, FC } from "react";
import Link from "next/link";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

interface iMyTextField {
  name: string;
  type: string;
}

const MyTextField: FC<iMyTextField> = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label>
        {}
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const InputField = () => {
  const [isFirstNameFilled, setFirstNameFilled] = useState<boolean>(false);
  const [isLastNameFilled, setLastNameFilled] = useState<boolean>(false);
  const [isEmailFilled, setEmailFilled] = useState<boolean>(false);
  const [isNumberFilled, setNumberFilled] = useState<boolean>(false);
  const [agreed, setAgreed] = useState<boolean>(false);

  return (
    <div className="w-full">
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props: FormikProps<Values>) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="first-name" className="semi-3">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="Enter your first name"
                onChange={(e) => {
                  setFirstNameFilled(e.target.value.length !== 0);
                }}
                className="placeholder-italic mt-1 p-3 placeholder:pl-0 border-none bg-default placeholder:text-contrast-30 pl:text-[16px] pl:leading-[24px] md:placeholder:text-[14px] md:placeholder:leading-[22.4px]  rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="last-name"
                className="semi-3 md:text-[14px] md:leading-[22.4px]"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Enter your last name"
                onChange={(e) => {
                  setLastNameFilled(e.target.value.length !== 0);
                }}
                className="placeholder-italic placeholder:pl-0 mt-1 p-3 border-none bg-default placeholder:text-contrast-30 pl:text-[16px] pl:leading-[24px] md:placeholder:text-[14px] md:placeholder:leading-[22.4px] rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="semi-3">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                onChange={(e) => {
                  setEmailFilled(e.target.value.length !== 0);
                }}
                className="placeholder-italic placeholder:pl-0 mt-1 p-3 border-none bg-default placeholder:text-contrast-30 pl:text-[16px] pl:leading-[24px] md:placeholder:text-[14px] md:placeholder:leading-[22.4px] rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="semi-3">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+234"
                onChange={(e) => {
                  setNumberFilled(e.target.value.length !== 0);
                }}
                className="placeholder-italic placeholder:pl-0 mt-1 p-3 border-none bg-default placeholder:text-contrast-30 pl:text-[16px] pl:leading-[24px] md:placeholder:text-[14px] md:placeholder:leading-[22.4px] rounded w-full"
              />
            </div>
            <div className="">
              <label
                className="med-3 md:text-[14px] md:leading-[22.5px]"
                htmlFor="remember"
              ></label>
              <input
                type="checkbox"
                id="remember"
                className="custom mr-2 md:mr-1"
              />
              By signing up, I agree to the{"  "}
              <span>
                <Link href={"#"} className="text-blue-base">
                  Terms of Service
                </Link>
              </span>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className={`${
                  isFirstNameFilled &&
                  isLastNameFilled &&
                  isEmailFilled &&
                  isNumberFilled
                    ? "bg-blue-base"
                    : "bg-blue-20"
                } rounded w-full h-12 text-white font-medium text-[16px] leading-[24px] md:leading-[25.6px]`}
                onClick={() => {
                  window.location.href = "/auth/account-verification";
                }}
              >
                Create Account
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InputField;
